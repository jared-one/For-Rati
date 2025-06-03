document.addEventListener('DOMContentLoaded', () => {
    // --- Image Data ---
    const babyRatiImages = [
        'Baby Rati.jpg', 'Baby Rati 2.jpg', 'Baby Rati 3.jpg', 'Baby Rati 4.jpg', 
        'Baby Rati 5.jpg', 'Baby Rati 6.jpg', 'Baby Rati 7.jpg', 'Baby Rati 8.jpg', 
        'Baby Rati 9.jpg', 'Baby Rati 10.jpg', 'Baby Rati 11.jpg', 'Baby Rati 12.jpg', 
        'Baby Rati 13.jpg', 'Baby Rati 14.jpg'
    ].map(name => `rati media folder/Baby Rati photos/${name}`);

    const roleModelRatiImages = [
        'Rati as a role model and sister to all.jpg', 
        'Rati as a role model and sister to all2.jpg',
        'Rati as a role model and sister to all3.jpg',
        'Rati as a role model and sister to all4.jpg',
        'Rati as a role model and sister to all5.jpg'
    ].map(name => `rati media folder/Role model Rati/${name}`);

    // --- Initialize Sliders ---
    // The `url_for` part is handled by Flask when it serves the HTML.
    // Here, we assume the base path for static files is '/static/'.
    // So, in JS, the path will be relative to the static folder.
    // Flask's `url_for('static', filename='...')` generates this.

    function initializeSlider(sliderId, imagePaths) {
        const sliderElement = document.getElementById(sliderId);
        if (!sliderElement) {
            console.error(`Slider element with ID ${sliderId} not found.`);
            return;
        }

        const prevButton = sliderElement.querySelector('.prev');
        const nextButton = sliderElement.querySelector('.next');
        
        if (!prevButton || !nextButton) {
            console.error(`Slider buttons not found for ${sliderId}.`);
            return;
        }

        let currentImageIndex = 0;
        let imageElements = [];

        imagePaths.forEach((path, index) => {
            const img = document.createElement('img');
            // Construct the path as Flask would serve it from the static directory
            // The `static` part of the path is implicit if your Flask app serves the `static` folder at the root.
            // If script.js is in /static/ and images are in /static/rati media folder/...
            // then the relative path from script.js is 'rati media folder/...'
            // However, since url_for is used in HTML, we need to ensure these paths match what Flask serves.
            // For simplicity, we'll assume the path passed to this function is already correct
            // relative to the `static` folder root.
            img.src = `/static/${path}`; // Flask serves static files from /static route by default
            img.alt = `${sliderId} Image ${index + 1}`;
            img.classList.add('slider-image');
            if (index === 0) img.classList.add('active');
            sliderElement.insertBefore(img, nextButton); // Insert image before the next button
            imageElements.push(img);
        });
        
        if (imageElements.length === 0) {
            console.warn(`No images found for slider ${sliderId}. Check image paths.`);
            // Optionally display a message in the slider
            const noImageMsg = document.createElement('p');
            noImageMsg.textContent = "No images to display. Please check the image paths.";
            noImageMsg.classList.add('text-center', 'text-gray-400', 'p-4');
            sliderElement.insertBefore(noImageMsg, nextButton);
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
            return;
        }


        function showImage(index) {
            imageElements.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        prevButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + imageElements.length) % imageElements.length;
            showImage(currentImageIndex);
        });

        nextButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % imageElements.length;
            showImage(currentImageIndex);
        });
        
        // Auto-slide functionality (optional)
        // setInterval(() => {
        //     nextButton.click();
        // }, 5000); // Change image every 5 seconds
    }

    initializeSlider('babyRatiSlider', babyRatiImages);
    initializeSlider('roleModelRatiSlider', roleModelRatiImages);

    // --- Scroll Animations ---
    const animatedElements = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation to save resources
                // observer.unobserve(entry.target); 
            } else {
                // Optional: remove class to re-animate if scrolling up and down
                // entry.target.classList.remove('visible'); 
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});
