var reorderList = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondHalf = slow.next;
    slow.next = null;
    let prev = null;
    let next = null;
    let current = secondHalf;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    while (head && prev) {
        let temp1 = head.next;
        let temp2 = prev.next;
        head.next = prev;
        prev.next = temp1;
        head = temp1; 
        prev = temp2;
    }
};
