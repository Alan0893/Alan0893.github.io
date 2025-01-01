import React from 'react';

// Styled components for consistent styling across app
import {
	Spacing,
	Info,
	H3Container,
	H3Span,
	LinkSvg,
	InfoP,
	Image,
	ChipWrapper,
	Chip,
	ProjContainer,
	ProjWrapper,
	ProjDiv,
	Time
} from '../../styles/styles';

const Projects22 = () => {	
  return (
		<div>
			<ul className={ProjContainer}>

				{/* Project 2 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							November
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/jasonw4/STOCK_PREDICTION' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										<img
											className='mr-2 h-5 w-5 inline'
											src='/assets/projects/favicons/stocks.ico'
											alt='favicon'
										/>
										Dow Jones Stock Predictor
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
									<div className={Chip}>Python</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Streamlit</div>
								</li>
							</ul>
						</div>
						<img 
							alt='stock' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/stock.svg'
						/>
					</div>
				</li>

				{/* Project 1 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							June - August
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://alcalculator.netlify.app/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										<img
											className='mr-2 h-5 w-5 inline'
											src='/assets/projects/favicons/calc.ico'
											alt='favicon'
										/>
										Conversion Calculator
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Implements basic arithmetic operations such as addition, subtraction, multiplication, and division, allowing users
								to calculate a wide range of equations. Incorporates features for unit conversion, enabling users to effortlessly 
								convert between different units of measurements like area, length, and temperature.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>HTML</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>CSS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>JavaScript</div>
								</li>
							</ul>
						</div>
						<img 
							alt='calc' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/calc.svg'
						/>
					</div>
				</li>

			</ul>
		</div>
  )
}

export default Projects22