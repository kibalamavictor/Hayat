//   NAVBAR



const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });

        // Close mobile menu when clicking on a link
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('active');
                mobileMenuBtn.textContent = '☰';
            }
        });






        // ABOUT US


        // OUR CORE PROJECTS



function toggleAccordion(header) {
            const item = header.parentElement;
            const wasActive = item.classList.contains('active');
            
            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(accordionItem => {
                accordionItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!wasActive) {
                item.classList.add('active');
            }
        }

        // Initialize first accordion as open
        document.addEventListener('DOMContentLoaded', function() {
            const firstAccordion = document.querySelector('.accordion-item');
            if (firstAccordion) {
                firstAccordion.classList.add('active');
            }
        });





        // SCROLLCARDS

// AFTER


class TestimonialSlider {
            constructor(section) {
                this.section = section;
                this.wrapper = document.querySelector(`[data-section="${section}"].testimonials-wrapper`);
                this.scrollIndicator = document.querySelector(`[data-section="${section}"].scroll-indicator`);
                this.cards = this.wrapper.querySelectorAll('.testimonial-card, .yellow-testimonial-card');
                
                this.cardWidth = 400;
                this.gap = 30;
                this.scrollAmount = this.cardWidth + this.gap;
                
                this.init();
            }
            
            init() {
                this.setupNavigation();
                this.createScrollDots();
                this.setupEventListeners();
                this.setupTouchEvents();
            }
            
            setupNavigation() {
                const prevBtn = document.querySelector(`[data-section="${this.section}"][data-action="prev"]`);
                const nextBtn = document.querySelector(`[data-section="${this.section}"][data-action="next"]`);
                
                prevBtn.addEventListener('click', () => this.scrollPrev());
                nextBtn.addEventListener('click', () => this.scrollNext());
            }
            
            createScrollDots() {
                const totalCards = this.cards.length;
                const visibleCards = Math.floor(this.wrapper.offsetWidth / this.scrollAmount);
                const totalDots = Math.max(1, totalCards - visibleCards + 1);

                this.scrollIndicator.innerHTML = '';
                for (let i = 0; i < totalDots; i++) {
                    const dot = document.createElement('div');
                    dot.className = 'scroll-dot';
                    dot.addEventListener('click', () => this.scrollToPosition(i));
                    this.scrollIndicator.appendChild(dot);
                }
                this.updateActiveDot();
            }
            
            updateActiveDot() {
                const dots = this.scrollIndicator.querySelectorAll('.scroll-dot');
                const scrollLeft = this.wrapper.scrollLeft;
                const activeIndex = Math.round(scrollLeft / this.scrollAmount);
                
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === activeIndex);
                });
            }
            
            scrollToPosition(index) {
                const scrollLeft = index * this.scrollAmount;
                this.wrapper.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
            
            scrollPrev() {
                const currentScroll = this.wrapper.scrollLeft;
                const newScroll = Math.max(0, currentScroll - this.scrollAmount);
                this.wrapper.scrollTo({
                    left: newScroll,
                    behavior: 'smooth'
                });
            }
            
            scrollNext() {
                const currentScroll = this.wrapper.scrollLeft;
                const maxScroll = this.wrapper.scrollWidth - this.wrapper.offsetWidth;
                const newScroll = Math.min(maxScroll, currentScroll + this.scrollAmount);
                this.wrapper.scrollTo({
                    left: newScroll,
                    behavior: 'smooth'
                });
            }
            
            setupEventListeners() {
                this.wrapper.addEventListener('scroll', () => this.updateActiveDot());
                window.addEventListener('resize', () => this.createScrollDots());
            }
            
            setupTouchEvents() {
                let startX = 0;
                let scrollLeft = 0;
                let isDown = false;

                // Mouse events
                this.wrapper.addEventListener('mousedown', (e) => {
                    isDown = true;
                    startX = e.pageX - this.wrapper.offsetLeft;
                    scrollLeft = this.wrapper.scrollLeft;
                });

                this.wrapper.addEventListener('mouseleave', () => {
                    isDown = false;
                });

                this.wrapper.addEventListener('mouseup', () => {
                    isDown = false;
                });

                this.wrapper.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - this.wrapper.offsetLeft;
                    const walk = (x - startX) * 2;
                    this.wrapper.scrollLeft = scrollLeft - walk;
                });

                // Touch events
                this.wrapper.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].pageX - this.wrapper.offsetLeft;
                    scrollLeft = this.wrapper.scrollLeft;
                });

                this.wrapper.addEventListener('touchmove', (e) => {
                    const x = e.touches[0].pageX - this.wrapper.offsetLeft;
                    const walk = (x - startX) * 2;
                    this.wrapper.scrollLeft = scrollLeft - walk;
                });
            }
        }

        // Initialize both sliders when the page loads
        window.addEventListener('load', () => {
            new TestimonialSlider('yellow');
            new TestimonialSlider('gray');
        });







