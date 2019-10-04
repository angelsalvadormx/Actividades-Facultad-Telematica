const root = document.getElementById('root');
const h = '';
function render(template,clear=false){
   if(clear)
    root.innerHTML = '';
  root.innerHTML += template;
}
export default render;
