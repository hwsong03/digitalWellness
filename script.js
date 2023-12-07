document.addEventListener("DOMContentLoaded", () => {
    const interactiveBg = document.getElementById('interactive-background');

    interactiveBg.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        interactiveBg.style.backgroundColor = `rgb(${Math.floor(240 - mouseX * 40)}, ${Math.floor(240 - mouseY * 40)}, 240)`;
    });
});

