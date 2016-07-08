/*-----------------------------------------------------------------------------------------
To speed up dev if you're short of time, or want to use this for convenience

npm install can be very time-consuming, plus windows users suffer from folder depth 
hitting limits (npm3 will eventually relieve that). tested on windows, s/work elsewhere.

instead:
(if not installed, install the package once, globally using the -g switch)
1. enter the names of the packages you want to use in your project into the dirs array below
2. goto project folder (above /node_modules) and run: node mk_node_module_links
3. this will be instantaneous and you'll be able to focus on your project
4. remember to deal with source-control of any packages used!
-----------------------------------------------------------------------------------------*/
var
   fs = require('fs');
	
var
   // global node_modules location, change to suit
   srce  = 'c:/bin/node/node_modules/',
   dest = process.cwd() + '/node_modules/';
   dirs = [
      'express',
      'body-parser',
      'favicons',
      'moment',
      'webpack'
   ];

console.log(dest);

dirs.forEach( function(e,i){
   fs.symlink( srce+e, dest+e, 'dir', 
      function(err,x){
         if (err)console.log(err);
      }
   );
});
