import render from '../render.js';
import {header,footer} from './template/includes.js';
import welcome from './template/home_page_user.js';
import formulario from './template/form_new_inability.js';

const nueva_incapacidad = ()=>{
 render(header+
	 welcome('Capturar Incapacidad','Captura los datos de tu incapacidad y agrega las foto grafias necesarias para validar el documento')+
         formulario+
	 footer,true);
};

export default nueva_incapacidad;
