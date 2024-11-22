
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

    function updateCountdown() {
        const targetDate = new Date("January 20, 2025 00:00:00").getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerText =
                `${days} Days ${hours} hours ${minutes} minutes and ${seconds} seconds`;
        }
    }

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