// LAST



// Immediately Invoked Function Expression (IIFE) to avoid global conflicts
        (function() {
            'use strict';
            
            // Wait for DOM to be fully loaded
            function initGrayTestimonials() {
                const wrapper = document.getElementById('grayTestimonialsWrapper');
                const prevBtn = document.getElementById('grayPrevBtn');
                const nextBtn = document.getElementById('grayNextBtn');
                const scrollIndicator = document.getElementById('grayScrollIndicator');
                
                // Check if all elements exist
                if (!wrapper || !prevBtn || !nextBtn || !scrollIndicator) {
                    console.error('Gray testimonials: Required elements not found');
                    return;
                }
                
                const cards = wrapper.querySelectorAll('.testimonial-card');
                
                // Calculate scroll amount based on card width + gap
                const cardWidth = 400;
                const gap = 30;
                const scrollAmount = cardWidth + gap;

                // Create scroll indicator dots
                function createScrollDots() {
                    const totalCards = cards.length;
                    const visibleCards = Math.floor(wrapper.offsetWidth / scrollAmount);
                    const totalDots = Math.max(1, totalCards - visibleCards + 1);

                    scrollIndicator.innerHTML = '';
                    for (let i = 0; i < totalDots; i++) {
                        const dot = document.createElement('div');
                        dot.className = 'scroll-dot';
                        dot.addEventListener('click', () => scrollToPosition(i));
                        scrollIndicator.appendChild(dot);
                    }
                    updateActiveDot();
                }

                // Update active dot based on scroll position
                function updateActiveDot() {
                    const dots = scrollIndicator.querySelectorAll('.scroll-dot');
                    const scrollLeft = wrapper.scrollLeft;
                    const activeIndex = Math.round(scrollLeft / scrollAmount);
                    
                    dots.forEach((dot, index) => {
                        dot.classList.toggle('active', index === activeIndex);
                    });
                }

                // Scroll to specific position
                function scrollToPosition(index) {
                    const scrollLeft = index * scrollAmount;
                    wrapper.scrollTo({
                        left: scrollLeft,
                        behavior: 'smooth'
                    });
                }

                // Navigation button functionality
                prevBtn.addEventListener('click', function() {
                    const currentScroll = wrapper.scrollLeft;
                    const newScroll = Math.max(0, currentScroll - scrollAmount);
                    wrapper.scrollTo({
                        left: newScroll,
                        behavior: 'smooth'
                    });
                });

                nextBtn.addEventListener('click', function() {
                    const currentScroll = wrapper.scrollLeft;
                    const maxScroll = wrapper.scrollWidth - wrapper.offsetWidth;
                    const newScroll = Math.min(maxScroll, currentScroll + scrollAmount);
                    wrapper.scrollTo({
                        left: newScroll,
                        behavior: 'smooth'
                    });
                });

                // Update dots on scroll
                wrapper.addEventListener('scroll', updateActiveDot);

                // Initialize on load and resize
                window.addEventListener('resize', createScrollDots);

                // Touch/swipe support for mobile
                let startX = 0;
                let scrollLeft = 0;
                let isDown = false;

                wrapper.addEventListener('mousedown', function(e) {
                    isDown = true;
                    startX = e.pageX - wrapper.offsetLeft;
                    scrollLeft = wrapper.scrollLeft;
                });

                wrapper.addEventListener('mouseleave', function() {
                    isDown = false;
                });

                wrapper.addEventListener('mouseup', function() {
                    isDown = false;
                });

                wrapper.addEventListener('mousemove', function(e) {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - wrapper.offsetLeft;
                    const walk = (x - startX) * 2;
                    wrapper.scrollLeft = scrollLeft - walk;
                });

                // Touch events for mobile
                wrapper.addEventListener('touchstart', function(e) {
                    startX = e.touches[0].pageX - wrapper.offsetLeft;
                    scrollLeft = wrapper.scrollLeft;
                });

                wrapper.addEventListener('touchmove', function(e) {
                    const x = e.touches[0].pageX - wrapper.offsetLeft;
                    const walk = (x - startX) * 2;
                    wrapper.scrollLeft = scrollLeft - walk;
                });
                
                // Initial setup
                createScrollDots();
            }

            // Initialize when DOM is ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initGrayTestimonials);
            } else {
                // DOM is already ready
                initGrayTestimonials();
            }
        })();









        // WHY WE EXIST



