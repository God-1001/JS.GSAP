var tl = gsap.timeline()
tl.from("#nav h2",{
   y:-50,
   opacity:0,
   delay:0.8,
   duration:1,
   stagger:0.3

})

tl.from("#main h1",{
   x:-500,
   opacity:0,
   duration:1,
   stagger:0.4
})

tl.from("img",{
   x:-100,
   opacity:0,
   duration:1,
   stagger:0.4
})