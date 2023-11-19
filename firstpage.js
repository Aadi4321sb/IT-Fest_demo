Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
gsap.from("#users", {
    stagger: .1,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
})
Shery.textAnimate("#join h1", {
    style: 1,
    y: 10,
    delay: 0.05,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
function navigateToPage(){ 
    window.location.href = '/Patient/Patient.html'; 
}