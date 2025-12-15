
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0, head);
    let current = dummy;
    let len = 0

    while (head) {
        len++;
        head = head.next;
    }

    let diff = len - n;

    while (diff > 0) {
        current = current.next;
        diff--;
    }

    current.next = current.next.next;
    return dummy.next;
};
