if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
		return /[0-9]/.test(str);
    },

    containsRepeatingLetter : function(str) {
		return /([A-Z])\1/i.test(str);
    },

    endsWithVowel : function(str) {
		return /[aeiou]$/i.test(str);
    },

    captureThreeNumbers : function(str) {
		var match = /[0-9]{3}/.exec(str);
		return (match != null) ? match[0] : false;
    },

    matchesPattern : function(str) {
		return /^\d{3}-\d{3}-\d{4}$/.test(str);
    },
	
    isUSD : function(str) {
		return /^\$\d+(,\d{3})*(\.\d\d)?$/.test(str);
    }
  };
});
