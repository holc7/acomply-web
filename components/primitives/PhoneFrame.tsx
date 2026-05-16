import type { CSSProperties, ReactNode } from "react";

type Props = {
  time?: string;
  children: ReactNode;
  style?: CSSProperties;
};

export default function PhoneFrame({ time = "9:41", children, style }: Props) {
  return (
    <div className="phone" style={style}>
      {/* Side buttons — left silent toggle + 2 volume, right power */}
      <span className="phone__btn phone__btn--silent" aria-hidden="true" />
      <span className="phone__btn phone__btn--vol-up" aria-hidden="true" />
      <span className="phone__btn phone__btn--vol-down" aria-hidden="true" />
      <span className="phone__btn phone__btn--power" aria-hidden="true" />

      {/* Polished metallic rim highlight */}
      <span className="phone__rim" aria-hidden="true" />

      <div className="phone__notch">
        <span className="phone__notch-cam" aria-hidden="true" />
      </div>
      <div className="phone__screen">
        <span className="phone__glare" aria-hidden="true" />
        <div className="phone__statusbar">
          <span>{time}</span>
          <span className="phone__status-right">
            <svg viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="0.5"/><rect x="5" y="6" width="3" height="6" rx="0.5"/><rect x="10" y="3" width="3" height="9" rx="0.5"/><rect x="15" y="0" width="3" height="12" rx="0.5"/></svg>
            <svg viewBox="0 0 16 12" fill="currentColor"><path d="M8 11.5a1 1 0 100-2 1 1 0 000 2zM4.5 8.5a4.9 4.9 0 017 0l.7-.8a6 6 0 00-8.4 0l.7.8zM2 6a8.5 8.5 0 0112 0l.7-.8a9.5 9.5 0 00-13.4 0L2 6z"/></svg>
            <svg viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1"><rect x="0.5" y="0.5" width="21" height="11" rx="2.5"/><rect x="2.5" y="2.5" width="17" height="7" rx="1" fill="currentColor"/><rect x="22.5" y="4" width="1.5" height="4" rx="0.5" fill="currentColor"/></svg>
          </span>
        </div>
        <div className="phone__body">{children}</div>
      </div>
    </div>
  );
}
