import React from 'react';
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