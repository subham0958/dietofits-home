import React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

export function IconStar({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
  );
}
export function IconPhone({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.52l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.06 16.06 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z" /></svg>
  );
}
export function IconMail({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  );
}
export function IconUsers({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" /></svg>
  );
}
export function IconAward({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="8" r="7" /><path strokeLinecap="round" strokeLinejoin="round" d="M8.21 13.89l-1.42 4.25a2 2 0 002.83 2.83l4.25-1.42a2 2 0 002.83-2.83l-1.42-4.25" /></svg>
  );
}
export function IconChevronRight({ size = 24, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} {...rest} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
  );
}
export function IconMenu({ size = 24, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} {...rest} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
  );
}
export function IconX({ size = 24, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} {...rest} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
  );
}
export function IconTarget({ size = 24, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} {...rest} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
  );
}
