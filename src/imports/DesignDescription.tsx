import imgImage from "figma:asset/ff7de537e56f7757058efb096a9160b5400bea64.png";

export default function DesignDescription() {
  return (
    <div className="bg-[#c4bfb3] relative size-full" data-name="Design Description">
      <div className="absolute h-[857.5px] left-[48px] top-[374.65px] w-[984px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="857.5" src={imgImage} width="984" />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.5] left-[48px] not-italic text-[#101828] text-[24px] top-[1281.33px] tracking-[-0.72px] w-[983.083px]">Inspired by the layout and rhythm of newspapers, the report and research are designed to evoke the feeling of reading a printed publication.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.2] left-[48px] not-italic text-[#222325] text-[20px] top-[50px] tracking-[-0.6px] w-[460px]">Marketing Theme Direction</p>
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[200px] left-[490px] not-italic text-[#222325] text-[150px] text-nowrap top-[187.17px] tracking-[-0.26px] whitespace-pre">{`Newspaper `}</p>
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[200px] left-[756px] not-italic text-[#222325] text-[150px] text-nowrap top-[332.17px] tracking-[-0.26px] whitespace-pre">Style</p>
    </div>
  );
}