/******************************************************************************
 * Apollo DOM Helper
 ******************************************************************************/

export function el(tag, props = {}, children = []) {

    const element = document.createElement(tag);

    for (const [key, value] of Object.entries(props)) {

        switch (key) {

            case "class":
                element.className = value;
                break;

            case "text":
                element.textContent = value;
                break;

            case "html":
                element.innerHTML = value;
                break;

            default:
                element.setAttribute(key, value);

        }

    }

    for (const child of children) {

        if (child) {
            element.appendChild(child);
        }

    }

    return element;

}