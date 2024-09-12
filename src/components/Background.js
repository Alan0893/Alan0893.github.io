import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Gradient from './Gradient';
import {
	BackgroundContainer,
	Mouse,
	ChildWrapper,
	ChildWrapper2,
	BackgroundChild
} from '../styles/styles';

const Background = ({ children }) => {
	const [mouseStyle, setMouseStyle] = useState(null);
	const [isMouseTrackingEnabled, setIsMouseTrackingEnabled] = useState(false);

	const location = useLocation();

	useEffect(() => {
		const handleResize = () => {
			setIsMouseTrackingEnabled(window.innerWidth >= 1024);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleMouseMove = (event) => {
		if (isMouseTrackingEnabled) {
			const { clientX, clientY } = event;
			const { left, top, width, height } = event.currentTarget.getBoundingClientRect();

			const spotlightX = ((clientX - left) / width) * 100;
			const spotlightY = ((clientY - top) / height) * 100;

			const gradientColor = `radial-gradient(500px circle at ${spotlightX}% ${spotlightY}%, rgba(29, 78, 216, 0.15), transparent 80%)`;

			setMouseStyle({ background: gradientColor });
		}
	};

	const [childStyle, setChildState] = useState(ChildWrapper);

	useEffect(() => {
		if (
			location.pathname === '/' || 
			location.pathname === '/work-experience' ||
			location.pathname === '/projects' || 
			location.pathname === '/contact' ||
			location.pathname === '/assignments' ||
			location.pathname === '/courses' 
		)
			setChildState(ChildWrapper);
		else // Route doesnt exist, remove padding style
			setChildState(ChildWrapper2);
	}, [location]);

	return (
		<Gradient>
			<div 
				className={BackgroundContainer} 
				style={{ minHeight: 'auto' }} 
				onMouseMove={handleMouseMove}
			>
				<div className="relative">
					<div 
						className={Mouse} 
						style={mouseStyle} 
					/>
					<div className={childStyle}>
						<div className={BackgroundChild}>{children}</div>
					</div>
				</div>
			</div>
		</Gradient>
	)
}

export default Background;