let prevScrollPosition = window.scrollY;
const navbar = document.querySelector('.navbar');
const writeToMeBtn = document.querySelector('.write-to-me-btn');
let isNavbarVisible = true;

navbar.style.transition = 'top 0.3s';

if (window.innerWidth <= 650) {
    writeToMeBtn.style.display = 'none';
}

function handleScroll() {
    const currentScrollPosition = window.scrollY;

    if (prevScrollPosition > currentScrollPosition) {
        navbar.style.top = '0';
        isNavbarVisible = true;
    } else {
        navbar.style.top = `-${navbar.offsetHeight}px`;
        isNavbarVisible = false;
    }

    prevScrollPosition = currentScrollPosition;

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

    if (scrollTop === 0) {
        document.body.classList.add('scroll-top');
        document.body.classList.remove('scroll-bottom');
    } else if (scrollTop + clientHeight >= scrollHeight) {
        document.body.classList.add('scroll-bottom');
        document.body.classList.remove('scroll-top');
    } else {
        document.body.classList.remove('scroll-top');
        document.body.classList.remove('scroll-bottom');
    }
}

function handleHashChange() {
    if (isNavbarVisible) {
        navbar.style.top = `-${navbar.offsetHeight}px`;
        isNavbarVisible = false;
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('hashchange', handleHashChange);
window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    const targetElement = document.querySelector(hash);

    if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollPosition = offsetTop - (windowHeight / 2) + (targetElement.offsetHeight / 2);

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    }
});
window.addEventListener('resize', function () {
    if (window.innerWidth <= 650) {
        writeToMeBtn.style.display = 'none';
    } else {
        writeToMeBtn.style.display = 'block';
    }
});