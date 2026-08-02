/******************************************************************************
 * Apollo Application
 ******************************************************************************/

import { ApplicationShell } from "../layout/ApplicationShell.js";


export class Application {

    constructor(root) {

        this.root = root;

        this.shell = new ApplicationShell();

    }


    start() {

        console.info(
            "[Apollo] Starting..."
        );


        this.shell.mount(
            this.root
        );


        console.info(
            "[Apollo] Ready."
        );

    }


    stop() {

        this.shell.unmount();

        console.info(
            "[Apollo] Stopped."
        );

    }

}