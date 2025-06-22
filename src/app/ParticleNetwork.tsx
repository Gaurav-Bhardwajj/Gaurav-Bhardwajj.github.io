"use client";
import { useEffect, useRef } from "react";

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).p5) {
      initializeSketch();
    } else {
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
        let mouseLastPosition: any;
        let mouseStillnessTimer = 0;
        const mouseStillnessThreshold = 100;
        const particles: any[] = [];

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
            this.applyMouseForce();
            this.velocity.add(this.acceleration);
            this.velocity.limit(this.maxSpeed);
            this.position.add(this.velocity);
            this.acceleration.mult(0);
            this.detectEdges();
          }

          applyMouseForce() {
            const mouse = p.createVector(p.mouseX, p.mouseY);
            const force = p.createVector(0, 0);
            force.x = mouse.x - this.position.x;
            force.y = mouse.y - this.position.y;
            const distance = force.mag();

            if (mouseLastPosition && mouse.x === mouseLastPosition.x && mouse.y === mouseLastPosition.y) {
              mouseStillnessTimer++;
            } else {
              mouseStillnessTimer = 0;
              mouseLastPosition = p.createVector(mouse.x, mouse.y);
            }

            const decayFactor = mouseStillnessTimer > mouseStillnessThreshold ? 0 : 1 - mouseStillnessTimer / mouseStillnessThreshold;
            
            if (distance < mouseDistance && distance > 0) {
              force.normalize();
              force.mult(mouseForce * decayFactor * (1 - distance / mouseDistance));
              this.acceleration.add(force);
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
            for (const other of particles) {
              const d = p.dist(this.position.x, this.position.y, other.position.x, other.position.y);
              if (d < maxDistance) {
                p.stroke(255, p.map(d, 0, maxDistance, 100, 0));
                p.line(this.position.x, this.position.y, other.position.x, other.position.y);
              }
            }
            
            const mouseDist = p.dist(this.position.x, this.position.y, p.mouseX, p.mouseY);
            if (mouseDist < mouseDistance && mouseDist > 0) {
              p.stroke(0, 255, 255, p.map(mouseDist, 0, mouseDistance, 200, 0));
              p.line(this.position.x, this.position.y, p.mouseX, p.mouseY);
            }
          }

          drawParticle() {
            const mouseDist = p.dist(this.position.x, this.position.y, p.mouseX, p.mouseY);
            
            if (mouseDist < mouseDistance) {
              const intensity = p.map(mouseDist, 0, mouseDistance, 255, 100);
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
          mouseLastPosition = p.createVector(p.mouseX, p.mouseY);
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
