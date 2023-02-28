/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.max = capacity
  this.storage = []
  this.keys = {}

};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  var index = -1;
  var result, popped;
  if(this.keys[key] !== undefined){
      index = this.keys[key]
  }
  // for(let i = 0; i < this.storage.length; i++){
  //     if(this.storage[i][0] === key){
  //         index = i;
  //     }
  // }
  console.log(this.storage, index, key, this.keys)
  if(index === -1){
      return index
  }
  result = this.storage[index][1]
  // console.log(this.storage, index, result)
  popped = this.storage[index]
  this.storage.splice(index, 1)
  this.storage.push(popped)//moves least recently moved to the front.
  console.log(this.storage, index, result)
  this.keys[key] = this.storage.length -1;
  return result;

};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  var index = -1;
  var popped;
  if(this.keys[key] !== undefined){
      index = this.keys[key]
  }
  console.log('put', this.storage, index, key, this.keys)
  // for(let i = 0; i < this.storage.length; i++){
  //     if(this.storage[i][0] === key){
  //         index = i;
  //     }
  // }
  if( index !== -1){
      this.storage[index][1] = value
      popped = this.storage[index]
  this.storage.splice(index, 1)
  this.storage.push(popped)
  this.keys[key] = this.storage.length -1;
      return
  }
  if(this.storage.length === this.max){
      this.keys[this.storage[0][0]] = undefined
      this.storage.shift()
  }
  this.storage.push([key, value])
  this.keys[key] = this.storage.length -1;

};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/