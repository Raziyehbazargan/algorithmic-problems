function searchZero (arr) {
	var i = 0;
	var j = arr.length-1;
		while (i!==j) {
			while (arr[i]!==0) {
				i++;
				if (i===j){
					return arr;
				}
			}
			if (arr[j]!==0) {
				arr[i]=arr[j];
				arr[j]=0;	
				i++;
			} 
			if (j===i) {
				return arr;
			} else if (arr[j]===0){
				j--;
			}
		}
		return arr;
}

function searchZero (arr) {
	var i = 0;
	var j = arr.indexOf(0);
	while (i!==arr.length) {
		while (arr[i]!==0) {
			i++;
			if (i===arr.length-1) {
				return arr;
			}
		}
		
		while (arr[j]===0&&j!==arr.length-1) {
			j++;
		}
		if (arr[j]!==0) {
			arr[i]=arr[j];
			arr[j]=0;
			i++;
		}
		if (j===arr.length-1) {
			return arr;
		}
	}
	return arr;
}

function searchZero(arr) {
 var index = arr.indexOf(0);
 for(var i=index; i < arr.length; i++) {
   if (arr[i] !== 0) {
     arr[index] = arr[i];
     arr[i] = 0;
     index = index+1;
   }
 }
 return arr;
}