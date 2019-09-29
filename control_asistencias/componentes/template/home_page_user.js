const home_page = (title,text,ruta = '',color = '') => {
	var button = '';
	if(ruta != ''){
  	button = `<a href='${ruta}'><i class="fas fa-arrow-circle-left icon-size ${color}"> </i></a>`;
}else{
 button = '<i class="fas fa-chevron-down icon-size text-dark"></i>';
}
return `<section class="wh-100 hgt-100 container pt-4 p-relative text-center">
	    <h2 class="mb-2"> ${title} </h2>
	    <p class="mb-3"> ${text} </p>
	    ${button}
	  </section>`;
};
export default home_page;
