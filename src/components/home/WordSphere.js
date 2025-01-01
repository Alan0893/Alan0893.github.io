import React, { useEffect, useRef } from "react";

const WordSphere = ({ texts, counts, options }) => {
  // Reference to the canvas element
  const canvasRef = useRef(null);
  const initializedRef = useRef(false); // To track if the canvas has been initialized

  useEffect(() => {
    if (initializedRef.current) return; // Prevent reinitialization
    initializedRef.current = true;
    
    // Canvas setup
    const canvas = canvasRef.current;
    const π = Math.PI;  // Pi constant

    // Adjust canvas dimensions based on screen size
    let canvasWidth, canvasHeight, fontsize, rad;
    if (window.innerWidth <= 350) {
      canvasWidth = 200;
      canvasHeight = 200;
      fontsize = 8;
      rad = 85;
    } else if (window.innerWidth <= 480) {
      canvasWidth = 300;
      canvasHeight = 300;
      fontsize = 8;
      rad = 85;
    } else if (window.innerWidth <= 600) {
      canvasWidth = 450;
      canvasHeight = 450;
      fontsize = 12;
      rad = 150;
    } else if (window.innerWidth <= 768) {
      canvasWidth = 425;
      canvasHeight = 425;
      fontsize = 16;
      rad = 165;
    } else if (window.innerWidth <= 1024) {
      canvasWidth = 385;
      canvasHeight = 385;
      fontsize = 12;
      rad = 140;
    } else {
      canvasWidth = 385;
      canvasHeight = 385;
      fontsize = 12;
      rad = 140;
    }

    // Options for the sphere
    const {
      width = canvasWidth,
      height = canvasHeight,
      radius = rad,
      fontSize = fontsize,
      tilt = 0,
      initialVelocityX = 0.01, // Small base velocity for continuous spinning
      initialVelocityY = 0.01, // Small base velocity for continuous spinning
      initialRotationX = 0,
      initialRotationZ = 0,
    } = options;
    
    // Initial rotation and velocity
    let vx = initialVelocityX,
      vy = initialVelocityY;
    let rx = initialRotationX,
      rz = initialRotationZ;

    // Canvas setup
    const ctx = canvas.getContext("2d");
    ctx.textAlign = "center";

    // Hi-DPI support
    canvas.width = width * 2;
    canvas.height = height * 2;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(2, 2);

    // Mouse/touch interactions
    let clicked = false,
      lastX,
      lastY;

    // Mouse events
    canvas.addEventListener("mousedown", (event) => {
      clicked = true;
      lastX = event.screenX;
      lastY = event.screenY;
    });
    canvas.addEventListener("mousemove", (event) => {
      if (!clicked) return;
      const dx = event.screenX - lastX;
      const dy = event.screenY - lastY;
      lastX = event.screenX;
      lastY = event.screenY;

      // Rotation update
      rz += -dy * 0.01;
      rx += dx * 0.01;

      // Velocity update
      vx = dx * 0.1;
      vy = dy * 0.1;

      if (!looping) startLoop();
    });
    canvas.addEventListener("mouseup", () => (clicked = false));
    canvas.addEventListener("mouseleave", () => (clicked = false));

    // Mobile device touch
    canvas.addEventListener("touchstart", (event) => {
      clicked = true;
      lastX = event.touches[0].screenX;
      lastY = event.touches[0].screenY;
    });
    canvas.addEventListener("touchmove", (event) => {
      if (!clicked) return;
      const dx = event.touches[0].screenX - lastX;
      const dy = event.touches[0].screenY - lastY;
      lastX = event.touches[0].screenX;
      lastY = event.touches[0].screenY;

      // Rotation update
      rz += -dy * 0.01;
      rx += dx * 0.01;

      // Velocity update
      vx = dx * 0.1;
      vy = dy * 0.1;

      if (!looping) startLoop();
    });
    canvas.addEventListener("touchend", () => {
      clicked = false;
    });

    // Utility functions
    function rot(x, y, t) {
      return [
        x * Math.cos(t) - y * Math.sin(t),
        x * Math.sin(t) + y * Math.cos(t),
      ];
    }

    // Render function
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let ix = 0,
        iz = 0;
      for (const text of texts) {
        const degZ = (π / (counts.length - 1)) * iz;
        const degX = ((2 * π) / counts[iz]) * ix;

        let x = radius * Math.sin(degZ) * Math.cos(degX);
        let y = radius * Math.sin(degZ) * Math.sin(degX);
        let z = radius * Math.cos(degZ) + 8 * (ix % 2); // Adds randomness

        // Camera transform
        [y, z] = rot(y, z, tilt);
        [x, z] = rot(x, z, rz);
        [x, y] = rot(x, y, rx);

        // Convert to Cartesian and draw
        const alpha = 0.6 + 0.4 * (x / radius);
        const size = fontSize + 2 + 5 * (x / radius);
        ctx.fillStyle = "rgba(59, 190, 195, " + alpha + ")";
        ctx.font = `${size}px Arial`;
        ctx.fillText(text, y + width / 2, -z + height / 2);

        ix--;
        if (ix < 0) {
          iz++;
          ix = counts[iz] - 1;
        }
      }
    }

    // Animation loop
    let looping = false;
    function rendererLoop() {
      if (looping) window.requestAnimationFrame(rendererLoop);
      render();

      // Keep the sphere spinning with a base rotation
      rz += 0.02; // Add a small rotation increment to Z-axis
      rx += 0.02; // Add a small rotation increment to X-axis

      // Deceleration for user interactions
      if (vx > 0) vx = vx - 0.01;
      if (vy > 0) vy = vy - 0.01;
      if (vx < 0) vx = vx + 0.01;
      if (vy < 0) vy = vy + 0.01;
    }

    // Start the animation loop
    function startLoop() {
      looping = true;
      window.requestAnimationFrame(rendererLoop);
    }

    startLoop(); // Start the animation loop
  }, [texts, counts, options]); // Only run once when the component is mounted

  return <canvas ref={canvasRef}></canvas>;
};

export default WordSphere;