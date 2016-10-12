if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
		return fn(...arr);
    },

    speak : function(fn, obj) {
		return fn.call(obj);
    },

    functionFunction : function(str) {
		
		return function(str2){
			return str + ", " + str2;
		};
    },

    makeClosures : function(arr, fn) {
		var result = [];
		var Func = function(val) {
			return function() { return fn(val);};
		};
		for (var i=0; i< arr.length; i++){
			result.push(Func(arr[i]));
		}
		return result;
    },

    partial : function(fn, str1, str2) {
		return function(str){
			return fn(str1, str2, str);
		};
    },

    useArguments : function() {
		var i, result = 0;
		for (i = 0; i<arguments.length; i++){
			result += arguments[i];
		}
		
		return result;
    },

    callIt : function(fn) {
		var args = Array.prototype.slice.call(arguments);
		args.shift();
        fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
		var args = Array.prototype.slice.call(arguments);
		args.shift();
		return function(){
			var argumes = args.concat(Array.prototype.slice.call(arguments));
			return fn.apply(null, argumes);		
		};        
    },

    curryIt : function(fn) {
        var expArgCount = fn.length;
	var args = [];
	    
	return checkArgs(args);
	    
	function checkArgs (args) {
	    if (args.length == expArgCount){
		return fn.apply(null, args);
	    }    else {
       	        return addArguments(args);
	    }
	}
	    
	function addArguments (args) {
	    return function (arg) {
		args.push(arg);
		return checkArgs(args);
	    };
	}
    }
  };
});
