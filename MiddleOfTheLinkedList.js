/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  var length = 0;
  var curr = head;
  var skip = 0;

  while (curr !== null) {
      length++;
      curr = curr.next;
  }

  curr = head;


          skip = Math.floor(length/2)


  for (let i = 0; i < skip; i++) {
      curr = curr.next;
  }
  return curr;
};