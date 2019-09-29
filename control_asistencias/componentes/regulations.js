import render from '../render.js';

const normas = () => {
  render(`<section class="wh-100 hgt-100 flex center column">
	    <h2 class="mb-3 orangered">Normatividad</h2>
	    <small class="mb-2"> Selecciona una opci&oacute;n</small>
	    <main class="mb-2 container text-center">
	      <article class="wh-100 flex around center-y"> <p>Ley Feredal del trabajo</p></article>
	      <article class="wh-100 flex around center-y"> <p>Ley organica UdeC</p></article>
	      <article class="wh-100 flex around center-y"> <p>Contrato colectivo UdeC</p></article>
	      <article class="wh-100 flex around center-y"> <p>Normas complementarias para el control de asistencias</p></article> 
	    </main>
	    <a href="home">Inicio</a>
	  </section>`);
}
export default normas;
