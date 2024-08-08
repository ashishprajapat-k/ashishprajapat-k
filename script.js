document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('content').classList.remove('hidden');
    document.getElementById('balloons').classList.remove('hidden');
    this.style.display = 'none';
    startSlider();
});

function startSlider() {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    let index = 0;
    setInterval(() => {
        index = (index + 1) % slideImages.length;
        slides.style.transform = `translateX(${-index * 100}%)`;
    }, 3000);
}
