var url = window.location.pathname.split('/');

var ruta = "";

function router(rute,component){
 // Clear array
  url = url.filter(function (el) {
    return el != null;
  });

 var include = url.includes(rute);
 if(include)
 console.log('rute',rute);
 var module = require('./components/'+rute+'.js');
  console.log(module)
}

export default router;
