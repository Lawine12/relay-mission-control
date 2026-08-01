/******************************************************************************
 *
 * Relay Mission Control
 *
 * progress-ring.js
 *
 ******************************************************************************/

export class ProgressRing {

    constructor(options = {}) {

        this.size = options.size ?? 140;
        this.stroke = options.stroke ?? 10;
        this.value = options.value ?? 0;
        this.max = options.max ?? 100;
        this.label = options.label ?? "";
        this.unit = options.unit ?? "%";
        this.color = options.color ?? "#009DFF";

    }

    render() {

        const radius =
            (this.size - this.stroke) / 2;

        const circumference =
            2 * Math.PI * radius;

        const progress =
            Math.min(
                Math.max(this.value, 0),
                this.max
            );

        const offset =
            circumference -
            (progress / this.max) * circumference;

        return `

<div class="progress-ring">

<svg
    width="${this.size}"
    height="${this.size}"
    viewBox="0 0 ${this.size} ${this.size}">

    <circle

        class="track"

        cx="${this.size / 2}"

        cy="${this.size / 2}"

        r="${radius}"

        stroke-width="${this.stroke}"

    />

    <circle

        class="progress"

        cx="${this.size / 2}"

        cy="${this.size / 2}"

        r="${radius}"

        stroke-width="${this.stroke}"

        stroke="${this.color}"

        stroke-dasharray="${circumference}"

        stroke-dashoffset="${offset}"

    />

</svg>

<div class="ring-content">

    <div class="ring-value">

        ${progress}

        <span>${this.unit}</span>

    </div>

    <div class="ring-label">

        ${this.label}

    </div>

</div>

</div>

`;

    }

    update(value) {

        this.value = value;

    }

}