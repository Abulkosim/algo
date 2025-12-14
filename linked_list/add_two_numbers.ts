/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let rest = 0;
  let dummy = new ListNode(0);
  let node = dummy;

  while (l1 || l2 || rest) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + rest;
    node.next = new ListNode(sum % 10);
    node = node.next;

    rest = Math.floor(sum / 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
};