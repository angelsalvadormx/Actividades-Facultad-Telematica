import render from '../render.js';
import {header,footer} from './template/includes.js';
import welcome from './template/home_page_user.js';
import historial from './template/historial.js';

const inability = () => {
  render(header+
	  welcome('Incapacidades','Aqui puedes reportar y subir el comprobante de tus incapacidades laborales expedidas por el IMSS')+
	  historial+
	  footer);
};
export default inability;
