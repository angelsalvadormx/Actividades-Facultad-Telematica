import render from '../render.js';
import welcome from './template/home_page_user.js';
import {header,footer} from './template/includes.js'
import menu from './template/menu_user.js';

const user = () => {
 render(header+
	welcome('Bienvenido','En esta aplicaci&oacute;n prodr&aacute;s consultar tu registro de asistencias, solicitar permisos econ&oacute;micos y captura de tus incapacidades.')+
	menu+
 	footer)
}
export default user;
