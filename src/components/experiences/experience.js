import React from 'react';
import {
	Spacing,
	Info,
	H3Container,
	H3Span,
	LinkSvg,
	InfoP,
	ChipWrapper,
	Chip,
	ProjContainer,
	ProjWrapper,
	ProjDiv,
	Time
} from '../../styles/styles';

const Freshman = () => {	
  	return (
		<div>
			<ul className={ProjContainer}>

				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							Jan 2024 - May 2024
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://www.bu.edu/academics/cas/courses/cas-cs-411/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										Boston University - CS 411 : Full-Stack Developer
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Streamlined meal planning for users by creating an app that fetches recipes based on available ingredients, improving user convenience by 30%, by integrating the Spoonacular API . Ensured quick and easy 
                retrieval of past recipes, reducing search time by 40%, by storing and managing user's histories in Firebase' Firestore. Integrated Google OAuth login via Firebase, enhancing user security and streamlining 
                authentication; increased user retention by 15% and reduced login-related issues by 30%. Simplified the grocery shopping process by 50% by developing a feature that identifies missing ingredients and generates 
                a shopping list using the Unwrangle Sam's Club API.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Decoupled Architecture</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Frontend</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Backend</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							Nov 2022
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://bostonhacks.org/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										BostonHacks 2022 - Hackathon : Developer
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Co-developed a stock prediction tool for Dow Jones Companies, enhancing investment decision-making capabilities and achieving an 85% prediction accuracy rate.
                Employed the yfinance library to extract and analyze 5 years of historical stock data for 20 Dow Jones companies, enabling comprehensive data analysis. Applied 
                Plotly to craft interactive data visualizations, increasing user engagement by 20%. Analyzed historical trends and developed predictive models with an 85% accuracy 
                rate, significantly aiding in stock market decision-making processes.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Teamwork</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Problem Solving</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Python</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

			</ul>
		</div>
  	)
}

export default Freshman;