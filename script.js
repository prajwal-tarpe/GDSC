gsap.from("#img1",{
    delay: 0.4,
    opacity: 0,
    duration:1,
    y:60
})
gsap.from("#boxMain h1,h5",{
    delay: 0.4,
    opacity: 0,
    duration:1,
})
burger = document.querySelector('.burger')
nav = document.querySelector('.nav')
part1 = document.querySelector('.part1')
part2 = document.querySelector('.part2')
burger.addEventListener('click', ()=>{
    part2.classList.toggle('vClassResp');
    part1.classList.toggle('vClassResp');
    nav.classList.toggle('hClassResp');
})