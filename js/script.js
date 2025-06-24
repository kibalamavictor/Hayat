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



         function scrollProjects(direction) {
            const grid = document.querySelector('.projects-grid');
            const cardWidth = 330; // Approximate width of card + gap
            
            if (direction === 'left') {
                grid.scrollBy({
                    left: -cardWidth,
                    behavior: 'smooth'
                });
            } else {
                grid.scrollBy({
                    left: cardWidth,
                    behavior: 'smooth'
                });
            }
        }

        // Add smooth scrolling for horizontal scroll on mobile
        const projectsGrid = document.querySelector('.projects-grid');
        
        // Optional: Add touch/swipe support for mobile
        // let startX;
        // let scrollLeft;

        projectsGrid.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX;
            scrollLeft = projectsGrid.scrollLeft;
        });

        projectsGrid.addEventListener('touchmove', (e) => {
            if (!startX) return;
            
            const x = e.touches[0].pageX;
            const walk = (startX - x) * 2;
            projectsGrid.scrollLeft = scrollLeft + walk;
        });

        projectsGrid.addEventListener('touchend', () => {
            startX = null;
        });






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


       const wrapper = document.getElementById('testimonialsWrapper');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const scrollIndicator = document.getElementById('scrollIndicator');
        const cards = document.querySelectorAll('.testimonial-card');

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
        prevBtn.addEventListener('click', () => {
            const currentScroll = wrapper.scrollLeft;
            const newScroll = Math.max(0, currentScroll - scrollAmount);
            wrapper.scrollTo({
                left: newScroll,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
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
        window.addEventListener('load', createScrollDots);
        window.addEventListener('resize', createScrollDots);

        // Touch/swipe support for mobile
        // let startX = 0;
        // let scrollLeft = 0;
        let isDown = false;

        wrapper.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - wrapper.offsetLeft;
            scrollLeft = wrapper.scrollLeft;
        });

        wrapper.addEventListener('mouseleave', () => {
            isDown = false;
        });

        wrapper.addEventListener('mouseup', () => {
            isDown = false;
        });

        wrapper.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - wrapper.offsetLeft;
            const walk = (x - startX) * 2;
            wrapper.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        wrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - wrapper.offsetLeft;
            scrollLeft = wrapper.scrollLeft;
        });

        wrapper.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - wrapper.offsetLeft;
            const walk = (x - startX) * 2;
            wrapper.scrollLeft = scrollLeft - walk;
        });

