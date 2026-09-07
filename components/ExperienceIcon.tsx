import SvgIcon from "@mui/material/SvgIcon";

type ExperienceIconProps = {
  index: number;
  primary: string;
  accent: string;
};

export function ExperienceIcon({ index, primary, accent }: ExperienceIconProps) {
  const line = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const accentLine = { ...line, stroke: accent };

  return (
    <SvgIcon
      aria-hidden="true"
      viewBox="0 0 64 64"
      sx={{ display: "block", width: 72, height: 72, color: primary }}
    >
      {index === 0 ? (
        <>
          <rect x="11" y="7" width="42" height="34" rx="3" {...line} />
          <path d="M7 47h50l-2.2 4.2a4 4 0 01-3.5 2.1H12.7a4 4 0 01-3.5-2.1z" {...line} />
          <path d="M25 19l-7 6 7 6M39 19l7 6-7 6M35 17l-6 16" {...accentLine} />
        </>
      ) : null}

      {index === 1 ? (
        <>
          <rect x="25" y="5" width="14" height="13" rx="2" {...accentLine} />
          <rect x="8" y="39" width="16" height="17" rx="2.5" {...line} />
          <rect x="40" y="39" width="16" height="17" rx="2.5" {...line} />
          <path d="M32 18v11M16 39V29h32v10" {...line} />
          <path d="M32 29H16M32 29h16" {...accentLine} />
        </>
      ) : null}

      {index === 2 ? (
        <>
          <rect x="7" y="8" width="50" height="47" rx="4" {...line} />
          <path d="M7 20h50" {...line} />
          <circle cx="13" cy="14" r="1.4" fill="currentColor" />
          <circle cx="18" cy="14" r="1.4" fill="currentColor" />
          <circle cx="23" cy="14" r="1.4" fill="currentColor" />
          <path d="M15 44l10-10 9 7 15-15" {...accentLine} />
          <circle cx="15" cy="44" r="3" {...accentLine} />
          <circle cx="25" cy="34" r="3" {...accentLine} />
          <circle cx="34" cy="41" r="3" {...accentLine} />
          <circle cx="49" cy="26" r="3" {...accentLine} />
        </>
      ) : null}

      {index === 3 ? (
        <>
          <circle cx="32" cy="20" r="8" {...line} />
          <path d="M17 55v-5a15 15 0 0130 0v5" {...line} />
        </>
      ) : null}

      {index === 4 ? (
        <>
          <path d="M7 14a4 4 0 014-4h13l5 6h24a4 4 0 014 4v30a4 4 0 01-4 4H11a4 4 0 01-4-4z" {...line} />
          <path d="M7 22h50" {...line} />
          <path d="M25 31l-7 6 7 6M39 31l7 6-7 6M35 29l-6 16" {...accentLine} />
        </>
      ) : null}

      {index === 5 ? (
        <>
          <rect x="6" y="10" width="42" height="38" rx="4" {...line} />
          <circle cx="18" cy="23" r="6" {...line} />
          <path d="M10 40a8 8 0 0116 0M32 19h10M32 26h10M32 33h7" {...line} />
          <path d="M35 55l9-9 6 6 9-11M51 41h8v8" {...accentLine} />
        </>
      ) : null}

      {index === 6 ? (
        <>
          <rect x="7" y="9" width="50" height="44" rx="4" {...line} />
          <path d="M7 20h50M14 45l10-11 8 7 7-8 11 12" {...line} />
          <path d="M41 10v8M37 14h8" {...accentLine} />
          <circle cx="20" cy="28" r="4" {...accentLine} />
        </>
      ) : null}

      {index === 7 ? (
        <>
          <rect x="7" y="8" width="50" height="47" rx="4" {...line} />
          <path d="M7 20h50" {...line} />
          <rect x="14" y="27" width="14" height="9" rx="2" {...accentLine} />
          <rect x="36" y="27" width="14" height="9" rx="2" {...line} />
          <rect x="14" y="42" width="14" height="7" rx="2" {...line} />
          <path d="M38 39l12 5-5 2-2 5z" {...accentLine} />
        </>
      ) : null}

      {index === 8 ? (
        <>
          <circle cx="18" cy="32" r="7" {...line} />
          <circle cx="46" cy="18" r="7" {...line} />
          <circle cx="46" cy="47" r="7" {...line} />
          <path d="M25 30c7-1 11-5 14-9M25 35c7 1 11 5 14 9" {...accentLine} />
          <path d="M35 18h4v4M35 46h4v-4" {...accentLine} />
        </>
      ) : null}

      {index === 9 ? (
        <>
          <path d="M32 6l20 8v15c0 13-8 22-20 29C20 51 12 42 12 29V14z" {...line} />
          <path d="M22 31l7 7 14-16" {...accentLine} />
        </>
      ) : null}

      {index === 10 ? (
        <>
          <rect x="8" y="8" width="19" height="19" rx="3" {...line} />
          <rect x="37" y="8" width="19" height="19" rx="3" {...accentLine} />
          <rect x="8" y="37" width="19" height="19" rx="3" {...accentLine} />
          <rect x="37" y="37" width="19" height="19" rx="3" {...line} />
          <path d="M14 18h7M43 18h7M14 47h7M43 47h7" {...line} />
        </>
      ) : null}

      {index === 11 ? (
        <>
          <circle cx="12" cy="32" r="6" {...line} />
          <circle cx="32" cy="14" r="6" {...accentLine} />
          <circle cx="52" cy="32" r="6" {...line} />
          <circle cx="32" cy="51" r="6" {...accentLine} />
          <path d="M17 27l10-9M37 18l10 9M47 37l-10 10M27 47L17 37" {...line} />
        </>
      ) : null}
    </SvgIcon>
  );
}
