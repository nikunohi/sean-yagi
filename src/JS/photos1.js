document.addEventListener('DOMContentLoaded', () => {
    const image1 = document.querySelector('.photos1');

    // Check the scroll position and scroll direction for image1
    let lastScrollTop1 = 0;

    const handleScroll1 = () => {
        const scrollPos = window.scrollY;

        // Add 'active' class when scrolling down beyond a threshold
        if (scrollPos > 200 && scrollPos > lastScrollTop1) {
            image1.classList.add('active');
        } 
        // Remove 'active' class when scrolling back up
        else if (scrollPos < lastScrollTop1) {
            image1.classList.remove('active');
        }

        lastScrollTop1 = scrollPos; // Update last scroll position
    };

    // Trigger the scroll behavior for the first image
    window.addEventListener('scroll', handleScroll1);

    // Delay the execution of the second script by using setTimeout
    setTimeout(() => {
        const image2 = document.querySelector('.photos2');

        // Check the scroll position and scroll direction for image2
        let lastScrollTop2 = 0;

        const handleScroll2 = () => {
            const scrollPos = window.scrollY;

            // Add 'active' class when scrolling down beyond a threshold
            if (scrollPos > 200 && scrollPos > lastScrollTop2) {
                image2.classList.add('active');
            } 
            // Remove 'active' class when scrolling back up
            else if (scrollPos < lastScrollTop2) {
                image2.classList.remove('active');
            }

            lastScrollTop2 = scrollPos; // Update last scroll position
        };

        // Trigger the scroll behavior for the second image after delay
        window.addEventListener('scroll', handleScroll2);
    }, 500); // Delay the second script by 500ms (adjust as needed)

    const image3 = document.querySelector('.photos3');

    // Check the scroll position and scroll direction for image1
    let lastScrollTop3 = 0;

    const handleScroll3 = () => {
        const scrollPos = window.scrollY;

        // Add 'active' class when scrolling down beyond a threshold
        if (scrollPos > 200 && scrollPos > lastScrollTop3) {
            image3.classList.add('active');
        } 
        // Remove 'active' class when scrolling back up
        else if (scrollPos < lastScrollTop3) {
            image3.classList.remove('active');
        }

        lastScrollTop3 = scrollPos; // Update last scroll position
    };

    // Trigger the scroll behavior for the first image
    window.addEventListener('scroll', handleScroll3);

    const image4 = document.querySelector('.photos4');

    // Check the scroll position and scroll direction for image1
    let lastScrollTop4 = 0;

    const handleScroll4 = () => {
        const scrollPos = window.scrollY;

        // Add 'active' class when scrolling down beyond a threshold
        if (scrollPos > 200 && scrollPos > lastScrollTop4) {
            image3.classList.add('active');
        } 
        // Remove 'active' class when scrolling back up
        else if (scrollPos < lastScrollTop4) {
            image3.classList.remove('active');
        }

        lastScrollTop4 = scrollPos; // Update last scroll position
    };

    // Trigger the scroll behavior for the first image
    window.addEventListener('scroll', handleScroll4);

    
});

/* document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.photos1');

    // Trigger the animation after the page loads or after a certain delay
    setTimeout(() => {
        image.classList.add('active');
    }, 500); 
});
 */
/* document.addEventListener('scroll', () => {
    const image = document.querySelector('.photos1');
    const rect = image.getBoundingClientRect();

    if (rect.top < window.innerHeight / 2) {
        image.classList.add('photos1.active');
    } else {
        image.classList.remove('photos1.active');
    }
}); */
