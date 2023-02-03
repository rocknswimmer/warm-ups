var MinStack = function() {
  this.storage = []
  this.minimum = []

};

/**
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.storage.unshift(val)
  if (this.minimum.length === 0 || val <= this.minimum[0]){
      this.minimum.unshift(val)
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  var popped = this.storage[0];
  this.storage.shift()

  if(popped === this.minimum[0]) {
      this.minimum.shift()
  }
  return popped

};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.storage[0]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.minimum[0]
};