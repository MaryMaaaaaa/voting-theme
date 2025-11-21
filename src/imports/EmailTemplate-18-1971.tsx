import svgPaths from "./svg-ha9zioh1lu";
import imgKling20251114411401 from "figma:asset/e033a586cb3e9297815f0e233301066d59480a09.png";
import img63A4B8Eb7877E10018Fd635611 from "figma:asset/bc4d1ebeac1fca48e86ff6b957a8b764f3861833.png";
import imgJellycatPeanutPenguinLarge31200X1 from "figma:asset/1757bbe232b53c925cf150b9e8bf948627bb7402.png";
import img1Af16E3D2A6E4610997982Ee9D273B9E1 from "figma:asset/b1b52c81bc9328130d752f761414cf05674c037d.png";

function DocsBrand() {
  return (
    <div className="absolute left-[calc(50%-55px)] size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="docs brand">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="docs brand">
          <path d={svgPaths.p1b92b00} fill="var(--fill-0, #0B5CFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LogoWrap() {
  return (
    <div className="h-[32px] relative shrink-0 w-[142px]" data-name="Logo wrap">
      <DocsBrand />
      <p className="absolute bottom-0 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-[26.06%] not-italic right-[-3.52%] text-[#222222] text-[20px] text-nowrap top-0 whitespace-pre">Zoom Docs</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Logo">
      <LogoWrap />
    </div>
  );
}

function EmailTemplateHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="_Email template header">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[24px] py-[8px] relative w-full">
          {/* Logo removed */}
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white h-[320px] overflow-clip relative rounded-[12px] shrink-0 w-[528px]">
      <div className="absolute h-[668.303px] left-[-28.32px] top-[-76.6px] w-[576.755px]" data-name="kling_20251114_图生图_转化成手绘线条风格_4114_0 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgKling20251114411401} />
      </div>
    </div>
  );
}

function HeadingAndBody() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Heading and body">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#555555] text-[0px] w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] mb-[16px] text-[16px]">
          <span className="text-[#222222]">{`Hi everyone `}</span>👋 ,
        </p>
        <p className="leading-[24px] text-[16px]">
          Join the<span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#222222]">{` Docs theme co-creation event -`}</span>
          <span>{` unleash your creativity and bring Docs to life across every scenario!`}</span>
        </p>
      </div>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Join Now</p>
    </div>
  );
}

function ButtonsButton() {
  return (
    <a href="https://dg01docs.zoom.us/doc/IOu9SqJuTiKS9zh6oaqAnA" target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-[#0b5cff] relative rounded-[8px] shrink-0 w-[198px]" data-name="Buttons/Button">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[198px]">
          <TextPadding />
        </div>
        <div aria-hidden="true" className="absolute border border-[#0b5cff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </a>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-[198px]" data-name="Actions">
      <ButtonsButton />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full">
      <Actions />
    </div>
  );
}

function HeadingAndBody1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Heading and body">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#555555] text-[0px] w-full">
        <p className="leading-[24px] mb-[16px]">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#222222] text-[18px]">Event Directions</span>
          <span className="text-[16px]">
            <br aria-hidden="true" />
            Pick one of the two creative directions or explore both.
          </span>
        </p>
        <ol className="list-decimal" start="1">
          <li className="leading-[24px] mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px]">
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#222222]">Product Theme</span>
            <span>
              <br aria-hidden="true" />
              Focus on visualizing Docs in product features, user experience, and collaboration.
              <br aria-hidden="true" />
              Examples: meeting notes, project plans, product templates, and more.
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
          <li className="leading-[24px] ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px]">
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#222222]">Marketing Theme</span>
            <span>
              <br aria-hidden="true" />
              Draw inspiration from festivals or trending topics to creative Docs themes for branding.
              <br aria-hidden="true" />
              Examples: Halloween, Christmas, Thanksgiving, Year-in-Review, AI trends, etc.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function HeadingAndBody2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Heading and body">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#222222] text-[18px] w-full">🕙 Timeline</p>
    </div>
  );
}

function HeadingAndBody3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[48px] items-start relative shrink-0 w-full" data-name="Heading and body">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#555555] text-[16px] w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">{`Submission Deadline: `}</span>
        </li>
      </ul>
    </div>
  );
}

function HeadingAndBody4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[48px] items-start relative shrink-0 w-full" data-name="Heading and body">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#555555] text-[16px] w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">{`Public Voting: `}</span>
        </li>
      </ul>
    </div>
  );
}

function HeadingAndBody5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Heading and body">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#555555] text-[16px] w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Results Announcement:</span>
        </li>
      </ul>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <HeadingAndBody3 />
      <HeadingAndBody4 />
      <HeadingAndBody5 />
    </div>
  );
}

function HeadingAndBody6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Heading and body">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#222222] text-[16px] w-full">
        {`Dec 3, 11:59 CST (UTC+8) / `}
        <br aria-hidden="true" />
        Dec 2, 19:59 PST (UTC-8)
      </p>
    </div>
  );
}

function HeadingAndBody7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Heading and body">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#222222] text-[16px] w-full">
        {`Dec 4-8, CST (UTC+8) / `}
        <br aria-hidden="true" />
        Dec 3-7, PST (UTC-8)
      </p>
    </div>
  );
}

function HeadingAndBody8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Heading and body">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#222222] text-[16px] w-full">
        {`Dec 10, CST (UTC+8) / `}
        <br aria-hidden="true" />
        Dec 9, PST (UTC-8)
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <HeadingAndBody6 />
      <HeadingAndBody7 />
      <HeadingAndBody8 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame9 />
    </div>
  );
}

