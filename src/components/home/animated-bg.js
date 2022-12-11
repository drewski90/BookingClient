Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function Particle(x, y, hue) {
  this.radius = 1
  this.xVelocity = 1
  this.xWeight = .003
  this.yWeight = .001
  let color = 'hsl(' + hue + ', 100%, 50%)'

  Object.defineProperties(this, {
    x: {get: () => x, set: (newval) => x = newval},
    y: {get: () => y, set: (newval) => y = newval}
  })

  this.draw = (ctx, simplex) => {
    hue += .05
    x += this.xVelocity
    y += simplex.noise2D(
      x * this.xWeight, 
      y * this.yWeight
    )
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color
    ctx.globalAlpha = 1
    ctx.fill()
  }
}

export default function Animation(canvas) {
  let particles = []
  let simplex = new window.SimplexNoise()
  const ctx = canvas.getContext('2d')
  let width = canvas.parentNode.clientWidth
  let height = canvas.parentNode.clientHeight
  let hue = 260
  this.background = 'hsl(260, 100%,2%)'
  this.alpha = .03
  this.count = 0
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting
      if (intersecting) {
        if (!this.frame)
          this.frame = window.requestAnimationFrame(draw)
      } else
        this.stop()
    })
  })
  
  observer.observe(canvas)

  canvas.parentNode.onclick = () => {
    this.resetNoise()
  }

  this.stop = () => {
    if (this.frame)
      window.cancelAnimationFrame(this.frame)
    this.frame = null
  }

  this.resetNoise = () => simplex = new window.SimplexNoise()

  this.destroy = () => {
    this.stop()
    observer.unobserve(canvas)
    simplex = null
    particles = null
  }

  const fillBackground = () => {
    width = canvas.parentNode.clientWidth
    height = canvas.parentNode.clientHeight
    canvas.width = width
    canvas.height = height
    ctx.fillStyle = this.background;
    ctx.fillRect(0,0, width,height)
  }

  const makeParticle = () => {
    let x = Math.random() * canvas.width
    let y = Math.random() * canvas.height
    particles.push(new Particle(x, y, hue + Math.random() * 50))
  }

  const setup = () => {
    let max = canvas.width / 3
    for (let i=0; i < max; i++) makeParticle()
  }

  const draw = () => {
    if (!this.frame) return
    if (particles.length == 0)
      setup()
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.globalAlpha = 1;
    if (canvas.parentNode.clientWidth !== width ||
        canvas.parentNode.clientHeight !== height
      ) fillBackground()
    let max = Number(canvas.width / 3)
    for (let i=0; i < particles.length; i++) {
      let particle = particles[i];
      if (particle.x <= canvas.width)
        particle.draw(ctx, simplex)
      else {
        if (particles.length == max) {
          particle.x = particle.x - canvas.width;
          particle.y = Math.random() * canvas.height;
        } else {
          particles.splice(i, 1);
          i --;
        }
      }
    }
    if (particles.length < max) 
      makeParticle()
    this.count ++
    this.frame = window.requestAnimationFrame(draw)
  }
  fillBackground()
  this.frame = window.requestAnimationFrame(draw)
}