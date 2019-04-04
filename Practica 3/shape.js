    const squares = document.getElementsByClassName('square');

const loadClick = ()=> {
    console.log(squares);
    Object.keys(squares).forEach( key => {
        squares[key].addEventListener('click',function(){
            removeClase()   
            this.classList.add('active');
            setStyle(this);
        });
    });
};

const removeClase = () =>{
    Object.keys(squares).forEach( key => {
        squares[key].classList.remove('active');
    });
};

const rgbToHex = (col) =>{

    if(col.charAt(0)=='r')
    {
        col=col.replace('rgb(','').replace(')','').split(',');
        var r=parseInt(col[0], 10).toString(16);
        var g=parseInt(col[1], 10).toString(16);
        var b=parseInt(col[2], 10).toString(16);
        r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
        var colHex='#'+r+g+b;
        return colHex;
    }
    return col;
}

const idColorBack = document.getElementById('IdColorBack');
const idAncho = document.getElementById('IdAncho');
const idAlto = document.getElementById('IdAlto');
const idBorde = document.getElementById('IdBorde');
const idColorB = document.getElementById('IdColorBorde');

const setStyle = (item) =>{
    console.log(rgbToHex(item.getAttribute('style').split(';').find(key =>{ return key.search('background-color') != -1 }).split(':')[1].replace(" ","")));
    
    idColorBack.value = rgbToHex(item.getAttribute('style').split(';').find(key =>{ return key.search('background-color') != -1 }).split(':')[1].replace(" ",""));
    idAncho.value = item.getAttribute('style').split(';').find(key =>{ return key.search('width') != -1 }).split(':')[1].split('px')[0].replace(" ","");
    idAlto.value = item.getAttribute('style').split(';').find(key =>{ return key.search('height') != -1 }).split(':')[1].split('px')[0].replace(" ","");
    idBorde.value =  item.getAttribute('style').split(';').find(key =>{ return key.search('border-width') != -1 }).split(':')[1].split('px')[0].replace(' ','');
    idColorB.value = rgbToHex(item.getAttribute('style').split(';').find(key =>{ return key.search('border-color') != -1 }).split(':')[1].replace(' ','')); 
}

idColorBack.addEventListener('change',function(){ document.getElementsByClassName('active')[0].style.backgroundColor = this.value;});

idAncho.addEventListener('change',function(){ document.getElementsByClassName('active')[0].style.width = this.value+"px"; });

idAlto.addEventListener('change',function(){ document.getElementsByClassName('active')[0].style.height = this.value+"px";});

idBorde.addEventListener('change',function(){ document.getElementsByClassName('active')[0].style.borderWidth = this.value+"px";});

idColorB.addEventListener('change',function(){document.getElementsByClassName('active')[0].style.borderColor = this.value});

document.getElementById('add').addEventListener('click',()=>{
    document.getElementById('secContainer').innerHTML += "<article class='square' style='width: 100px; height: 100px; background-color: #FF0000; border-color: #000000; border-style: solid;border-width: 2px; margin-left: 5px;'></article>";
    loadClick();
});

