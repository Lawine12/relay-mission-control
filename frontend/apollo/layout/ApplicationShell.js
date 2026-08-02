export class ApplicationShell {

    constructor(root) {

        this.root = root;

    }

    mount() {

        this.root.innerHTML = `
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
        `;

    }

}