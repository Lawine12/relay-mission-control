/******************************************************************************
 *
 * Relay Mission Control
 *
 * SVG Icon Registry
 *
 ******************************************************************************/

const stroke = `
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
`;

export const Icons = {

    home: `
<svg viewBox="0 0 24 24">
<path ${stroke} d="M3 10.5L12 3l9 7.5"/>
<path ${stroke} d="M5 10v10h14V10"/>
</svg>`,

    steering: `
<svg viewBox="0 0 24 24">
<circle ${stroke} cx="12" cy="12" r="8"/>
<path ${stroke} d="M4 12h16"/>
<path ${stroke} d="M12 12v5"/>
<path ${stroke} d="M8 12l4-4 4 4"/>
</svg>`,

    computer: `
<svg viewBox="0 0 24 24">
<rect ${stroke} x="4" y="4" width="16" height="12" rx="2"/>
<path ${stroke} d="M8 20h8"/>
<path ${stroke} d="M12 16v4"/>
</svg>`,

    temperature: `
<svg viewBox="0 0 24 24">
<path ${stroke} d="M14 14.8V5a2 2 0 10-4 0v9.8a4 4 0 104 0z"/>
</svg>`,

    users: `
<svg viewBox="0 0 24 24">
<circle ${stroke} cx="9" cy="8" r="3"/>
<circle ${stroke} cx="17" cy="9" r="2"/>
<path ${stroke} d="M4 20a5 5 0 0110 0"/>
<path ${stroke} d="M15 20a4 4 0 014-4"/>
</svg>`,

    settings: `
<svg viewBox="0 0 24 24">
<circle ${stroke} cx="12" cy="12" r="3"/>
<path ${stroke}
d="M19.4 15a1.7 1.7 0 000-6l2-1.2-2-3.5-2.3.7a7.5 7.5 0 00-5.1-2l-.6-2.5H9.6L9 2.9a7.5 7.5 0 00-5.1 2l-2.3-.7-2 3.5L1.6 9a1.7 1.7 0 000 6L-.4 16.2l2 3.5 2.3-.7a7.5 7.5 0 005.1 2l.6 2.5h2.8l.6-2.5a7.5 7.5 0 005.1-2l2.3.7 2-3.5z"/>
</svg>`

};

export function getIcon(name) {

    return Icons[name] ?? "";

}