function LinkAndText() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Link and text">
      <a href="https://dg01docs.zoom.us/doc/YdlbGmdRSTKwRSNiBZpF-A" target="_blank" rel="noopener noreferrer" className="w-full no-underline">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0b5cff] text-[16px] w-full">Event details →</p>
      </a>
    </div>
  );
}

function HeadingAndBody9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Heading and body">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#555555] text-[0px] w-full">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#222222] text-[18px]">Rewards and Showcase</span>
        <span className="text-[16px]">
          <br aria-hidden="true" />
          {`Public voting decides the winners. `}
        </span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#222222] text-[16px]">Top 10 entries win awesome prizes</span>
        <span className="text-[16px]">{` and other outstanding works may also be featured in the Docs template library!`}</span>
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndBody />
      <Frame6 />
      <div className="h-px relative shrink-0 w-[80px]" data-name="Divider">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(234, 236, 240, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 1">
            <path clipRule="evenodd" d="M80 1H0V0H80V1Z" fill="var(--fill-0, #EAECF0)" fillRule="evenodd" id="Divider" />
          </svg>
        </div>
      </div>
      <HeadingAndBody1 />
      <HeadingAndBody2 />
      <Frame8 />
      <LinkAndText />
      <div className="h-px relative shrink-0 w-[80px]" data-name="Divider">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(234, 236, 240, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 1">
            <path clipRule="evenodd" d="M80 1H0V0H80V1Z" fill="var(--fill-0, #EAECF0)" fillRule="evenodd" id="Divider" />
          </svg>
        </div>
      </div>
      <HeadingAndBody9 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white h-[208px] overflow-clip relative rounded-[12px] shrink-0 w-[252px]">
      <div className="absolute h-[208px] left-[-122.41px] top-0 w-[416px]" data-name="63a4b8eb7877e10018fd6356 (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img63A4B8Eb7877E10018Fd635611} />
      </div>
    </div>
  );
}

function HeadingAndBody10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Heading and body">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#555555] text-[0px] w-full">
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#222222] text-[18px]">
          Best Work
          <br aria-hidden="true" />
        </span>
        <span className="text-[16px]">Highest votes wins a shiny Kindle! Let your creativity shine and make it to the top!</span>
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
      <HeadingAndBody10 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[528px]">
      <Frame />
      <Frame4 />
    </div>
  );
}

function HeadingAndBody11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Heading and body">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#475467] text-[0px] w-full">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#222222] text-[18px]">
          Popular Works
          <br aria-hidden="true" />
        </span>
        <span className="text-[#555555] text-[16px]">Place 2nd to 4th in public votes and bring home a Jellycat plush toy!</span>
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[27.13px] top-[10.25px]">
      <div className="absolute left-[27.13px] size-[197.749px] top-[10.25px]" data-name="Jellycat-Peanut-Penguin-Large-3_1200x 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgJellycatPeanutPenguinLarge31200X1} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white h-[208px] relative rounded-[12px] shrink-0 w-[252px]">
      <div className="h-[208px] overflow-clip relative rounded-[inherit] w-[252px]">
        <Group />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe3e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[528px]">
      <HeadingAndBody11 />
      <Frame5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[245.483px] left-0 top-0 w-[253.114px]" data-name="1AF16E3D-2A6E-4610-9979-82EE9D273B9E 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[103.11%] left-0 max-w-none top-[-3.11%] w-full" src={img1Af16E3D2A6E4610997982Ee9D273B9E1} />
        </div>
      </div>
      <div className="absolute bg-[#f8f8f8] h-[16.758px] left-[96.89px] top-[46.29px] w-[59.726px]" />
      <div className="absolute bg-[#f0f0f0] h-[13.75px] left-[194.86px] top-[128.79px] w-[51.992px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white h-[208px] relative rounded-[12px] shrink-0 w-[252px]">
      <div className="h-[208px] overflow-clip relative rounded-[inherit] w-[252px]">
        <Group1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe3e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function HeadingAndBody12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Heading and body">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#222222] text-[0px] w-full">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px]">Excellent Works</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#555555] text-[18px]">
          <br aria-hidden="true" />
        </span>
        <span className="text-[16px]">Top 5-10 entries, claim your Brand magazine and celebrate your creativity!</span>
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[528px]">
      <Frame11 />
      <HeadingAndBody12 />
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Join Now</p>
    </div>
  );
}

function ButtonsButton1() {
  return (
    <a href="https://dg01docs.zoom.us/doc/IOu9SqJuTiKS9zh6oaqAnA" target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-[#0b5cff] relative rounded-[8px] shrink-0 w-[198px]" data-name="Buttons/Button">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[198px]">
          <TextPadding1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#0b5cff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </a>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-[198px]" data-name="Actions">
      <ButtonsButton1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[528px]">
      <Actions1 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Actions">
      <Frame12 />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[48px] items-center px-[24px] py-[16px] relative shrink-0 w-[576px]" data-name="Body">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[38px] min-w-full not-italic relative shrink-0 text-[#222222] text-[30px] text-center w-[min-content]">
        Docs theme co-creation
        <br aria-hidden="true" />
        create, share and win!
      </p>
      <Frame7 />
      <Content />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Actions2 />
    </div>
  );
}

function EmailTemplateFooter() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="_Email template footer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start leading-[20px] not-italic px-[24px] py-[32px] relative text-[14px] text-center w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#222222] w-full">{`Don't wait - grab your gift! 👊`}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555555] w-full">
            © 2025 Docs Design Team
            <br aria-hidden="true" />
            Hangzhou Digital Entertainment Building
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EmailTemplate() {
  return (
    <div className="bg-white relative size-full" data-name="Email template">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-center p-[32px] relative size-full">
          <EmailTemplateHeader />
          <Body />
          <EmailTemplateFooter />
        </div>
      </div>
    </div>
  );
}
