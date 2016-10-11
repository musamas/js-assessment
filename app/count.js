if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
		var timerId = setInterval(myTimer,100);
		
		function myTimer(){
			console.log(start++);
			
			if (start > end) {
				clearInterval(timerId);
			}
		}
		
		return {
			cancel: function(){
				clearInterval(timerId);
			}
		}
    }
  };
});