import {header,footer} from './template/includes.js';
import render from '../render.js';
import welcome from './template/welcome.js';
const home =()=>{
  render(header);
  render(welcome);
  render(footer);
 
}
export default home;
