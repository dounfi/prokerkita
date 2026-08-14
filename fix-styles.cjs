const fs = require("fs");
const p = "C:/prokerkita/proker-insights/src/styles.css";
let c = fs.readFileSync(p, "utf8");

const correctEnd = `@utility pk-frame {
  border: 2px solid var(--color-ink);
  border-radius: 1.5rem;
}

@utility pk-hard {
  box-shadow: 2px 4px 8px 0px rgba(35,35,35,0.08), inset 0px -4px 0px 0px rgba(0,0,0,0.1);
  border: none;
}

@utility pk-hard-sm {
  box-shadow: 2px 2px 6px 0px rgba(35,35,35,0.05), inset 0px -2px 0px 0px rgba(0,0,0,0.1);
  border: none;
}

@utility pk-grid-paper {
  background-image: none;
  background: radial-gradient(circle at 50% 40%, rgba(255,254,238,0.92) 0%, rgba(196,242,250,0.72) 24%, rgba(129,219,247,0.92) 58%, #90ddf6 100%);
}

@utility pk-dots {
  background-image: radial-gradient(color-mix(in oklab, var(--color-sky) 50%, transparent) 1.5px, transparent 1.6px);
  background-size: 20px 20px;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
}

@utility mask-pionir-pattern {
  background-color: var(--color-sky);
  background-position: left top;
  background-repeat: repeat;
  background-size: 319px 339px;
  mask-image: url("/background.svg");
  mask-position: left top;
  mask-repeat: repeat;
  mask-size: 319px 339px;
  opacity: 0.25;
}

@utility hero-title-line {
  position: relative;
  display: block;
}

@utility hero-title-outline {
  position: absolute;
  inset: 0;
  display: block;
  -webkit-text-stroke: 8px var(--color-ink);
  color: var(--color-ink);
  z-index: 0;
}

@utility hero-title-fill {
  position: relative;
  display: block;
  z-index: 10;
  color: #ffffff;
}

@utility hero-title-line-strong {
  .hero-title-fill {
    color: var(--color-sun);
  }
}

@utility btn-pionir {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: var(--button-bg);
  font-family: var(--font-display);
  font-weight: 700;
  white-space: nowrap;
  color: var(--button-text);
  outline: 2px solid var(--button-outline);
  outline-offset: -2px;
  box-shadow: 2px 4px 3px 0px rgba(35,35,35,0.15), inset 0px -4px 0px 0px var(--button-shadow-bottom), inset 0px 4px 0px 0px var(--button-shadow-top);
  transition-property: background-color, color, box-shadow, outline-color;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  --button-text: #002855;
  --button-disabled-bg: #d1d5db;
  --button-disabled-text: #9ca3af;
  --button-disabled-outline: #9ca3af;
  --button-disabled-shadow-bottom: #9ca3af;
  --button-disabled-shadow-top: #e5e7eb;
  
  &:hover {
    background-color: var(--button-hover-bg);
    outline-color: var(--button-hover-outline);
    --button-shadow-bottom: var(--button-hover-shadow-bottom);
    --button-shadow-top: var(--button-hover-shadow-top);
  }
  
  &:active {
    background-color: var(--button-active-bg);
    outline-color: var(--button-active-outline);
    --button-shadow-bottom: var(--button-active-shadow-bottom);
    --button-shadow-top: var(--button-active-shadow-top);
  }
  
  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    background-color: var(--button-disabled-bg);
    color: var(--button-disabled-text);
    outline-color: var(--button-disabled-outline);
    --button-shadow-bottom: var(--button-disabled-shadow-bottom);
    --button-shadow-top: var(--button-disabled-shadow-top);
  }
  
  & svg {
    pointer-events: none;
    flex-shrink: 0;
  }
}

@utility btn-pionir-yellow {
  --button-bg: #ffc72c;
  --button-outline: #e6b327;
  --button-shadow-bottom: #e6b327;
  --button-shadow-top: #ffdf80;
  --button-hover-bg: #e6b327;
  --button-hover-outline: #cc9f23;
  --button-hover-shadow-bottom: #cc9f23;
  --button-hover-shadow-top: #e6b327;
  --button-active-bg: #cc9f23;
  --button-active-outline: #b38b1f;
  --button-active-shadow-bottom: #b38b1f;
  --button-active-shadow-top: #cc9f23;
  --button-text: #002855;
}

@utility btn-pionir-orange {
  --button-bg: #f56e00;
  --button-outline: #d96200;
  --button-shadow-bottom: #d96200;
  --button-shadow-top: #ff9940;
  --button-hover-bg: #d96200;
  --button-hover-outline: #bf5600;
  --button-hover-shadow-bottom: #bf5600;
  --button-hover-shadow-top: #d96200;
  --button-active-bg: #bf5600;
  --button-active-outline: #a64b00;
  --button-active-shadow-bottom: #a64b00;
  --button-active-shadow-top: #bf5600;
  --button-text: #ffffff;
}

@utility btn-pionir-blue {
  --button-bg: #0088cc;
  --button-outline: #0077b3;
  --button-shadow-bottom: #0077b3;
  --button-shadow-top: #4db8ff;
  --button-hover-bg: #0077b3;
  --button-hover-outline: #006699;
  --button-hover-shadow-bottom: #006699;
  --button-hover-shadow-top: #0077b3;
  --button-active-bg: #006699;
  --button-active-outline: #005580;
  --button-active-shadow-bottom: #005580;
  --button-active-shadow-top: #006699;
  --button-text: #ffffff;
}

@utility btn-pionir-white {
  --button-bg: #ffffff;
  --button-outline: #e5e7eb;
  --button-shadow-bottom: #d1d5db;
  --button-shadow-top: #ffffff;
  --button-hover-bg: #f3f4f6;
  --button-hover-outline: #d1d5db;
  --button-hover-shadow-bottom: #9ca3af;
  --button-hover-shadow-top: #ffffff;
  --button-active-bg: #e5e7eb;
  --button-active-outline: #9ca3af;
  --button-active-shadow-bottom: #6b7280;
  --button-active-shadow-top: #ffffff;
  --button-text: #002855;
}
`;

const idx = c.indexOf("@utility pk-frame");
c = c.slice(0, idx) + correctEnd;
fs.writeFileSync(p, c);
console.log("Fixed");
