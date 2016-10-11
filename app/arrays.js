if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		var idx = -1;
		for (var i=0; i<arr.length; i++){
			if (arr[i]==item){
				idx=i;
				break;
			}
		}
		return idx;
    },

    sum : function(arr) {
		var sum = 0;
		arr.forEach(function addItem(item){sum+=item;});
		return sum;
    },

    remove : function(arr, item) {
		var res = new Array();
		for (var i=0; i<arr.length; i++){
			if (arr[i] != item){
				res.push(arr[i]);
			}
		}
		return res;
    },

    removeWithoutCopy : function(arr, item) {
		for (var i=0; i<arr.length; i++){
			if (arr[i]==item){
				arr.splice(i,1);
				i--;
			}
		}
		return arr;
    },

    append : function(arr, item) {
		arr.push(item);
		return arr;
    },

    truncate : function(arr) {
		arr.pop();
		return arr;
    },

    prepend : function(arr, item) {
		arr.unshift(item);
		return arr;
    },

    curtail : function(arr) {
		arr.shift();
		return arr;
    },

    concat : function(arr1, arr2) {
		return arr1.concat(arr2);		
    },

    insert : function(arr, item, index) {
		arr.splice(index,0,item);
		return arr;
    },

    count : function(arr, item) {
		var cnt = 0;
		arr.forEach(
			function count(value){
				if (value==item){
					cnt++;
					}
				}
			);
		return cnt;
    },

    duplicates : function(arr) {
		var res = new Array();
		for (var i=0; i<arr.length; i++){
			var iFound = false;
			for (var j=i+1; j<arr.length; j++){
				if (arr[i]==arr[j]){
					if (!iFound){
						res.push(arr[i]);
						iFound = true;
					}					
					arr.splice(j,1);
				}
			}
		}
		return res;
    },

    square : function(arr) {
		for (var i=0; i<arr.length; i++){
			arr[i]*=arr[i];
		}
		return arr;
    },

    findAllOccurrences : function(arr, target) {
		var res = new Array();
		for (var i=0; i<arr.length; i++){
			if (arr[i]==target){
				res.push(i);
			}
		}
		return res;
    }
  };
});
