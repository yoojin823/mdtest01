window.addEventListener('scroll', () => {
    const section1 = document.getElementById('content01');
    const section2 = document.getElementById('content02');
    const section3 = document.getElementById('content03');
    const section4 = document.getElementById('content04');
    const section5 = document.getElementById('content05');
    
    const scrollPosition = window.scrollY;
    
    if (scrollPosition < section2.offsetTop) {
        section1.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    } else {
        section1.style.transform = `translateY(${section2.offsetTop * 0.5}px)`;
    }

    if (scrollPosition > section2.offsetTop && scrollPosition < section3.offsetTop) {
        section2.style.transform = `translateY(${(scrollPosition - section2.offsetTop) * 0.5}px)`;
    } else {
        section2.style.transform = `translateY(0)`;
    }

    if (scrollPosition > section3.offsetTop && scrollPosition < section4.offsetTop) {
        section2.style.transform = `translateY(${(scrollPosition - section2.offsetTop) * 0.5}px)`;
    } else {
        section2.style.transform = `translateY(0)`;
    }

    if (scrollPosition > section4.offsetTop && scrollPosition < section5.offsetTop) {
        section2.style.transform = `translateY(${(scrollPosition - section2.offsetTop) * 0.5}px)`;
    } else {
        section2.style.transform = `translateY(0)`;
    }

    if (scrollPosition > section5.offsetTop) {
        section3.style.transform = `translateY(${(scrollPosition - section3.offsetTop) * 0.5}px)`;
    } else {
        section3.style.transform = `translateY(0)`;
    }
});