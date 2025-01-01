import React from 'react';

// Styled components for consistent styling across app
import {
	ScrollWrapper,
	Scroll
} from '../../styles/styles';

const ScrollIndicator = ({ scrollPercentages }) => {
	return (
		<div className={ScrollWrapper}>
			<div
				className={Scroll}
				style={{ width: `${scrollPercentages}%` }}
			/>
		</div>
	)
}

export default ScrollIndicator