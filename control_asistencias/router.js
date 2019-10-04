import noFound from './componentes/noFound.js';
var url = window.location.pathname;
var components = [];

function run(){
 var bFound = false;
 
 Object.keys(components).forEach(function(key){
  if(url.indexOf(key) != -1){
    bFound = true;
    components[key]();
    return 0;
  }
 }); 
 
 if(!bFound){
    noFound();
 }
}

function setRoute(route,component){
  components[route] = component;
}

export default {run,setRoute};
