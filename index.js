const tl = gsap.timeline();
tl.to('#apple-logo', {
  opacity: 1,
  delay: 1,
  duration: 1,
  scale: 2,
});

tl.to('#apple-logo', {
  opacity: 0,
  duration: 2,
});

tl.to('.heding', {
  opacity: 1,
  scale: 2,
  duration: 2,
});
tl.to('.heding', {
  opacity: 0,
  scale: 1,
  duration: 2,
});

tl.to('#root', {
  y: '-100%',
  duration: 2,
  ease: 'sine.out',
});
tl.from('header', {
  opacity: 0,
  scaleX: 2,
  duration: 1,
  ease: 'circ.out',
});
tl.from('.hero', {
  opacity: 0,
  scaleX: 2.5,
  duration: 1,
  ease: 'slow(0.7,0.7,false)',
});
tl.from('nav a', {
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: 'power3.out',
});

tl.from('.hero h1', {
  opacity: 0,
  y: -5,
  duration: 1,
  ease: 'power3.out',
});
