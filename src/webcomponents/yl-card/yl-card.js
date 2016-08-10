var YlCardProto = Object.create(HTMLElement.prototype);
YlCardProto.createdCallback = function() {
  console.debug(this);
  var name = this.getAttribute('name');
  let title = document.createElement('h1');
  title.className = 'name';
  this.appendChild(title);
  title.innerText = name;
};

var YlCard = document.registerElement('yl-card', {
  prototype: YlCardProto
});