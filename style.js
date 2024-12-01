// Hamburger menu toggle
let ham = document.getElementById("ham");
let nav = document.getElementsByClassName("nav")[0];
let navlist_second = document.getElementsByClassName("nav-list-second")[0];

ham.addEventListener('click', () => {
    nav.classList.toggle("active-nav");
    navlist_second.classList.toggle("active-nav-list-second");
    if (nav.classList.contains("active-nav")) {
        ham.src = "cross.svg"; // Replace with the actual path to your 'cross' icon
    } else {
        ham.src = "menu.svg"; // Replace with the actual path to your 'menu' icon
    }
});

// Typing animation
var typed = new Typed('#profession', {
    strings: ['web developer', 'software developer', 'editor'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

// Progress bar animations
let htmlprog = document.getElementsByClassName("html-prog")[0];
let cssprog = document.getElementsByClassName("css-prog")[0];
let jsprog = document.getElementsByClassName("js-prog")[0];

let htmlvalue = document.getElementsByClassName("html-value")[0];
let cssvalue = document.getElementsByClassName("css-value")[0];
let jsvalue = document.getElementsByClassName("js-value")[0];

let h = 0, c = 0, j = 0;

// HTML Progress
let html = setInterval(() => {
    h++;
    htmlvalue.innerHTML = `${h}%`;
    htmlprog.style.background = `conic-gradient(rgb(0, 213, 255) ${3.6 * h}deg, rgb(24, 31, 36) 0deg)`;
    if (h === 90) clearInterval(html);
}, 10);

// CSS Progress
let css = setInterval(() => {
    c++;
    cssvalue.innerHTML = `${c}%`;
    cssprog.style.background = `conic-gradient(rgb(0, 213, 255) ${3.6 * c}deg, rgb(24, 31, 36) 0deg)`;
    if (c === 80) 
        clearInterval(css);
}, 10);

// JS Progress
let js = setInterval(() => {
    j++;
    jsvalue.innerHTML = `${j}%`;
    jsprog.style.background = `conic-gradient(rgb(0, 213, 255) ${3.6 * j}deg, rgb(24, 31, 36) 0deg)`;
    if (j === 70) 
        clearInterval(js);
}, 10);
let reactprog=document.getElementsByClassName("inner-react-prog")[0]
let javaprog=document.getElementsByClassName("inner-java-prog")[0]
let dsaprog=document.getElementsByClassName("inner-dsa-prog")[0]
let roboticsprog=document.getElementsByClassName("inner-robotics-prog")[0]
let cloudprog=document.getElementsByClassName("inner-cloud-prog")[0]

let reactvalue=document.getElementsByClassName("react-value")[0]
let javavalue=document.getElementsByClassName("java-value")[0]
let dsavalue=document.getElementsByClassName("dsa-value")[0]
let roboticsvalue=document.getElementsByClassName("robotics-value")[0]
let cloudvalue=document.getElementsByClassName("cloud-value")[0]

let r=0;
let ja=0;
let d=0;
let ro=0;
let cl=0;
let react = setInterval(() => {
    r++;
    reactvalue.innerHTML = `${r}%`;
    reactprog.style.width= `${(60*(1/100))*r}vw`;
    if (r=== 70) clearInterval(react);
}, 10);

let java = setInterval(() => {
    ja++;
    javavalue.innerHTML = `${ja}%`;
    javaprog.style.width= `${(60*(1/100))*ja}vw`;
    if (ja=== 85) clearInterval(java);
}, 10);

let dsa= setInterval(() => {
    d++;
    dsavalue.innerHTML = `${d}%`;
    dsaprog.style.width= `${(60*(1/100))*d}vw`;
    if (d=== 80) clearInterval(dsa);
}, 10);

let robotics= setInterval(() => {
    ro++;
    roboticsvalue.innerHTML = `${ro}%`;
    roboticsprog.style.width= `${(60*(1/100))*ro}vw`;
    if (ro=== 80) clearInterval(robotics);
}, 10);

let cloud= setInterval(() => {
    cl++;
    cloudvalue.innerHTML = `${ro}%`;
    cloudprog.style.width= `${(60*(1/100))*ro}vw`;
    if (ro=== 60) clearInterval(cloud);
}, 10);
let tl=gsap.timeline();


tl.from(".nav",{
    x:-200,
    opactity:0,
    duration:0.5,
})
tl.from(".left-nav",{
    y:-100,
    opactity:0,
    duration:0.5,
})
tl.from(".list-items",{
    y:-60,
    opactity:0,
    duration:0.5,
    stagger:1
})
let tl2=gsap.timeline()
tl2.from(".line",{
    x:-80,
    opactity:0,
    duration:0.5,
    stagger:1

})
tl2.from("#btn1",{
    x:-80,
    opactity:0,
    duration:0.5,
    stagger:1

})
gsap.from("#logo",{
    x:80,
    opactity:0,
    duration:0.5,
    

})
let tl3=gsap.timeline()
tl3.from(".handing",{
    x:-200,
    opactity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".handing",
        scroller:"body",
        
        start:"top 75%",
        end:"top 55%",
        scrub:2
    }

})
tl3.from(".box",{
    x:200,
    opactity:0,
    duration:0.5,
    stagger:1,
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        
        start:"top 80%",
        end:"top 60%",
        scrub:2
    }

})
tl3.from(".about-details",{
    y:80,
    opactity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".about-details",
        scroller:"body",
        
        start:"top 80%",
        end:"top 60%",
        scrub:2,
    }

})
let tl4=gsap.timeline();
tl4.from(".heading-skill",{
    x:-200,
    opactity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".heading-skill",
        scroller:"body",
        
        start:"top 80%",
        end:"top 60%",
        scrub:2,
    }
})
tl4.from(".prog",{
x:200,
opactity:0,
rotate:360,
duration:0.5,
stagger:1,
scrollTrigger:{
    trigger:".prog",
    scroller:"body",
    
    start:"top 80%",
    end:"top 60%",
    scrub:2
}

})
tl4.from(".linear-prog",{
    x:-200,
    opactity:0,
    
    duration:0.5,
    stagger:1,
    scrollTrigger:{
        trigger:".linear-prog",
        scroller:"body",
        
        start:"top 80%",
        end:"top 60%",
        scrub:2
    }
    
    })
    tl4.from(".skill-contain",{
        x:-200,
        opactity:0,
        
        duration:0.5,
        stagger:1,
        scrollTrigger:{
            trigger:".skill-contain",
            scroller:"body",
            
            start:"top 80%",
            end:"top 60%",
            scrub:2
        }
        
        })
        let tl5=gsap.timeline()
        
        tl5.from(".right-contain",{
            x:400,
            duration:0.5,
            scrollTrigger:{
                trigger:".right-contain",
                scroller:"body",
            
                start:"top 80%",
                end:"top 60%",
                scrub:2
            }
            
            })
            tl5.from(".left-contain",{
                x:-400,
                duration:0.5,
                scrollTrigger:{
                    trigger:".left-contain",
                    scroller:"body",
                    
                    start:"top 80%",
                    end:"top 60%",
                    scrub:2
                }
                
                })

                