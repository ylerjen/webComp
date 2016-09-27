// Use the polyfill if the currentScript property is not supported by the browser
var _currentScript = document._currentScript || document.currentScript;


var hostDocument = _currentScript.ownerDocument;
let template = hostDocument.getElementById('tpl_es6-card');
var compPrefix = "es6-card__";

// Create the component
class Es6Card extends HTMLElement {

// Fires when an instance of the element is created.
    createdCallback() {
        var tplContent = document.importNode(template.content, true);
        // set the passed name into .name
        var name = this.getAttribute('name');
        tplContent.querySelector('.' + compPrefix + 'name').innerHTML = name;
        
        // set the passed title into the .title
        var title = this.getAttribute('title');
        var titleEl = tplContent.querySelector('.' + compPrefix + 'title');
        if (title && title.trim()) {
            titleEl.innerHTML = title;
        } else {
            titleEl.parentElement.removeChild(titleEl);
        }

        // set the modified template in the element
        var shadow = this.createShadowRoot();
        shadow.appendChild(document.importNode(tplContent, true));
    }
}



// register the custom-element of the component
  document.registerElement('es6-card', Es6Card);