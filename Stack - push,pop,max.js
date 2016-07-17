function Stack() {
  var storageMax = [];  
  var internalStorage = [];
  var len = storageMax.length-1;
   this.Push = function(number) {
   if (storageMax.length===0) {
      storageMax.push(number);
   } else {
     if (storageMax[len]<number) {
       storageMax.push(number);
     } else {
       storageMax.push(storageMax[len]);
      }
   }
   internalStorage.push(number)
  };
  this.Pop = function() {
   
   var num = internalStorage.pop();

    storageMax.pop();   
   return num;
  }
 this.Max = function() {
    return storageMax[storageMax.length-1];   
  }
}

 
function List (data) {
    this.request = data;
    this.next = null;
}


function LinkedList () {

    var head = new List(null);
    var cur;

    this.addRequest = function (request) {
      var node = new List (request);
      
       if (head.request==null) {
           cur = node;
           head = node;
       } else {
          cur.next = node;
          cur = cur.next;
       }

    }


    this.getRequest = function () {

        var req = head;
        head = head.next;
        if (head==null) {
            head = new List(null);
            cur = head;
        }
        cur = head;

        return req.request;
    }

}


var l = new LinkedList();
l.addRequest(1);
l.addRequest(2);
l.getRequest(1);