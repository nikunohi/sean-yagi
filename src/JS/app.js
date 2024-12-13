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




// Select the scaling text
const scalingText = document.querySelector('.scaling-text');



// Function to handle scaling and repositioning
function scaleText() {
    const scrollPosition = window.scrollY; // Get scroll distance from top
    const maxScroll = window.innerHeight; // Set the maximum scale distance

    // Calculate the scale factor (minimum scale: 0.5)
    const scaleFactor = (1 - scrollPosition / maxScroll);

    // Apply the scale to the text
    scalingText.style.transform = `scale(${scaleFactor})`;
}

// Add a scroll event listener
window.addEventListener('scroll', scaleText);




