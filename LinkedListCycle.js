/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  var currNode = head;
  var pos = 0;

  if (head === null){
      return false;
  }

  while(currNode.next){
      if (currNode.pos !== undefined) {
          return true;
      }

      currNode.pos = pos;
      currNode = currNode.next;

  }
  return false;
};