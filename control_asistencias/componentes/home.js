import {header,footer} from './template/includes.js';
import render from '../render.js';
import welcome from './template/home.js';
import info from './template/info.js';
import menu_control from './template/menu.js';

const home =()=>{
  render(header +
	  welcome + 
	  info +
	  menu_control+ 
	  footer);
}  
export default home;
