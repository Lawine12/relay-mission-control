import theme from "./theme.css?inline";
import tokens from "./tokens.css?inline";
import typography from "./typography.css?inline";
import layout from "./layout.css?inline";
import header from "./header.css?inline";
import sidebar from "./sidebar.css?inline";
import footer from "./footer.css?inline";
import cards from "./cards.css?inline";
import glass from "./glass.css?inline";

export function installStyles(shadowRoot) {
    const style = document.createElement("style");

    style.textContent = [
        tokens,
        typography,
        theme,
        layout,
        header,
        sidebar,
        footer,
        cards,
        glass
    ].join("\n");

    shadowRoot.prepend(style);
}