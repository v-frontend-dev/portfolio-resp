burger=document.querySelector('.burger')
listitem=document.querySelector('.listitem')
rightnav=document.querySelector('.rightnav')
navbar=document.querySelector('.navbar')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('nav-h-resp');
    listitem.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
})
