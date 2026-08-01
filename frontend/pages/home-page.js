/******************************************************************************
 *
 * Home Page
 *
 ******************************************************************************/

export class HomePage {

    constructor(container) {

        this.container = container;

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