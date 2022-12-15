var MyQueue = function() {
  this.count = 0;
  this.storage = [];
};

/**
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.storage = this.storage.concat([x]);
  this.count++;
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  var popped = this.storage[0];
  this.storage.shift();
  if (this.storage.length !== 0){
      this.count--;
  }
  return popped;
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  return this.storage[0];
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return !this.storage.length;
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/