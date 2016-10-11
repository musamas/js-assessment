if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
		var bin = num.toString(2);
		while(bin.length<8){
			bin = "0" + bin;
		}
		return parseInt(bin.charAt(8-bit));
    },

    base10: function(str) {
		return parseInt(str, 2);
    },

    convertToBinary: function(num) {
		var bin = num.toString(2);
		while(bin.length<8){
			bin = "0" + bin;
		}
		return bin;
    },

    multiply: function(a, b) {
		return parseFloat((a*b).toPrecision(1));
    }
  };
});

