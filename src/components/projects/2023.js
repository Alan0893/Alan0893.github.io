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
	Links,
	Time
} from '../../styles/styles';

const Projects23 = () => {	
  return (
		<div>
			<ul className={ProjContainer}>

				{/* Project 5 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							October - December
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/Alan0893/CS320-2023-Fall-alan/tree/main/assigns/interp3' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										<img
											className='mr-2 h-5 w-5 inline'
											src='https://raw.githubusercontent.com/ocaml/ocaml-logo/master/Colour/PNG/colour-transparent-icon.png'
											alt='favicon'
										/>
										OCaml Interpreter
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Designed and documented 15+ evaluation rules for function application, sequence expressions, conditional expressions, and trace expressions.
								Compiled high-level constructs into stack commands, maintaining execution invariants across all test cases and optimizing sequences (Push, Trace, Pop, Swap) for efficiency.
								Validated the language's behavior through the design and interpretation of sample programs, ensuring expected trace outputs and correct handling of edge cases.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>OCaml</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Formal Semantics</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Grammar</div>
								</li>
							</ul>
						</div>
						<img 
							alt='interpreter' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/interp.svg'
						/>
					</div>
				</li>

				{/* Project 4 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							June
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://streamsift.netlify.app/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										<img
											className='mr-2 h-5 w-5 inline'
											src='https://streamsift.netlify.app/favicon.ico'
											alt='favicon'
										/>
										StreamSift
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Leveraged the 
								<a className={Links} href='https://www.themoviedb.org/?language=en-US' target='_blank' rel='noreferrer'> TMDB (The Movie Database) API </a>
								to deliver up-to-the-minute data on trending movies and series, increasing content relevancy and boosting platform engagement by 15%. 
								Enabled access to current details, including descriptions, cast members, and character data for over 5000 movies and series.
								Capitalized the TMDB API to facilitate targeted searched for specific movies, series, or actor queries, enhancing user search experience by 30%.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ReactJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Material UI</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>REST APIs</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>JavaScript</div>
								</li>
							</ul>
						</div>
						<img 
							alt='streamsift' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/streamsift.svg'
						/>
					</div>
				</li>

				{/* Project 3 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							May - June
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://notecove.netlify.app/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										<img
											className='mr-2 h-5 w-5 inline'
											src='https://notecove.netlify.app/favicon.ico'
											alt='favicon'
										/>
										NoteCove
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Implemented an API leveraging Firebase functions to seamlessly access user information and 
								notes, reducing data retrieval time by 30%. Employed Firebase database to efficiently store 
								and manage user collections and notes collections, ensuring high scalability and reliability. 
								Incorporated Firebase authentication system to enable secure user sign-in and 
								account creation, achieving a 99% user authentication success rate. Utilized Firebase storage 
								for seamless storage of user profile pictures. 
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ReactJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Firebase</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ExpressJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Material UI</div>
								</li>
							</ul>
						</div>
						<img 
							alt='notecove' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/notecove.svg'
						/>
					</div>
				</li>
				
				{/* Project 2 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							February - May
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://alanv1.netlify.app/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										<img
											className='mr-2 h-5 w-5 inline'
											src='/favicons/favicon.ico'
											alt='favicon'
										/>
										Portfolio V1
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Utilizes HTML and CSS to display personal portfolio such as education, experiences, and projects. It utilizes 
								JavaScript for transitions and animations, and jQuery for active navigation items. 
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
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>jQuery</div>
								</li>
							</ul>
						</div>
						<img 
							alt='alanport' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/alanv1.svg'
						/>
					</div>
				</li>

				{/* Project 1 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							January - February
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://countrx.netlify.app/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										<img
											className='mr-2 h-5 w-5 inline'
											src='/assets/projects/favicons/countrx.ico'
											alt='favicon'
										/>
										Countrx
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Integrated the 
								<a className={Links} href='https://restcountries.com/' target='_blank' rel='noreferrer'> RESTful Countries API </a>
								to fetch and display comprehensive data about 195 countries, providing users with detailed and accurate information.
								Leveraged the 
								<a className={Links} href='https://developers.google.com/maps/documentation/embed/get-started' target='_blank' rel='noreferrer'> Google Maps Embed API </a>
								to showcase an interactive map of specified country, resulting in a 25% increase in user engagement with geographical content. 
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>HTML</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>CSS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>REST APIs</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>JavaScript</div>
								</li>
							</ul>
						</div>
						<img 
							alt='countrx' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/countrx.svg'
						/>
					</div>
				</li>

			</ul>
		</div>
  )
}

export default Projects23