import noFound from './componentes/noFound.js';
var url = window.location.pathname;
var ruta = "";

function router(rute,component){
 var found = url.search(rute);

debugger;
if(found != -1){
    component();
 }else{ 
  noFound();
  //window.location.href='404';
 } 
}

export default router;
