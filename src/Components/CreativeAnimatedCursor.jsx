import React, { useState, useEffect } from "react";

const CreativeAnimatedCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState([]);
  const [trailPoints, setTrailPoints] = useState([]);

  // Mouse position tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Add trail point
      setTrailPoints((prev) => [
        ...prev.slice(-8), // Keep only last 8 points
        { x: e.clientX, y: e.clientY, id: Date.now() },
      ]);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      // Create click particles
      const newParticles = Array.from({ length: 6 }, (_, i) => ({
        id: Date.now() + i,
        x: mousePos.x + (Math.random() - 0.5) * 40,
        y: mousePos.y + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        life: 1,
        size: Math.random() * 4 + 2,
        color: `hsl(${230 + Math.random() * 60}, 70%, 60%)`,
      }));
      setParticles((prev) => [...prev, ...newParticles]);
    };

    const handleMouseUp = () => setIsClicking(false);

    // Check for hoverable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("cursor-pointer") ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Particle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - 0.02,
            vy: particle.vy + 0.1, // gravity
          }))
          .filter((particle) => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // Auto-remove old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrailPoints((prev) => {
        const now = Date.now();
        return prev.filter((point) => now - point.id < 800); // Remove after 800ms
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="cursor-container"
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Trail effect */}
      {trailPoints.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            position: "absolute",
            left: point.x - 2,
            top: point.y - 2,
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: `rgba(99, 102, 241, ${
              0.6 * (index / trailPoints.length)
            })`,
            transform: `scale(${0.3 + 0.7 * (index / trailPoints.length)})`,
            transition: "all 0.1s ease-out",
          }}
        />
      ))}

      {/* Simple cursor dot */}
      <div
        className="cursor-dot"
        style={{
          position: "absolute",
          left: mousePos.x - 4,
          top: mousePos.y - 4,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "rgba(99, 102, 241, 0.8)",
          transform: `scale(${isClicking ? 0.5 : 1})`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Hover ring */}
      {isHovering && (
        <div
          style={{
            position: "absolute",
            left: mousePos.x - 20,
            top: mousePos.y - 20,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "2px solid rgba(147, 51, 234, 0.4)",
            transform: "scale(1)",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
      )}

      {/* Click particles */}
      {/* {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: "absolute",
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: "50%",
            background: particle.color,
            opacity: particle.life,
            transform: `scale(${particle.life})`,
            pointerEvents: "none",
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))} */}

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.6);
          }
        }

        @keyframes rotate {
          from {
            transform: translateX(-50%) rotate(0deg);
          }
          to {
            transform: translateX(-50%) rotate(360deg);
          }
        }

        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
          }
          100% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.8);
          }
        }

        .cursor-container * {
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default CreativeAnimatedCursor;