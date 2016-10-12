if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var def = $.Deferred();
      def.resolve(value);
      return def.promise();
    },

    manipulateRemoteData : function(url) {
      var def = $.Deferred();
      var names = [];
      $.ajax(url).then(function(data) {
        $.map(data.people, function(person) {
          names.push(person.name);
        });
        
        def.resolve(names.sort());
      });
      
      return def.promise();
    }
  };
});
