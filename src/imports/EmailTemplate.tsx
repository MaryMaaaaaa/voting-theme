import svgPaths from "./svg-8to6r8u648";
import exampleImage from "figma:asset/862ffe244ad4b23349019a72ca505d6f6d385a9f.png";
import imgKling20251114411401 from "figma:asset/e033a586cb3e9297815f0e233301066d59480a09.png";
import img63A4B8Eb7877E10018Fd635611 from "figma:asset/bc4d1ebeac1fca48e86ff6b957a8b764f3861833.png";
import imgJellycatPeanutPenguinLarge31200X1 from "figma:asset/1757bbe232b53c925cf150b9e8bf948627bb7402.png";
import img1Af16E3D2A6E4610997982Ee9D273B9E1 from "figma:asset/b1b52c81bc9328130d752f761414cf05674c037d.png";

function DocsBrand({ className }: { className?: string }) {
  return (
    <div className={className} data-name="docs brand">
      <div className="absolute inset-[5.56%_13.89%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 29">
          <path d={svgPaths.pe830400} fill="var(--fill-0, #0B5CFF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function LogoWrap() {
  return (
    <div className="h-[32px] relative shrink-0 w-[142px]" data-name="Logo wrap">
      <DocsBrand className="absolute left-[calc(50%-55px)] size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" />
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
    <img src={exampleImage} className="w-full h-auto object-cover" alt="Event Header" />
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
          <span className="text-[#555555]">{`👋 `}</span>
          <span className="text-[#222222]">Hi everyone,</span>
        </p>
        <p className="leading-[24px] text-[16px]">
          We’re launching the<span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#222222]">{` Docs Theme Co-Creation Even`}</span>t — a fun way to explore creative, expressive styles for Docs across di<span className="text-[#555555]">fferent</span>
          <span>{` scenarios!`}</span>
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
    <div className="bg-[#0b5cff] relative rounded-[8px] shrink-0 w-[198px]" data-name="Buttons/Button">
      <div className="box-border content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[198px]">
        <TextPadding />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0b5cff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
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
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#222222] text-[18px]">🎯 Event Directions</span>
          <span className="text-[16px]">
            <br aria-hidden="true" />
            You can choose from two theme directions:
          </span>
        </p>
        <ol className="list-decimal" start="1">
          <li className="leading-[24px] mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px]">
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#222222]">Product Them</span>
            <span>
              e<br aria-hidden="true" />
              Focus on Docs’ visual expression in product features, user experience, and collaboration.
              <br aria-hidden="true" />
              Examples: meeting notes, project plans, product templates.
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
          <li className="leading-[24px] ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px]">
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#222222]">Marketing Them</span>
            <span>
              e<br aria-hidden="true" />
              Create t
            </span>
            <span className="text-[#222222]">hemes i</span>
            <span>
              nspired by holidays or trending topics for branding or campaigns.
              <br aria-hidden="true" />
              Examples: Halloween, Christmas, Thanksgiving, year-in-review, AI trends.
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
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#555555] text-[0px] w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] mb-[16px] text-[#222222] text-[18px]">🕙 Timeline</p>
        <ul className="list-disc">
          <li className="leading-[24px] mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px]">
            Submission Deadline:<span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#222222]">{` November 28`}</span>
          </li>
          <li className="leading-[24px] mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px]">
            Public Voting:<span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#222222]">{` December 01–02`}</span>
          </li>
          <li className="leading-[24px] ms-[calc(1.5*1*var(--list-marker-font-size,0))] text-[16px]">
            Results Announcement:<span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#222222]">{` December 0`}</span>5
          </li>
        </ul>
      </div>
    </div>
  );
}

function LinkAndText() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Link and text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0b5cff] text-[16px] w-full">Event details →</p>
    </div>
  );
}

function HeadingAndBody3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Heading and body">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#555555] text-[0px] w-full">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#222222] text-[18px]">🎁 Rewards and Showcase</span>
        <span className="text-[16px]">
          <br aria-hidden="true" />
          {`Rankings will be based on public voting. The `}
        </span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#222222] text-[16px]">top 10 entries</span>
        <span className="text-[16px]">{` will receive special gifts and may be featured in the official Docs template library as themes for more users to enjoy!`}</span>
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
      <LinkAndText />
      <div className="h-px relative shrink-0 w-[80px]" data-name="Divider">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(234, 236, 240, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 1">
            <path clipRule="evenodd" d="M80 1H0V0H80V1Z" fill="var(--fill-0, #EAECF0)" fillRule="evenodd" id="Divider" />
          </svg>
        </div>
      </div>
      <HeadingAndBody3 />
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

function HeadingAndBody4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Heading and body">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#555555] text-[0px] w-full">
        <p className="mb-[16px]">
          <span className="font-['Inter:Bold',sans-serif] font-bold not-italic text-[#222222] text-[18px]">
            🏆 Best Work
            <br aria-hidden="true" />
          </span>
          <span className="text-[16px]">{`The entry with the highest number of public votes. `}</span>
        </p>
        <p className="text-[16px]">The prize for the best work is a Kindle.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
      <HeadingAndBody4 />
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

function HeadingAndBody5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Heading and body">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#475467] text-[0px] w-full">
        <p className="leading-[24px] mb-[16px]">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-[#222222] text-[18px]">
            🌟 Popular Works
            <br aria-hidden="true" />
          </span>
          <span className="text-[#555555] text-[16px]">Entries ranked 2nd to 4th in public voting</span>
        </p>
        <p className="leading-[24px] text-[16px]">
          <span className="text-[#555555]">The prizes for the popular works are Jellycat plush toys</span>.
        </p>
      </div>
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
      <HeadingAndBody5 />
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

function Frame8() {
  return (
    <div className="bg-white h-[208px] relative rounded-[12px] shrink-0 w-[252px]">
      <div className="h-[208px] overflow-clip relative rounded-[inherit] w-[252px]">
        <Group1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe3e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function HeadingAndBody6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Heading and body">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#222222] text-[0px] w-full">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#555555] text-[18px]">
          🎉 Excellent Works
          <br aria-hidden="true" />
        </span>
        <span className="text-[16px]">Excellent Works are the entries ranked 5th to 10th in the public voting.</span>
        <span className="text-[16px]">
          {" "}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          The gifts for the excellent works are Brand magazines.
        </span>
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[528px]">
      <Frame8 />
      <HeadingAndBody6 />
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
    <div className="bg-[#0b5cff] relative rounded-[8px] shrink-0 w-[198px]" data-name="Buttons/Button">
      <div className="box-border content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[198px]">
        <TextPadding1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0b5cff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-[198px]" data-name="Actions">
      <ButtonsButton1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[528px]">
      <Actions1 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Actions">
      <Frame9 />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[48px] items-center px-[24px] py-[16px] relative shrink-0 w-[576px]" data-name="Body">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[38px] min-w-full not-italic relative shrink-0 text-[#222222] text-[30px] text-center w-[min-content]">
        {`Join the Docs Theme `}
        <br aria-hidden="true" />
        Co-Creation Event!
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
        <div className="box-border content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start leading-[20px] not-italic px-[24px] py-[32px] relative text-[14px] text-center w-full">
          <p className="relative shrink-0 text-[#475467] w-full">
            <span className="text-[#555555]">Looking forward to everyone’s creativity</span>
            <span>{` 👏👏👏`}</span>
          </p>
          <p className="relative shrink-0 text-[#555555] w-full">
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