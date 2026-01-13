document.addEventListener("mousemove", (event) => {
    let mousex = event.clientX;
    let mousey = event.clientY;
    let elem = document.querySelector('.cursor-glow');
    if (elem) {
        elem.style.left = mousex + 'px';
        elem.style.top = mousey + 'px';
    }
});
