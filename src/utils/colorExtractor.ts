export const extractColors = async (imageUrl: string, count: number = 6): Promise<string[]> => {
  try {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;
    
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return [];

    // Resize to small dimensions for performance
    canvas.width = 50;
    canvas.height = 50;
    ctx.drawImage(img, 0, 0, 50, 50);

    const imageData = ctx.getImageData(0, 0, 50, 50).data;
    const colorCounts: Record<string, number> = {};

    // Step 1: Count colors with quantization
    for (let i = 0; i < imageData.length; i += 4) {
      const r = imageData[i];
      const g = imageData[i + 1];
      const b = imageData[i + 2];
      const a = imageData[i + 3];

      if (a < 128) continue; // Skip transparent

      // Quantize to multiples of 32 to group similar colors
      const bucketSize = 32;
      const rQ = Math.floor(r / bucketSize) * bucketSize;
      const gQ = Math.floor(g / bucketSize) * bucketSize;
      const bQ = Math.floor(b / bucketSize) * bucketSize;

      const key = `${rQ},${gQ},${bQ}`;
      colorCounts[key] = (colorCounts[key] || 0) + 1;
    }

    // Step 2: Sort by frequency
    const sortedColors = Object.entries(colorCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, count)
      .map(([key]) => {
        const [r, g, b] = key.split(',').map(Number);
        // Add half bucket size to get center of color range
        const rC = Math.min(255, r + 16);
        const gC = Math.min(255, g + 16);
        const bC = Math.min(255, b + 16);
        
        return `#${((1 << 24) + (rC << 16) + (gC << 8) + bC).toString(16).slice(1)}`;
      });

    return sortedColors;
  } catch (e) {
    console.error("Failed to extract colors", e);
    return [];
  }
};
