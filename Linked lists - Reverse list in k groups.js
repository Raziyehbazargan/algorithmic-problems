// solution if we want to reverse remainder in the end
var reverseKGroup = function(head, k) {
    var cur = head;
    var next = null;
    var prev= null;
    var count =0;
    
    while (cur!==null&&count<k) {
        next = cur.next;
        cur.next = prev;
        prev= cur;
        cur = next;
        count++;
    }
    if (next!==null) {
        head.next = reverseKGroup(next, k);
    }
    return prev;
};

// solution if we need to leave remainder
var reverseKGroup = function(head, k) {
    if (head===null) {
        return null;
    }
    if (k===1){
        return head;
    }
    var cur = head;
    var next = null;
    var prev= null;
    var count =0;
    while (cur!==null) {
        count++;
        cur = cur.next;
    }
    if (count===1) {
        return head;
    }
    if (count<k) {
        return head;
    }
    count = 0;
    cur = head;
    while (cur!==null&&count<k) {
        next = cur.next;
        cur.next = prev;
        prev= cur;
        cur = next;
        count++;
       
    }
    if (next!==null) {
        head.next = reverseKGroup(next, k);
    }
    return prev;
};