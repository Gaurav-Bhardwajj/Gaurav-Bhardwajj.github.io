"use client";
import { useEffect, useRef } from "react";

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<any>(null);

  useEffect(() => {
    // Check if p5 is already loaded
    if (typeof window !== 'undefined' && (window as any).p5) {
      initializeSketch();
    } else {
      // Load p5.js script
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js";
      script.async = true;
      script.onload = () => {
        initializeSketch();
      };
      document.head.appendChild(script);
      
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
        if (p5Instance.current) {
          p5Instance.current.remove();
        }
      };
    }

    function initializeSketch() {
      if (!canvasRef.current) return;

      const sketch = (p: any) => {
        const numParticles = 60;
        const maxDistance = 120;
        const mouseDistance = 150;
        const mouseForce = 0.05;
        let particles: any[] = [];

        class Particle {
          position: any;
          velocity: any;
          acceleration: any;
          maxSpeed: number;

          constructor() {
            this.position = p.createVector(p.random(p.width), p.random(p.height));
            this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
            this.acceleration = p.createVector(0, 0);
            this.maxSpeed = 2;
          }

          update() {
            // Apply mouse attraction
            this.applyMouseForce();
            
            this.velocity.add(this.acceleration);
            this.velocity.limit(this.maxSpeed);
            this.position.add(this.velocity);
            this.acceleration.mult(0); // Reset acceleration
            this.detectEdges();
          }

          applyMouseForce() {
            let mouse = p.createVector(p.mouseX, p.mouseY);
            let force = p.createVector(0, 0);
            force.x = mouse.x - this.position.x;
            force.y = mouse.y - this.position.y;
            let distance = force.mag();
            // Instead of attraction, apply gentle repulsion or jitter if too close to mouse
            if (distance < mouseDistance && distance > 0) {
              // Repel from mouse
              force.normalize();
              force.mult(-mouseForce * (1 - distance / mouseDistance));
              this.acceleration.add(force);
              // Add a small random jitter for more natural movement
              this.acceleration.add(p.createVector(p.random(-0.03, 0.03), p.random(-0.03, 0.03)));
            } else {
              // Always add a small random walk for natural drift
              this.acceleration.add(p.createVector(p.random(-0.01, 0.01), p.random(-0.01, 0.01)));
            }
          }

          detectEdges() {
            if (this.position.x < 0 || this.position.x > p.width) {
              this.velocity.x *= -1;
            }
            if (this.position.y < 0 || this.position.y > p.height) {
              this.velocity.y *= -1;
            }
          }

          drawLines(particles: any[]) {
            // Draw lines to other particles
            for (let other of particles) {
              let d = p.dist(this.position.x, this.position.y, other.position.x, other.position.y);
              if (d < maxDistance) {
                p.stroke(255, p.map(d, 0, maxDistance, 100, 0));
                p.line(this.position.x, this.position.y, other.position.x, other.position.y);
              }
            }
            
            // Draw line to mouse if close enough
            let mouseDist = p.dist(this.position.x, this.position.y, p.mouseX, p.mouseY);
            if (mouseDist < mouseDistance && mouseDist > 0) {
              p.stroke(0, 255, 255, p.map(mouseDist, 0, mouseDistance, 200, 0));
              p.line(this.position.x, this.position.y, p.mouseX, p.mouseY);
            }
          }

          drawParticle() {
            let mouseDist = p.dist(this.position.x, this.position.y, p.mouseX, p.mouseY);
            
            // Change particle size and color based on mouse proximity
            if (mouseDist < mouseDistance) {
              let intensity = p.map(mouseDist, 0, mouseDistance, 255, 100);
              p.fill(0, 255, 255, intensity);
              p.noStroke();
              p.ellipse(this.position.x, this.position.y, 5, 5);
            } else {
              p.fill(255);
              p.noStroke();
              p.ellipse(this.position.x, this.position.y, 3, 3);
            }
          }
        }

        p.setup = () => {
          p.createCanvas(p.windowWidth, p.windowHeight);
          for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
          }
        };

        p.draw = () => {
          p.background(20, 20, 30, 50);

          particles.forEach((particle) => {
            particle.update();
            particle.drawLines(particles);
            particle.drawParticle();
          });
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
      };

      p5Instance.current = new (window as any).p5(sketch, canvasRef.current);
    }

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, []);

  return (
    <div 
      ref={canvasRef} 
      className="fixed inset-0 z-0"
      style={{ width: "100vw", height: "100vh" }} 
    />
  );
}
