/******************************************************************************
 *
 * Dashboard Layout
 *
 ******************************************************************************/

export class DashboardLayout {

    constructor(root) {

        this.root = root;

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