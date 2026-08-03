/******************************************************************************
 * Apollo Widget Manager
 ******************************************************************************/

export class WidgetManager {


    constructor(context = null) {

        this.context = context;

        this.widgets =
            new Map();

    }


    register(widget) {

        if (!widget.context) {

            widget.context =
                this.context;

        }


        this.widgets.set(
            widget.id,
            widget
        );

    }


    remove(id) {

        this.widgets.delete(id);

    }


    get(id) {

        return this.widgets.get(id);

    }


    getAll() {

        return Array.from(
            this.widgets.values()
        );

    }

}