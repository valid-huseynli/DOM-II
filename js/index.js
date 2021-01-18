const links = document.querySelectorAll('a')
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'black'
    })
});

document.addEventListener('keydown', (e) => {
    if(e.key ===10 || e.key === 'Escape'){
        alert('NO EXIT')
    }
});

document.addEventListener('wheel', (evt) => {
    if(evt.deltaY > 0)
    document.body.style.backgroundColor = 'green';
    if(evt.deltaY < 0)
    document.body.style.backgroundColor = 'blue';
});

const p = document.querySelectorAll('p')
window.addEventListener('load', () =>{
    setTimeout(function() {
        p.forEach(instance => {
            instance.textContent = 'wheel goes around' 
        })
    }, 5000)
});

links.forEach(link => {
    link.addEventListener('focus', () => {
        link.style.transform = 'scale(2.2)'
    })
});

window.addEventListener('resize',() => {
    document.querySelector('body').style.backgroundColor = 'yellow'
});

const imgs = document.querySelectorAll('img')

window.addEventListener('scroll', () => {
    imgs.forEach(img => {
        img.style.display = 'none'
    })
});

links.forEach(link => {
    link.addEventListener('dblclick', () => {
        alert('NAYN')
    })
});
