if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
		var result = [];
		// check if a sub-directory is specified
		if (typeof dirName == "undefined"){
			listAll(data);
		}
		else{
			finDir(data);
		}
		
		// function to select specified directory
		function finDir(dirData){
			if (typeof dirData == "object" && dirData.dir !== null){
				if (dirData.dir == dirName){
					listAll(dirData);
			    }
				else{
					files = dirData.files;
					for (i=0; i< files.length; i++){
						finDir(files[i]);
					}
				}
			}
		}
		
		// function to list all files in a specified directory
		function listAll(ddata){
			var i, files;
			if (typeof ddata == "string"){
				result.push(ddata);
			}
			else{				
				files = ddata.files;
				for (i=0; i< files.length; i++){
					listAll(files[i]);
				}
			}	
		}
		
		return result;
    },

    permute: function(arr) {
		var results = [];
		
		function permutate(permArr, mem) {
			var elem;
			var mem = mem || [];

			for (var i = 0; i < permArr.length; i++) {
				elem = permArr.splice(i, 1);
				if (permArr.length === 0) {	
					results.push(mem.concat(elem));
				}
				
				permutate(permArr.slice(), mem.concat(elem));
				permArr.splice(i, 0, elem[0]);
			}

			return results;
		}
		return permutate(arr);
    }
  };
});
