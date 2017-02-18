var importedDocument = document.currentScript.ownerDocument;

const LOADER_TYPE_ATTR = 'type';
/**
 * A custom button with a loading functionnality
 * @class YlButton
 * @extends HTMLElement
 */
class YlLoader extends HTMLElement {
    /**
     * Fires when an instance of the element is created.
     * @memberof YlLoader#
     */
    createdCallback() {
        let tpl = importedDocument.getElementById('tpl_yl-loader');
        let clone = document.importNode(tpl.content, true);
        let shadowRoot = this.createShadowRoot();
        shadowRoot.appendChild(clone);
        var loaderType = this.getAttribute(LOADER_TYPE_ATTR);
        this.changeLoader(loaderType);
    }
    /**
     * Fires when an instance was inserted into the document.
     * @memberof YlLoader#
     */
    attachedCallback() {
        console.log('yl-loader was componentized');
    }
    /**
     * Fires when an attribute was added, removed, or updated.
     * @memberof YlLoader#
     */
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === LOADER_TYPE_ATTR) {
            this.changeLoader(newVal);
        }
    }
    /**
     * Change the type of loader displayed
     * @memberof YlLoader#
     * @param {int} aType - the type nb of the loader to display
     */
    changeLoader(aType) {
        if (aType < 1 || aType > 3)
            aType = 1;

        let loaders = this.shadowRoot.querySelectorAll('.loader');
        for (let i=0,iMax=loaders.length;i<iMax;i++) {
            let curLoader = loaders[i];
            if (curLoader.classList.contains('type-'+aType)) {
                curLoader.removeAttribute('hidden');
            } else {
                curLoader.setAttribute('hidden','hidden');
            }
        }
    }
}
document.registerElement('yl-loader', YlLoader);