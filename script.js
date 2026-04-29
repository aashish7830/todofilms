


// <!-- menu bar -->

    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Hamburger animation (Optional)
        menuToggle.classList.toggle('is-active');
    });

    // Link click karne par menu close ho jaye
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });





// <!-- clients say -->
 
    let index = 0;
    const slider = document.getElementById('slider');

    function slide(direction) {
        const cards = document.querySelectorAll('.testimonial-card');
        const totalCards = cards.length;
        
        // Check screen size to decide how many cards are visible
        const visibleCards = window.innerWidth <= 768 ? 1 : 3;
        
        // Max index jahan tak slider ja sakta hai
        const maxIndex = totalCards - visibleCards;

        index += direction;

        // REPEAT LOGIC: 
        // 1. Agar first card se peeche jayein, toh last card par bhej do
        if (index < 0) {
            index = maxIndex;
        } 
        // 2. Agar last card se aage jayein, toh wapas 0 (first) par bhej do
        else if (index > maxIndex) {
            index = 0;
        }

        // Shift calculation
        // Mobile par 100% move hoga, Laptop par 33.33% move hoga
        const shift = index * (100 / visibleCards);
        slider.style.transform = `translateX(-${shift}%)`;

        const cardWidth = document.querySelector('.testimonial-card').offsetWidth;
      // Slide move logic
       container.style.transform = `translateX(-${index * cardWidth}px)`;

    }
            // Har 3 second mein apne aap agla card aayega

setInterval(() => {
    slide(1);
}, 3000);
