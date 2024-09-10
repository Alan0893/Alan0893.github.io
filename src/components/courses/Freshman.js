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
							Spring
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://www.bu.edu/academics/cas/courses/cas-cs-210/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										CS 210 - Computer Systems
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Fundamental concepts of computer systems and systems programming. Hardware fundamentals including digital logic, memory systems, processor design, buses, I/O subsystems, data representations, computer arithmetic, and instruction- set architecture. Software concepts including assembly language programming, operating systems, assemblers, linkers, and systems programming in C.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Bash / Shell</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>x86 Assembly</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>C</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							Spring
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://www.bu.edu/academics/cas/courses/cas-cs-132/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										CS 132 - Geometric Algorithms (Linear Algebra)
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Basic concepts, data structures, and algorithms for geometric objects. Examples of topics: Cartesian geometry, transformations and their representation, queries and sampling, triangulations. Emphasis on rigorous reasoning and analysis, advancing algorithmic maturity and expertise in its application. 
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Linear Algebra</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Matrix algebra</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Python</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							Fall
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://www.bu.edu/academics/cas/courses/cas-cs-131/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										CS 131 - Combinatoric Structures (Discrete Math)
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Representation, analysis, techniques, and principles for manipulation of basic combinatoric structures used in computer science. Rigorous reasoning is emphasized.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Discrete Math</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Reasoning</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

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
										CS 112 - Data Structures & OOP in Java
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Covers advanced programming techniques and data structures. Topics include recursion, algorithm analysis, linked lists, stacks, queues, trees, graphs, tables, searching, and sorting.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Java</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Data Structures</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>OOP</div>
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