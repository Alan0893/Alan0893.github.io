import React from 'react';

// Styled components for consistent styling across app
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

const Sophomore = () => {	
  return (
		<div>
			<ul className={ProjContainer}>

				{/* CS 411 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							Spring
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://www.bu.edu/academics/cas/courses/cas-cs-411/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										CS 411 - Software Engineering
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Introduction to the construction of reliable software. Topics may include software tools, software testing methodologies, retrofitting, regression testing, structured design and structured programming, software characteristics and quality, complexity, entropy, deadlock, fault tolerance, formal proofs of program correctness, chief program teams, and structured walk-throughs. 							
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>OAuth</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Databases</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Decoupled Architecture</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

				{/* CS 391 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							Spring
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://bu.edu/cs/undergraduate/undergraduate-life/courses/topics/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										CS 391 A1 - Web Application Development
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
							Web Application Development is a comprehensive course that equips students with practical skills to build dynamic and immersive web applications. Through hands-on exercises and projects, students learn to structure and style web pages using HTML and CSS, create interactive experiences with JavaScript, develop reusable components with React, interact with relational databases using decoupling tools such as ORM and DAO. Additionally, students explore the exciting world of Web-XR, enabling them to build virtual reality experiences with React-VR. By the end of the course, students have the necessary tools and knowledge to develop robust web applications with seamless integration of databases, interactive functionality, and immersive VR experiences. Students are expected to have basic knowledge of OOP principles, coding conventions, and I/O subsystems. 
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ReactJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>NextJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ViteJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>GraphQL</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Apollo</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ThreeJS</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

				{/* CS 330 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							Spring
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://www.bu.edu/academics/cas/courses/cas-cs-330/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										CS 330 - Introduction to Analysis of Algorithms
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Examines the basic principles of algorithm design and analysis; graph algorithms; greedy algorithms; dynamic programming; network flows; polynomial- time reductions; NP-hard and NP-complete problems; approximation algorithms; randomized algorithms.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Algorithms</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Dynamic Programming</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

				{/* CS 320 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							Fall
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://www.bu.edu/academics/cas/courses/cas-cs-112/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										CS 320 - Concepts of Programming Languages
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Concepts involved in the design of programming languages. Bindings, argument transmission, and control structures. Environments: compile-time, load-time, and run-time. Interpreters.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Functional Programming</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Formal Semantics</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>OCaml</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Python</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

				{/* CS 237 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							Fall
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://www.bu.edu/academics/cas/courses/cas-cs-237/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										CS 237 - Probability in Computing 
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Introduction to basic probabilistic concepts and methods used in computer science. Develops an understanding of the crucial role played by randomness in computing, both as a powerful tool and as a challenge to confront and analyze. Emphasis on rigorous reasoning, analysis, and algorithmic thinking.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Probability</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Statistics</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Jupyter Notebook</div>
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

export default Sophomore;