function scrollSections(direction) {
    const container = document.getElementById('scrollContainer');
    const scrollAmount = 800; // Width of one section
    
    if (direction === 'left') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Hide/show scroll indicators based on scroll position
document.getElementById('scrollContainer').addEventListener('scroll', function() {
    const container = this;
    const leftButton = document.querySelector('.section-scroll-left');
    const rightButton = document.querySelector('.section-scroll-right');
    
    // Hide left button if at the beginning
    if (container.scrollLeft <= 0) {
        leftButton.style.opacity = '0.3';
        leftButton.style.pointerEvents = 'none';
    } else {
        leftButton.style.opacity = '1';
        leftButton.style.pointerEvents = 'auto';
    }
    
    // Hide right button if at the end
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        rightButton.style.opacity = '0.3';
        rightButton.style.pointerEvents = 'none';
    } else {
        rightButton.style.opacity = '1';
        rightButton.style.pointerEvents = 'auto';
    }
});

// Initialize button states
window.addEventListener('load', function() {
    const container = document.getElementById('scrollContainer');
    const leftButton = document.querySelector('.section-scroll-left');
    
    // Initially hide left button since we start at the beginning
    leftButton.style.opacity = '0.3';
    leftButton.style.pointerEvents = 'none';
});

// Add touch/swipe support for mobile
let startX = 0;
let scrollLeft = 0;

document.getElementById('scrollContainer').addEventListener('touchstart', function(e) {
    startX = e.touches[0].pageX - this.offsetLeft;
    scrollLeft = this.scrollLeft;
});

document.getElementById('scrollContainer').addEventListener('touchmove', function(e) {
    if (!startX) return;
    
    const x = e.touches[0].pageX - this.offsetLeft;
    const walk = (x - startX) * 2;
    this.scrollLeft = scrollLeft - walk;
});

document.getElementById('scrollContainer').addEventListener('touchend', function() {
    startX = 0;
});






// function sendEmail() {
//     const templateParams = {
//         fullName: document.querySelector("#fullName").value,
//         email: document.querySelector("#email").value,
//         phone: document.querySelector("#phone").value,
//         subject: document.querySelector("#subject").value,
//         message: document.querySelector("#message").value,
//     };

//     emailjs.send(service_fkilx2w, template_v4d5fl5, templateParams).then(
//         ()=> alert("Email Sent!").catch(()=>alert("Email not sent!!"))
//     )
// }


