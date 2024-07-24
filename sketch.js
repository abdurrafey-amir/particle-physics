// constants
const G = 6.67e-11
const SCALE = 0.001

// particles array
let particles = []

document.addEventListener("click", function() {
    for (let i = 0; i < 10; i++) {
        let x = random(0, width)
        let y = random(0, height)
        let mass = random(2e8, 1e9)

        particles.push(new Particle(x, y, mass))
    }
});

function setup() {
    createCanvas(window.screen.width, window.screen.height)

    // creating particles
    for (let i = 0; i < 10; i++) {
        let x = random(0, width)
        let y = random(0, height)
        let mass = random(2e8, 1e9)

        particles.push(new Particle(x, y, mass))
    }
  }
  
  function draw() {
    background('#142F44')

    for (const particleA of particles)
        for (const particleB of particles)
            if (particleA !== particleB) particleA.physics(particleB)

    for (const particle of particles) {
        particle.update()
        particle.draw()
    }
  }