// variables
var Gimports = {};

// loader
var require = function (cname) {
   return function(resolve, reject) {

      if (Gimports[cname]) {
         console.log(cname + ' component found in app-bundle cache');
         resolve(Gimports[cname].component);   // resolve component from cache
      }
      else {
         console.log(cname + ' component NOT in app-bundle cache, loading...' );           
         
         // import bundle from file through HTTP GET request
         Vue.http.get('app/components/'+ cname +'.vue')
            .then(
               function(response) {
                  var vm = {}, template = '', bundle, node;

                  // create a phantom element called bundle & attach the response to this element 
                  console.log(cname + ' component retrieved from server ok');           
                  bundle = document.createElement('bundle'); 
                  bundle.innerHTML = response.data;

                  // compile the component and store it in the bundle cache
                  for (var i=0; i<bundle.children.length; i++) {
                     node = bundle.children[i];
                     
                     Gimports[cname] = {style: []};
                     
                     switch (node.nodeName.toUpperCase()) {
                        case 'STYLE':
                           var css = document.getElementById('css-' + node.getAttribute('css-layer')),
                              style = document.createTextNode('\n/* ' + cname + ' */' + node.innerHTML + '\n');

                           Gimports[cname].style.push(style);
                           if (css) {
                              css.appendChild(style);
                              console.log(cname + ' component - located style');           
                           }
                           break; 

                        case 'TEMPLATE':
                           template = node.innerHTML;
                           console.log(cname + ' component - located template');           
                           break;

                        case 'SCRIPT':
                           console.log(cname + ' component - located script');           
                           /* jslint evil: true */
                           var func = new Function('return ' + node.innerHTML.trim() + ';');
                           vm = func();
                           break;
                     }
             
                  }

                  // Add template if present in component
                  if (template.length > 0) {
                     vm.template = template;
                  }

                  // store component in cache
                  // Gimports[cname].component = Vue.extend(vm);
                  Gimports[cname].component = Vue.component(cname, vm);
                  console.log(cname + ' dynamic component created');           
           
                  if (Gimports[cname]) 
                     resolve(Gimports[cname].component);   // resolve component from cache
                   else 
                     reject();
                  
               }, 
               function (response) {
                  reject();
               }
            );
      }
   };
};


