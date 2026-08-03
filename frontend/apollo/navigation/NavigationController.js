/******************************************************************************
 * Apollo Navigation Controller
 ******************************************************************************/

export class NavigationController {

    constructor(router, pageHost) {

        this.router = router;

        this.pageHost = pageHost;

        this.unsubscribe = null;

    }

    start() {

        this.unsubscribe =
            this.router.subscribe(
                (_, PageClass) => {

                    this.pageHost.show(
                        PageClass
                    );

                }
            );

    }

    stop() {

        this.unsubscribe?.();

        this.unsubscribe = null;

    }

}