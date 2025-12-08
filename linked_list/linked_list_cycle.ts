
function hasCycle(head: ListNode | null): boolean {
    let current = head
    let visited = new Set()

    while (current) {
        if (visited.has(current)) return true
        visited.add(current)
        current = current.next
    }

    return false
};
