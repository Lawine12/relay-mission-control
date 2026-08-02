class e{constructor(){this.services=new Map}register(s,o){if(this.services.has(s))throw new Error(`Service '${s}' already exists.`);this.services.set(s,o)}resolve(s){if(!this.services.has(s))throw new Error(`Unknown service '${s}'.`);return this.services.get(s)}}class i{constructor(s="Relay"){this.prefix=s}info(...s){console.log(`[${this.prefix}]`,...s)}warn(...s){console.warn(`[${this.prefix}]`,...s)}error(...s){console.error(`[${this.prefix}]`,...s)}}class r{static create(){const s=new e;return s.register("logger",new i("Relay")),s}}class l{constructor(s){this.root=s}mount(){this.root.innerHTML=`
            <style>
                :host{
                    display:block;
                }

                .apollo{
                    padding:40px;
                    color:white;
                    font-family:Arial,sans-serif;
                    background:#111;
                    height:100vh;
                }

                h1{
                    margin:0 0 20px;
                }

                .status{
                    color:#4CAF50;
                    font-size:18px;
                }
            </style>

            <div class="apollo">
                <h1>Relay Mission Control</h1>

                <h2>Apollo Core</h2>

                <div class="status">
                    ✔ Application Started
                </div>
            </div>
        `}}class n{constructor(s){this.root=s,this.services=r.create(),this.logger=this.services.resolve("logger"),this.shell=new l(s)}start(){this.logger.info("Starting Apollo..."),this.shell.mount(),this.logger.info("Apollo ready.")}stop(){this.logger.info("Stopping Apollo.")}setHass(s){this.hass=s}}class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.application=new n(this.shadowRoot)}connectedCallback(){this.application.start()}disconnectedCallback(){this.application.stop()}set hass(s){this.application.setHass(s)}}customElements.get("relay-mission-control")||customElements.define("relay-mission-control",a);
//# sourceMappingURL=relay.js.map
