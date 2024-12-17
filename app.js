const heroSectionAnimation = () => {
    const tl = gsap.timeline();
    tl.from(".hero-content :is(p, h1, .hero-sec-inp) , .hero-img", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.5,
    });
}

const page2Animation = () => {
    const tl = gsap.timeline();
    tl.from(".page-2 .boxes , .page-2 .title , .page-2 .head", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".page-2-row",
            scroller: "body",
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
        }
    });
}

const projectsAnimation = () => {
    const tl = gsap.timeline();
    tl.from(".projects-sec .title , .projects-sec .head , .projects-col", {
        opacity: 0,
        y: 100,
        duration: 3,
        stagger: 3,
        scrollTrigger: {
            trigger: ".projects-sec",
            scroller: "body",
            start: "top 70%",
            end: "top 0%",
            scrub: 1,
        }
    });
}
const aboutUsAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-us-content",
            scroller: "body",
            start: "top 70%",
            end: "top 20%"
        }
    });
    tl.from(".about-us-content :is(h3, p, button, .row>div)", {
        opacity: 0,
        x: -20,
        stagger: .3,
    });
    tl.from(".about-us-img", {
        opacity: 0,
        x: 200,
        duration: 1,
    }, "-=1");
}

const subscribeAnimation = () => {
    const tl = gsap.timeline()
    tl.from(".subscribe-sec :is(.head, .para, .inp-container)", {
        x: 200,
        delay: 1,
        duration: .4,
        opacity: 0,
        stagger: .4
    });
}
aboutUsAnimation();
heroSectionAnimation();
page2Animation();
projectsAnimation();
subscribeAnimation();