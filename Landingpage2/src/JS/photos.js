const images = [
    { src: '../dist/assets/me.jpg', startX: -200, startY: -500, endX: 100, endY: 20, zIndex: -3 },
    { src: 'image2.jpg', startX: window.innerWidth + 200, startY: 300, endX: 300, endY: 500, zIndex: 2 },
    { src: 'image3.jpg', startX: 100, startY: window.innerHeight + 200, endX: 500, endY: 100, zIndex: 3 }
];

const container = document.createElement('div');
container.style.position = 'relative';
container.style.width = '100%';
container.style.height = '200vh'; 
container.style.overflow = 'hidden';
document.body.appendChild(container);

images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image.src;
    img.style.position = 'absolute';
    img.style.left = `${image.startX}px`;
    img.style.top = `${image.startY}px`;
    img.style.zIndex = image.zIndex;
    img.style.transition = 'transform 0.5s ease';
    img.style.transform = `translate(0, 0)`;
    img.classList.add('animated-image');
    container.appendChild(img);
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    document.querySelectorAll('.photos1').forEach((img, index) => {
        const image = images[index];

        const progress = Math.min(scrollPosition / viewportHeight, 1); 

        const currentX = image.startX + (image.endX - image.startX) * progress;
        const currentY = image.startY + (image.endY - image.startY) * progress;

        img.style.transform = `translate(${currentX}px, ${currentY}px)`;
    });
});
