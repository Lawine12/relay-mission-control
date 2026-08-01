/******************************************************************************
 *
 * Relay Mission Control
 *
 * entity-card.js
 *
 ******************************************************************************/

import { LitElement, html, css } from "lit";

export class EntityCard extends LitElement {

    static properties = {

        title: { type: String },

        entity: { type: String },

        value: { type: String },

        unit: { type: String },

        icon: { type: String },

        online: { type: Boolean },

        color: { type: String }

    };

    static styles = css`

        :host {

            display:block;

        }

        .card{

            position:relative;

            display:flex;

            flex-direction:column;

            gap:18px;

            padding:22px;

            border-radius:22px;

            overflow:hidden;

            background:
                linear-gradient(
                    180deg,
                    rgba(255,255,255,.05),
                    rgba(255,255,255,.015)
                ),
                rgba(18,20,24,.72);

            border:1px solid rgba(255,255,255,.05);

            backdrop-filter:blur(22px);

            transition:.25s ease;

        }

        .card:hover{

            transform:translateY(-2px);

            border-color:rgba(0,157,255,.18);

        }

        .top{

            display:flex;

            justify-content:space-between;

            align-items:center;

        }

        h2{

            margin:0;

            color:#AEB6C2;

            font-size:13px;

            text-transform:uppercase;

            letter-spacing:.20em;

        }

        .status{

            display:flex;

            align-items:center;

            gap:8px;

        }

        .dot{

            width:10px;

            height:10px;

            border-radius:50%;

            background:#FF3B30;

            box-shadow:0 0 10px #FF3B30;

        }

        .dot.online{

            background:#00D26A;

            box-shadow:0 0 10px #00D26A;

        }

        .value{

            font-size:42px;

            font-weight:700;

            color:white;

            display:flex;

            align-items:flex-end;

            gap:6px;

        }

        .unit{

            font-size:18px;

            color:#8F99A6;

            margin-bottom:6px;

        }

        .footer{

            display:flex;

            justify-content:space-between;

            align-items:center;

            color:#9CA5AF;

            font-size:13px;

        }

        .icon{

            width:42px;

            height:42px;

            border-radius:14px;

            display:flex;

            align-items:center;

            justify-content:center;

            background:rgba(255,255,255,.04);

        }

    `;

    constructor(){

        super();

        this.title = "";

        this.entity = "";

        this.value = "--";

        this.unit = "";

        this.icon = "";

        this.online = false;

        this.color = "#009DFF";

    }

    render(){

        return html`

            <div class="card">

                <div class="top">

                    <h2>${this.title}</h2>

                    <div class="status">

                        <div class="dot ${this.online ? "online" : ""}"></div>

                    </div>

                </div>

                <div class="value">

                    ${this.value}

                    <span class="unit">

                        ${this.unit}

                    </span>

                </div>

                <div class="footer">

                    <div>

                        ${this.entity}

                    </div>

                    <div class="icon">

                        ${this.icon}

                    </div>

                </div>

            </div>

        `;

    }

}

customElements.define(
    "entity-card",
    EntityCard
);