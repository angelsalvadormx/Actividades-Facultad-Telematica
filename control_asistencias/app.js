import router from './router.js';
import home from './componentes/home.js';
import introduccion from './componentes/introduction.js';
import ubicacion from './componentes/location.js';
import procedimiento from './componentes/procedure.js'
import normas from './componentes/regulations.js';
import contacto from './componentes/contact.js';
import usuario from './componentes/user.js';
import incapacidades from './componentes/inability.js';
import agregar_incapacidad from './componentes/new_inability.js';
import incapacidad_aceptada from './componentes/accepted_inability.js';

router.setRoute('/home',home);
router.setRoute('/introduccion',introduccion);
router.setRoute('/ubicacion',ubicacion);
router.setRoute('/procedimiento',procedimiento);
router.setRoute('/normatividad', normas);
router.setRoute('/contacto',contacto);
router.setRoute('/usuario',usuario);
router.setRoute('/incapacidades',incapacidades);
router.setRoute('/nuevaincapacidad',agregar_incapacidad);
router.setRoute('/incapacidadaceptada',incapacidad_aceptada);
router.run();
/*

router('/home',home);
router('/introduccion',introduccion)

//router('/404',noFound);




//break;
//return 0;
/*
render(header);
render(footer);
*/
