import render from '../render.js';

const procedimiento = () => {
  render(`<section class="wh-100 hgt-100 text-center flex center column ">
  	<h2 class="orangered">Procedimiento</h2>
	<small class="mb-3">Selecciona una opci&oacute;n</small>
	<article class="sec-procedimientos flex wrap around wh-60 mb-3">
	  <a href='#' class='mb-2 btn btn-info'>Mano</a>
	  <a href='#' class='mb-2 btn btn-info'>Huella</a>
	  <a href='#' class='mb-2 btn btn-info'>Facial</a>
	  <a href='#' class='mb-2 btn btn-info'>Iris</a>
	</article>
	<a href="home">Incio</a>
  </section>`);
};
export default procedimiento;
