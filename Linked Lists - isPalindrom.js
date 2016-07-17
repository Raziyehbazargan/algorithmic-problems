
var isPalindrome = function(head) {
    if (head===null) {
        return true;
    }
    var cur = head;
    var count = 0;
    while (cur!==null) {
        count++;
        cur = cur.next;
    }
    var mid = Math.ceil(count/2);
    var midCopy = mid;
    cur = head;
    while (mid>1) {
        cur =cur.next;
        mid--;
    }
    var newHead = cur;
    var prev = cur;
    var next = cur.next;
    newHead.next = null;
    newHead = next;
    while (newHead!==null) {
        next = newHead.next;
        newHead.next = prev;
        prev = newHead;
        newHead = next;
    }
    cur = head;
    while (midCopy>0) {
        if (cur.val!==prev.val) {
            return false;
        }
        midCopy--;
        cur = cur.next;
        prev = prev.next;
    }
    return true;
};
