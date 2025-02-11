document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("name");
    const titleElement = document.getElementById("title");
    const cvButton = document.getElementById("cv-button");
    const backToTopButton = document.getElementById("back-to-top");
    const nameText = nameElement.textContent;
    nameElement.textContent = "";
    let i = 0;
    function typeWriter() {
        if (i < nameText.length) {
            nameElement.textContent += nameText.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        } else {
            titleElement.classList.remove("hidden");
            cvButton.classList.remove("hidden");
        }
    }
    typeWriter();

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollPosition < windowHeight) {
            document.body.style.backgroundColor = '#872341';
        } else if (scrollPosition < windowHeight * 2) {
            document.body.style.backgroundColor = '#872341';
        } else if (scrollPosition < windowHeight * 3) {
            document.body.style.backgroundColor = '#BE3144';
        } else {
            document.body.style.backgroundColor = '#E17564';
        }

        if (scrollPosition > windowHeight) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.carousel-button.left').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarousel();
    });

    document.querySelector('.carousel-button.right').addEventListener('click', function() {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});