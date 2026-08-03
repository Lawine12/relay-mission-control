/******************************************************************************
 * Apollo Router
 ******************************************************************************/

export class Router {


    constructor() {

        this.routes =
            new Map();


        this.listeners =
            new Set();


        this.current =
            null;

    }



    register(path, page) {


        this.routes.set(

            path,

            page

        );


    }



    navigate(path) {


        const Page =
            this.routes.get(
                path
            );


        if(!Page) {


            console.warn(

                "[Apollo Router] Unknown route:",

                path

            );


            return;

        }



        this.current = {

            path,

            Page

        };



        this.listeners.forEach(

            callback => {


                callback(
                    path,
                    Page
                );


            }

        );


    }



    subscribe(callback) {


        this.listeners.add(
            callback
        );


        return () => {

            this.listeners.delete(
                callback
            );

        };


    }



    getCurrent() {


        return this.current;


    }


}