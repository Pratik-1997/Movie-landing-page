// Give title
document.title = "Avatar - Way of Water"

// Gsap scripts
    // Overlay
    gsap.to('.layer-1', { y: '-100vh' , delay : .5 , zIndex: 0});
    gsap.to('.layer-2', { y: '-100vh' , delay : .7 , zIndex: 0});
    gsap.to('.layer-3', { y: '-100vh' , delay : .9 , zIndex: 0});
    gsap.to('.overlay', { y: '-100vh' , delay : 1 });

    // Navigations
    gsap.fromTo(".movie-logo img", {y:-100}, {y:0, delay: 1 , duration: .5});
    gsap.fromTo(".navigations ul li:nth-child(1)", {y:-150 , rotate: 90 }, {y:0, delay: 1.2 , duration: 1 , rotate: 0});
    gsap.fromTo(".navigations ul li:nth-child(2)", {y:-150 , rotate: -90}, {y:0, delay: 1.4 , duration: 1 , rotate: 0});
    gsap.fromTo(".navigations ul li:nth-child(3)", {y:-150 , rotate: 90}, {y:0, delay: 1.6 , duration: 1 , rotate: 0});

    // Social icons
    gsap.fromTo(".social-sticky-right-icons .fb-icon", {x:60}, {x:0, delay: 2 , duration: 0.5 });
    gsap.fromTo(".social-sticky-right-icons .insta-icon", {x:60}, {x:0, delay: 2.1 , ease: "circ.out" , duration: 1});
    gsap.fromTo(".social-sticky-right-icons .twitter-icon", {x:60}, {x:0, delay: 2.2 , ease: "circ.out" , duration: 1});
    gsap.fromTo(".social-sticky-right-icons .yt-icon", {x:60}, {x:0, delay: 2.3 , ease: "circ.out" , duration: 1});

