const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle=>{
    toggle.addEventListener('click', ()=>{
        console.log('t')
        toggle.parentNode.classList.toggle('active')
    })
})




