/******************************************************************************
 *
 * Relay Mission Control
 *
 * dashboard-layout.js
 *
 ******************************************************************************/

export class DashboardLayout {

    constructor(root) {

        this.root = root;

    }

    render() {

        this.root.innerHTML = `

<div id="dashboard">

    <aside id="sidebar"></aside>

    <header id="header"></header>

    <main id="content"></main>

    <aside id="right-panel"></aside>

    <footer id="footer"></footer>

</div>

`;

    }

    get sidebar() {

        return this.root.querySelector("#sidebar");

    }

    get header() {

        return this.root.querySelector("#header");

    }

    get content() {

        return this.root.querySelector("#content");

    }

    get rightPanel() {

        return this.root.querySelector("#right-panel");

    }

    get footer() {

        return this.root.querySelector("#footer");

    }

}