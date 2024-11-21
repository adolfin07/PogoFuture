
const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach((entry) => {
        console.log('entry');
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show');
        }
    });

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//ToLeft
const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInRight', 'show2');

        } else {
            entry.target.classList.remove('animate__animated', 'animate__fadeInRight', 'show2');
        }
    });
});
const toLeft = document.querySelectorAll('.toLeft');
toLeft.forEach((el) => observerLeft.observe(el));



//ToRight
const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInLeft', 'show2');

        } else {
            entry.target.classList.remove('animate__animated', 'animate__fadeInLeft', 'show2');
        }
    });
});


const ToRight = document.querySelectorAll('.toRight');
ToRight.forEach((el) => observerRight.observe(el));

