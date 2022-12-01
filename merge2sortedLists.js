/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  var temp1 = list1;
  var temp2 = list2;
  var combo, tail;

  if (list1 === list2) {
      return list1;//kinda wrong but really not sure how to rep otherwise.
      //maybe just return new ListNode? not sure what conditional to use though
  }

  while (temp1 !== null || temp2 !== null) {
      if(temp1 === null) {
          if(combo === undefined) {
                  combo = new ListNode(temp2.val)
              temp2 = temp2.next;
              } else {
                  if (tail === undefined) {
                      combo.next = new ListNode(temp2.val)
                      tail = combo.next;
                      temp2 = temp2.next;
                  } else {
                      tail.next = new ListNode(temp2.val)
                      tail = tail.next;
                      temp2 = temp2.next;
          }
      }
  }

       else if (temp2 === null) {
          if(combo === undefined) {
                  combo = new ListNode(temp1.val)
              temp1 = temp1.next;
              } else {
                  if (tail === undefined) {
                      combo.next = new ListNode(temp1.val)
                      tail = combo.next;
                      temp1 = temp1.next;
                  } else {
                      tail.next = new ListNode(temp1.val)
                      tail = tail.next;
                      temp1 = temp1.next;
          }
      }
  }

       else {
          if (temp1.val < temp2.val) {
              if(combo === undefined) {
                  combo = new ListNode(temp1.val)
                  temp1 = temp1.next;
              } else {
                  if (tail === undefined) {
                      combo.next = new ListNode(temp1.val)
                      tail = combo.next;
                      temp1 = temp1.next;
                  } else {
                      tail.next = new ListNode(temp1.val)
                      tail = tail.next;
                      temp1 = temp1.next;
                  }

              }
          } else if (temp1.val > temp2.val) {
              if(combo === undefined) {
                  combo = new ListNode(temp2.val)
                  temp2 = temp2.next;
              } else {
                  if (tail === undefined) {
                      combo.next = new ListNode(temp2.val)
                      tail = combo.next;
                      temp2 = temp2.next;
                  } else {
                      tail.next = new ListNode(temp2.val)
                      tail = tail.next;
                      temp2 = temp2.next;
          }
      }
  } else {
      if(combo === undefined) {
                  combo = new ListNode(temp1.val)
          temp1 = temp1.next;
              } else {
                  if (tail === undefined) {
                      combo.next = new ListNode(temp1.val)
                      tail = combo.next;
                      temp1 = temp1.next;
                  } else {
                      tail.next = new ListNode(temp1.val)
                      tail = tail.next;
                      temp1 = temp1.next;
  }

}
      if (tail === undefined) {

                      combo.next = new ListNode(temp2.val)
          tail = combo.next;
          temp2 = temp2.next;
                  } else {
                      tail.next = new ListNode(temp2.val)
                      tail = tail.next;
                      temp2 = temp2.next;
  }

  }
      }
  }

  //remainder


  return combo;
};