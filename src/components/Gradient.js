import React from 'react';
import {
	GradientContainer,
	GradientWrapper1,
	GradientWrapper2,
	GradientSvg1,
	GradientSvg2,
} from '../styles/styles';

const Gradient = ({ children }) => {
  	return (
		<div className={GradientContainer}>
			<div className={GradientWrapper1}>
				<svg className={GradientSvg1} viewBox='0 0 1155 678'>
					<path 
						fill='url(#45de2b6b-yWtA2nK7)' 
						fillOpacity='.5' 
						d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z' 
					/>

					<defs>
						<linearGradient 
							id='45de2b6b-yWtA2nK7' 
							x1='1155.49' x2='-78.208' 
							y1='.177' y2='474.645' 
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#0e7490' />
							<stop offset='1' stopColor='#0369a1' />
						</linearGradient>
					</defs>
				</svg>
			</div>

			{ children }

			<div className={GradientWrapper2}>
				<svg className={GradientSvg2} viewBox='0 0 1155 678'>
					<path 
						fill='url(#ecb5b0c9-Jx8Qf6Wp)' 
						fillOpacity='.4'   
						d='M0 438.341L317.219 518.975l204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248 148.045-135.589 93.162-355.881 242.128-220.316 119.18 108.451 130.68 295.337 121.53 375.223L1155 299 1133.827 661.054 575.873 518.975z' 
					/>

					<defs>
						<linearGradient 
							id='ecb5b0c9-Jx8Qf6Wp' 
							x1='1155.49' x2='-78.208' 
							y1='.177' y2='474.645' 
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#0e7490' />
							<stop offset='1' stopColor='#0369a1' />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</div>
	)
}

export default Gradient;