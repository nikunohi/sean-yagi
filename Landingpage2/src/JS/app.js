const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




// Select scaling text
const scalingText = document.querySelector('.scaling-text');



// Handle scaling and repositioning
function scaleText() {
    const scrollPosition = window.scrollY; // Get scroll distance from top
    const maxScroll = window.innerHeight; // Maximum scale distance

    // Calculate scale factor (minimum scale: 0.5)
    const scaleFactor = (1 - scrollPosition / maxScroll);

    // Apply scale to text
    scalingText.style.transform = `scale(${scaleFactor})`;
}


window.addEventListener('scroll', scaleText);




