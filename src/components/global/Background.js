import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Gradient from "./Gradient";
import {
  BackgroundContainer,
  Mouse,
  ChildWrapper,
  ChildWrapper2,
  BackgroundChild,
} from "../../styles/styles";

import SnowflakeSVG from "../svg/Snowflake";

const specialDays = {
  christmas: { month: 11, day: 25, icon: <SnowflakeSVG /> }, // December 25
};

const Background = ({ children }) => {
  const [mouseStyle, setMouseStyle] = useState(null);
  const [isMouseTrackingEnabled, setIsMouseTrackingEnabled] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMouseTrackingEnabled(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove = (event) => {
    if (isMouseTrackingEnabled) {
      const { clientX, clientY } = event;
      const { left, top, width, height } =
        event.currentTarget.getBoundingClientRect();

      const spotlightX = ((clientX - left) / width) * 100;
      const spotlightY = ((clientY - top) / height) * 100;

      const gradientColor = `radial-gradient(600px circle at ${spotlightX}% ${spotlightY}%, rgba(29, 78, 216, 0.15), transparent 65%)`;

      setMouseStyle({ background: gradientColor });
    }
  };

  const [childStyle, setChildState] = useState(ChildWrapper);

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/work-experience" ||
      location.pathname === "/projects" ||
      location.pathname === "/contact" ||
      location.pathname === "/assignments" ||
      location.pathname === "/courses"
    )
      setChildState(ChildWrapper);
    else setChildState(ChildWrapper2);
  }, [location]);

  // Determine the special day and set floating icons
  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth(); // 0-indexed (0 = January, 11 = December)
    const currentDate = today.getDate();

    const specialDay = Object.values(specialDays).find(
      (day) => day.month === currentMonth && day.day === currentDate
    );

    if (specialDay) {
      // Generate an array of floating icons
      setFloatingIcons(
        Array.from({ length: 10 }, () => ({
          id: Math.random(), // Unique ID for each icon
          icon: specialDay.icon,
          left: Math.random() * 100, // Random horizontal position (0-100%)
          animationDuration: Math.random() * 5 + 5, // Random animation duration (5-10s)
          direction: specialDay.direction || "down", // Direction of animation
        }))
      );
    } else {
      setFloatingIcons([]); // No floating icons if it's not a special day
    }
  }, []);

  return (
    <Gradient>
      <div
        className={BackgroundContainer}
        style={{ minHeight: "auto" }}
        onMouseMove={handleMouseMove}
      >
        <div className="relative">
          {/* Mouse Effect */}
          <div className={Mouse} style={mouseStyle} />

          {/* Floating Icons */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              overflow: "hidden",
              pointerEvents: "none", // Prevent interaction with icons
            }}
          >
            {floatingIcons.map((icon) => (
              <span
                key={icon.id}
                style={{
                  position: "absolute",
                  fontSize: "2rem",
                  left: `${icon.left}%`,
                  top: icon.direction === "up" ? `110%` : `-10%`, // Use "top" for both directions
                  animation: `${
                    icon.direction === "up" ? "float-up" : "float-down"
                  } ${icon.animationDuration}s linear infinite`,
                  transform: "translateY(0)", // Initial position
                  opacity: 1,
                }}
              >
                {icon.icon}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className={childStyle}>
            <div className={BackgroundChild}>{children}</div>
          </div>
        </div>

        {/* Inline styles for floating animations */}
        <style>
          {`
            @keyframes float-down {
              0% {
                transform: translateY(-100%);
                opacity: 1;
              }
              100% {
                transform: translateY(110vh); /* Float down past the bottom of the screen */
                opacity: 0; /* Fade out as it floats down */
              }
            }

            @keyframes float-up {
              0% {
                transform: translateY(0);
                opacity: 1;
              }
              100% {
                transform: translateY(-110vh); /* Float up past the top of the screen */
                opacity: 0; /* Fade out as it floats up */
              }
            }
          `}
        </style>
      </div>
    </Gradient>
  );
};

export default Background;