function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    let current = head

    while (current) {
        let tempNext = current.next
        current.next = prev 
        prev = current
        current = tempNext 
    } 

    return prev
};
