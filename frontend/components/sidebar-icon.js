import { getIcon } from "../icons/index.js";

export class SidebarIcon {

    constructor(name) {

        this.name = name;

    }

    render() {

        return `

<div class="sidebar-icon">

${getIcon(this.name)}

</div>

`;

    }

}