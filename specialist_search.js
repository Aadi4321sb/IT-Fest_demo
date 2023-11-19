gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
})
Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    window.addEventListener('scroll', function() {
        scrollIndicator.style.opacity = '0';
    });
});