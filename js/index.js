
burger=document.querySelector('.burger')
listitem=document.querySelector('.listitem')
rightnav=document.querySelector('.rightnav')
navbar=document.querySelector('.navbar')

burger.addEventListener('click',()=>{
    
    listitem.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('nav-h-resp');
});



