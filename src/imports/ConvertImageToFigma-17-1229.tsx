import svgPaths from "./svg-l3fwchsnil";
import imgImageLogo from "figma:asset/ab1a3bc4c79e8086615a184fa1ef00c09456fe04.png";
import imgImageWithFallback from "figma:asset/92eae5a47023447f35fe04ec929c7dd8b2af5a3a.png";
import imgCover11 from "figma:asset/e230f0efd6ed728e43ccfd85da73f6ff64977176.png";

function ImageLogo() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Image (Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[32px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] text-nowrap top-0 tracking-[-0.9492px] whitespace-pre">Docs team</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[32px] relative shrink-0 w-[135.453px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[135.453px]">
        <ImageLogo />
        <Text />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[112.055px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[112.055px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.1504px] whitespace-pre">About event</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[103.766px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[103.766px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.1504px] whitespace-pre">Contact us</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-[#155dfc] grow h-[36px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.1504px] whitespace-pre">Upload work</p>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[36px] relative shrink-0 w-[362.734px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[36px] items-center relative w-[362.734px]">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[69px] relative shrink-0 w-[1305px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[69px] items-center justify-between pb-px pt-0 px-[24px] relative w-[1305px]">
        <Container />
        <Navigation />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[145.906px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[145.906px]">
        <Icon />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[85px] not-italic text-[#6a7282] text-[14px] text-center text-nowrap top-[8.5px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Back to gallery</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[32px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 bg-white grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center p-px relative w-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[72px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-start relative w-[72px]">
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-between left-[24px] top-[32px] w-[1257px]" data-name="Container">
      <Button3 />
      <Container1 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[430px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[430px] items-start left-[204.5px] overflow-clip rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[100px] w-[896px]" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white h-[530px] left-0 top-0 w-[1305px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-0 top-0 w-[77.461px]" data-name="Heading 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[30px] text-nowrap text-white tracking-[0.3955px] whitespace-pre">Bitter</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute h-[22px] left-0 rounded-[8px] top-[48px] w-[113.344px]" data-name="Badge">
      <div className="h-[22px] overflow-clip relative rounded-[inherit] w-[113.344px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[9px] not-italic text-[#99a1af] text-[12px] text-nowrap top-[4px] whitespace-pre">Marketing theme</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-[#fb2c36] h-[4px] left-0 top-[110px] w-[40px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[16px] left-[24px] top-[24px] w-[432px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-px uppercase whitespace-pre">{`ARTIST'S NOTES`}</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#3d3d3d] h-[117.5px] left-0 rounded-[6px] top-[146px] w-[480px]" data-name="Container">
      <Paragraph />
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[22.75px] left-[24px] text-[#d1d5dc] text-[14px] top-[49px] tracking-[-0.1504px] w-[406px]">A vibrant and colorful exploration of the Bitter typeface, mixing modern photography with classic serifs.</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p13f2e300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ThemeDetail() {
  return (
    <div className="h-[20px] relative shrink-0 w-[30.789px]" data-name="ThemeDetail">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[30.789px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[15.5px] not-italic text-[14px] text-center text-nowrap text-white top-[0.5px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Vote</p>
      </div>
    </div>
  );
}

function ThemeDetail1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[44.172px]" data-name="ThemeDetail">
      <div aria-hidden="true" className="absolute border-[#6a7282] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[44.172px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[27.5px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">2850</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#3d3d3d] box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center left-0 p-px rounded-[6px] top-[295.5px] w-[136.961px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Icon3 />
      <ThemeDetail />
      <ThemeDetail1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="Container">
      <Heading />
      <Badge />
      <Container5 />
      <Container6 />
      <Button6 />
      <div className="absolute h-[128.514px] left-[391.43px] top-[-4.26px] w-[88.574px]" data-name="cover 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCover11} />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-px uppercase whitespace-pre">KEYWORDS</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#3d3d3d] h-[22px] left-0 rounded-[6px] top-0 w-[84.945px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[84.945px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] text-nowrap whitespace-pre">Typography</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#3d3d3d] h-[22px] left-[92.95px] rounded-[6px] top-0 w-[63.109px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[63.109px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] text-nowrap whitespace-pre">Colorful</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#3d3d3d] h-[22px] left-[164.05px] rounded-[6px] top-0 w-[48.914px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[48.914px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] text-nowrap whitespace-pre">Bitter</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#3d3d3d] h-[22px] left-[220.97px] rounded-[6px] top-0 w-[44.383px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[44.383px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] text-nowrap whitespace-pre">Serif</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <Badge1 />
      <Badge2 />
      <Badge3 />
      <Badge4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[50px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container8 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[480px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-px uppercase whitespace-pre">DOMINANT COLORS</p>
    </div>
  );
}

function Container10() {
  return <div className="[grid-area:1_/_1] bg-white rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container" />;
}

function Container11() {
  return <div className="[grid-area:1_/_2] bg-neutral-100 rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container" />;
}

function Container12() {
  return <div className="[grid-area:1_/_3] bg-[#ffb74d] rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container" />;
}

function Container13() {
  return <div className="[grid-area:1_/_4] bg-[#ffcc80] rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container" />;
}

function Container14() {
  return <div className="[grid-area:1_/_5] bg-[#90caf9] rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container" />;
}

function Container15() {
  return <div className="[grid-area:1_/_6] bg-[#42a5f5] rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container" />;
}

function Container16() {
  return <div className="[grid-area:2_/_1] bg-[#e0e0e0] rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container" />;
}

function Container17() {
  return <div className="[grid-area:2_/_2] bg-[#bdbdbd] rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container" />;
}

function Container18() {
  return <div className="[grid-area:2_/_3] bg-[#81c784] rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container" />;
}

function Container19() {
  return <div className="[grid-area:2_/_4] bg-[#009688] rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container" />;
}

function Container20() {
  return <div className="[grid-area:2_/_5] bg-[#7986cb] rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container" />;
}

function Container21() {
  return <div className="[grid-area:2_/_6] bg-[#5c6bc0] rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container" />;
}

function Container22() {
  return (
    <div className="absolute gap-[8px] grid grid-cols-[repeat(6,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[72px] left-0 top-[28px] w-[232px]" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[100px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Container">
      <Container9 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute gap-[64px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[335.5px] left-[140.5px] top-[96px] w-[1024px]" data-name="Container">
      <Container7 />
      <Container24 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#333333] box-border content-stretch flex h-[40px] items-center justify-center left-[628.5px] pb-0 pt-px px-0 rounded-[8px] top-[-20px] w-[48px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#364153] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Icon4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#333333] h-[495.5px] left-0 top-[490px] w-[1305px]" data-name="Container">
      <Container25 />
      <Button7 />
    </div>
  );
}

function ThemeDetail2() {
  return (
    <div className="h-[985.5px] relative shrink-0 w-[1305px]" data-name="ThemeDetail">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[985.5px] relative w-[1305px]">
        <Container4 />
        <Container26 />
      </div>
    </div>
  );
}

export default function ConvertImageToFigma() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Convert Image to Figma">
      <Header />
      <ThemeDetail2 />
    </div>
  );
}