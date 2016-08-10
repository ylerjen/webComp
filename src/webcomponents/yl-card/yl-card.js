var YlCardPrototype = Object.create(HTMLElement.prototype);
YlCardPrototype.createdCallback = function() {
  this.querySelector('p').textContent = "I'm an YlCard!";
};

YlCardPrototype.foo = function() {
  console.log('foo() called');
};

var YlCard = document.registerElement('yl-card', {
  prototype: YlCardPrototype
});