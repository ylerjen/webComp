// Use the polyfill if the currentScript property is not supported by the browser
//document._currentScript = document._currentScript || document.currentScript;

var hostDocument = document._currentScript.ownerDocument;
var template = hostDocument.getElementById('tpl_card');
var compPrefix = "my-card__";

// Create the component
var MyCardProto = Object.create(HTMLElement.prototype);

// set the callback for the component created event
MyCardProto.createdCallback = function() {

  // set the template in the element
  var shadow = this.createShadowRoot();
  console.log('template', template);
  shadow.appendChild(template.content);

  // set the passed name into .name
  var name = this.getAttribute('name');
  shadow.querySelector('.' + compPrefix + 'name').innerHTML = name;
  
  // set the passed title into the .title
  var title = this.getAttribute('title');
  var titleEl = shadow.querySelector('.' + compPrefix + 'title');
  if (title && title.trim()) {
    titleEl.innerHTML = title;
  } else {
    titleEl.parentElement.removeChild(titleEl);
  }
};



// register the custom-element of the component
document.registerElement('my-card', {
  prototype: MyCardProto
});