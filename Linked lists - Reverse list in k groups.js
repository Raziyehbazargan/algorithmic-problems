// solution if we want to reverse remainder in the end
function Node (val) {
    this.val = val;
    this.next = null;
}
var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
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