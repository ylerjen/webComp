var _currentScript = document.currentScript.ownerDocument;

const COMP_NAME = 'yl-button';
const IS_LOADING_ATTR = 'is-loading';

/**
 * A custom button with a loading functionnality
 * @class YlButton
 * @extends HTMLElement
 */
class YlButton extends HTMLElement {
    /**
     * Fires when an instance of the element is created.
     * @memberof YlButton#
     */
    createdCallback() {
        let tpl = _currentScript.getElementById('tpl_yl-button');
        let clone = document.importNode(tpl.content, true);
        console.debug(clone);
        let isLoading = this.getAttribute(IS_LOADING_ATTR);
        let shadowRoot = this.createShadowRoot();
        shadowRoot.appendChild(clone);
        this.btnTextEl = shadowRoot.querySelector('.'+COMP_NAME+'__text');
    }
    /**
     *  Fires when an instance was inserted into the document.
     * @memberof YlButton#
     */
    attachedCallback() {
        console.log('yl-button was componentized');
    }
    /**
     * Fires when an attribute was added, removed, or updated.
     * @memberof YlButton#
     */
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === IS_LOADING_ATTR) {
            this.setLoadingState(newVal==='true');
        }
    }
    /**
     * Show or hide the loader inside the button
     * @memberof YlButton#
     * @param {bool} isLoading - if the button is in the loading state
     */
    setLoadingState(isLoading) {
        if (typeof show === 'undefined') {
            show = true;
        }
        let buttonEl = this.querySelector('.'+COMP_NAME);
        let loaderEl = this.querySelector('.'+COMP_NAME+'__loader');
        if (show) {
            buttonEl.setAttribute('disabled', 'disabled');
            loaderEl.removeAttribute('hidden');
        } else {
            buttonEl.removeAttribute('disabled');
            loaderEl.setAttribute('hidden');
        }
    }
}
document.registerElement(COMP_NAME, YlButton);