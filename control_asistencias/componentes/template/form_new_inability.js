export default `
<section class="bkg-dark wh-100 hgt-100 container pt-3">
  <h2 class="orangered">Datos de incapacidad</h2>
  <form class="text-white">
    <article class="form-group row">
      <label class="col-sm-2 col-form-label">Inicio</label>
      <section class="col-sm-10">
      	<input type="text" class="form-control">
      </section>
    </article>
    <article class="form-group row">
      <label class="col-sm-2 col-form-label">Termino</label>
      <section class="col-sm-10">
      	<input type="text" class="form-control">
      </section>
    </article>
    <article class="form-group row">
      <label class="col-sm-2 col-form-label">Tipo</label>
      <section class="col-sm-10">
        <select class="form-control"></select>
      </section>
    </article>
    <article class="flex column center-y mt-3">
      <a href="incapacidadaceptada"><i class="fas fa-check-circle orangered"></i></a>
      <a href="incapacidades"><i class="fas fa-arrow-circle-left icon-size text-white"></i></a>
   </article>
  </form>
</section>
`;
