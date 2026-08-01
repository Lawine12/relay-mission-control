class i {
  constructor(t) {
    this.root = t;
  }
  render() {
    this.root.innerHTML = `

<div id="dashboard">

    <main id="content"></main>

</div>

`;
  }
  get content() {
    return document.querySelector("#content");
  }
}
class n {
  constructor() {
    this.state = {
      page: "home",
      connected: !1,
      entities: {},
      theme: "relay",
      notifications: [],
      services: {
        homeassistant: "online",
        mqtt: "offline",
        simhub: "offline",
        crewchief: "offline",
        tradingpaints: "offline",
        internet: "online"
      },
      race: {
        session: null,
        countdown: null,
        flag: "green"
      }
    }, this.listeners = /* @__PURE__ */ new Set();
  }
  getState() {
    return this.state;
  }
  subscribe(t) {
    return this.listeners.add(t), t(this.state), () => {
      this.listeners.delete(t);
    };
  }
  setState(t) {
    this.state = {
      ...this.state,
      ...t
    }, this.emit();
  }
  setPage(t) {
    this.state.page = t, this.emit();
  }
  updateEntity(t, e) {
    this.state.entities = {
      ...this.state.entities,
      [t]: e
    }, this.emit();
  }
  getEntity(t) {
    return this.state.entities[t];
  }
  emit() {
    this.listeners.forEach((t) => {
      t(this.state);
    });
  }
}
const r = new n();
class o {
  constructor(t) {
    this.container = t, this.routes = /* @__PURE__ */ new Map(), this.current = null;
  }
  register(t, e) {
    this.routes.set(t, e);
  }
  navigate(t) {
    if (!this.routes.has(t)) {
      console.warn(`Unknown page: ${t}`);
      return;
    }
    this.current?.unmount && this.current.unmount(), this.current = this.routes.get(t), this.container.innerHTML = "", r.setPage(t), this.current?.mount ? this.current.mount(this.container) : this.current?.render && this.current.render(this.container), history.replaceState({}, "", "#" + t);
  }
  start(t = "home") {
    const e = window.location.hash.replace("#", "");
    if (e && this.routes.has(e)) {
      this.navigate(e);
      return;
    }
    this.navigate(t);
  }
  start(t = "home") {
    this.navigate(t);
  }
}
router.register(
  "simrig",
  new SimRigPage(layout.content)
);
class a {
  constructor(t) {
    this.container = t;
  }
  render() {
    this.container.innerHTML = `

<section class="glass">

    <h1>

        Relay Mission Control

    </h1>

    <p>

        Application booted successfully.

    </p>

</section>

`;
  }
}
class h extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.layout = null, this.router = null, this._hass = null;
  }
  connectedCallback() {
    this.layout || (this.layout = new i(this.shadowRoot), this.layout.render(), this.router = new o(this.layout.content), this.router.register(
      "home",
      new a(this.layout.content)
    ), this.router.start("home"));
  }
  set hass(t) {
    this._hass = t, console.log("Relay Mission Control connected.", t);
  }
}
customElements.define(
  "relay-mission-control",
  h
);
export {
  h as RelayMissionControl
};
