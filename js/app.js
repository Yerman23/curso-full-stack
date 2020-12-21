
const nav = document.querySelector('.contenedor-nav');

window.addEventListener('scroll', changeColorNav);

function changeColorNav () {
  if(window.scrollY >= 53){
    nav.style.backgroundColor = '#232526';
    nav.style.borderBottom = 'none';
  }else{
    nav.style.backgroundColor = 'transparent';
    nav.style.borderBottom = '1px solid #E0752F';
  }
}


