/******************************************************************************
 *
 * Relay Mission Control
 *
 * status-chip.js
 *
 ******************************************************************************/

export class StatusChip {

    constructor(options = {}) {

        this.label = options.label ?? "Unknown";

        this.state = options.state ?? "offline";

        this.icon = options.icon ?? "";

        this.compact = options.compact ?? false;

        this.click = options.click ?? null;

    }

    getColor() {

        switch (this.state) {

            case "online":
                return "#00D26A";

            case "warning":
                return "#FFB000";

            case "error":
                return "#FF3B30";

            case "info":
                return "#009DFF";

            default:
                return "#7E8792";

        }

    }

    render() {

        const color = this.getColor();

        return `

<div class="relay-chip relay-chip-${this.state}">

    <div
        class="relay-chip-led"
        style="background:${color}; box-shadow:0 0 12px ${color};">

    </div>

    ${this.icon
        ? `<div class="relay-chip-icon">${this.icon}</div>`
        : ""}

    ${this.compact
        ? ""
        : `<div class="relay-chip-label">${this.label}</div>`}

</div>

`;

    }

}