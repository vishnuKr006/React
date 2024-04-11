var typed = new Typed('#element', {
    strings: ['Web Developer.', 'Graphic Designer.', 'Software Developer.', 'Programmer.', 'Ethical Hacker.', 'Full Stack Developer.', 'UI &amp; UX Designer.', 'Software Engineer.', 'Code-Writter.', '&amp; Editor.'],
    typeSpeed: 70,
    BackSpeed: 100,
    loop: true
});

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalnavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalnavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        // for (let i = 0; i < totalSection; i++)
        // {
        //     allSection[i].classList.remove("back-section");
        // }
        removeBackSection();
        for (let j = 0; j < totalnavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                // ===================================================================================================================
                console.log(navList[i].querySelector("a"))
                console.log("back-section" + navList[j].querySelector("a"))
                // ===================================================================================================================
                // allSection[j].classList.add("back-section");
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
    console.log(a)
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    console.log(element.getAttribute("href").split("#"))
    const target = element.getAttribute("href").split("#")[1];
    console.log(target);
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for (let i = 0; i < totalnavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
    // console.log(element.getAttribute("href").split("#")[1])
}
document.querySelector(".hire-me").addEventListener("click", function () {
    // console.log(this)
    const sectionIndex = this.getAttribute("data-section-index");
    console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggle"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// =================== SMOOTH ANIMATION FOR WEBSITE BY USING OF : LOCOMOTIVE SCROLLING ===================
// function locomotiveJS() {
//     gsap.registerPlugin(ScrollTrigger);

//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("#portfolio-website"),
//         smooth: true
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);

//     // tell ScrollTrigger to use these proxy methods for the "#portfolio-website" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy("#portfolio-website", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//         pinType: document.querySelector("#portfolio-website").style.transform ? "transform" : "fixed"
//     });

//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();
// }

// locomotiveJS()

// var tl = gsap.timeline()
// tl.from("#loader h3", {
//     x: 100,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.3
// })

// tl.to("#loader h3", {
//     opacity: 0,
//     x: -100,
//     duration: 1,
//     stagger: 0.1
// })

// tl.to("#loader", {
//     opacity: 0
// })

// tl.to("#loader", {
//     display: "none"
// })

// tl.from("#page1-content h1 span", {
//     y: 100,
//     opacity: 0,
//     stagger: 0.1,
//     duration: 0.5
// })