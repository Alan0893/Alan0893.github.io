import React from 'react';
import { Link } from 'react-router-dom';
import {
	ProjectsContainer,
	Spacing,
	Container,
	DivStyles,
	Info,
	H3Container,
	H3Span,
	LinkSvg,
	InfoP,
	Image,
	ChipWrapper,
	Chip,
	LinkWrapper,
	LinkText,
	RightArrowSvg,
	Links
} from '../../styles/styles';

const Projects = () => {
  	return (
		<div>
			<ul className={ProjectsContainer}>

			<li className={Spacing}>
					<div className={Container}>
						<div className={DivStyles} />
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://sprofile.onrender.com/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										SProfile
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Harnessed the 
								<a className={Links} href='https://developer.spotify.com/documentation/web-api' target='_blank' rel='noreferrer'> Spotify API </a>
								to retrieve extensive data on users, artists, albums, playlists, tracks and player information, resulting in a 20% improvement in user experience.
								Incorporated the 
								<a className={Links} href='https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/' target='_blank' rel='noreferrer'> TicketMaster API </a>
								to deliver real-time updates on upcoming artist events, resulting in a 15% increase in app usage frequency. Implemented Spotify's OAuth system for user authentication,
								ensuring seamless access to personalized music content and features, reducing unauthorized access incidents by 25%.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ReactJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>REST APIs</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>OAuth</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ExpressJS</div>
								</li>
							</ul>
						</div>
						<img 
							alt='sprofile' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/sprofile.svg'
						/>
					</div>
				</li>

				<li className={Spacing}>
					<div className={Container}>
						<div className={DivStyles} />
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/Alan0893/CS320-2023-Fall-alan/tree/main/assigns/interp3' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
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
								Designed and documented 15+ evaluation rules for function application, sequence expressions, conditional expressions, and trace expressions. Compiled high-level constructs 
								into stack commands, maintaining execution invariants across all test cases and optimizing sequences (Push, Trace, Pop, Swap) for efficiency. Validated the language's behavior 
								through the design and interpretation of sample programs, ensuring expected trace outputs and correct handling of edge cases.
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
							alt='notecove' 
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

				<li className={Spacing}>
					<div className={Container}>
						<div className={DivStyles} />
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://streamsift.netlify.app/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
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

			</ul>
			
			<div className={Spacing}>
				<Link className={LinkWrapper} to='/projects' onClick={() => window.scroll(0,0)}>
					<span>
						<span className='whitespace-nowrap'>
							<span className={LinkText}> View All Projects</span>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={RightArrowSvg}>
								<path fillRule='evenodd' d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z' clipRule='evenodd' />
							</svg>
						</span>
					</span>
				</Link>
			</div>
		</div>
  	)
}

export default Projects;