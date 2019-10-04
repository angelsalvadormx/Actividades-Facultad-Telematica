import render from '../render.js';
import welcome from './template/home_page_user.js';
import {header,footer} from './template/includes.js';


const aceptada = () => {

  render(header+
	  welcome('Incapacidad Capturada','La incapacidad se almaceno correctamente en nuestro sistema, agradecemos tu disposici&oacute;n para avisar.','incapacidades','text-dark')+
	  footer);
}
export default aceptada;
