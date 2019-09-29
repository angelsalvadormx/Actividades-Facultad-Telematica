import render from '../render.js';

const contacto = () =>{
 render(`<section class='wh-100 hgt-100 text-center flex center column'>
          <h2 class="mb-3">Contacto</h2>
	  <small class="orangered wh-100 block">Telefono: 312-31-610-45</small>
	  <small class="wh-100 block mt-3 mb-2">Extenciones</small>
	  <main class="wh-80 mb-3">
	    <article> <section><p>Contacto 1</p><small class="block">Permisos y licencias</small><strong>630000</strong></section></article>
	    <article> <section><p>Contacto 2</p><small class="block">Incapacidades</small><strong>631150</strong></section></article>
	    <article> <section><p>Contacto 3</p><small class="block">Soporte tecnico</small><strong>631500</strong></section></article>
	  </main>
	  <a href="home">Inicio</a>
 	</section>
	 `);
}
export default contacto;
