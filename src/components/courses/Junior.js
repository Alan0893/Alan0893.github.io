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

const Junior = () => {	
  	return (
		<div>
			<ul className={ProjContainer}>
				
				{/* CS 506 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							Fall
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://www.bu.edu/academics/cas/courses/cas-cs-506/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										CS 506 - Data Science Tools & Applications
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Covers practical skills in working with data and introduces a wide range of techniques that are commonly used in the analysis of data, such as clustering, classification, regression, and network analysis. Emphasizes hands-on application of methods via programming.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Python</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Data Analysis</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Machine Learning</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

				{/* CS 460 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							Fall
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://www.bu.edu/academics/cas/courses/cas-cs-460/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										CS 460 - Introduction to Database Systems
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Introduction to database management systems. Examines entity-relationship, relational, and object-oriented data models; commercial query languages: SQL, relational algebra, relational calculus, and QBE; file organization, indexing and hashing, query optimization, transaction processing, concurrency control and recovery,integrity, and security.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>SQL</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>XML</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>MongoDB</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

				{/* CS 350 */}
				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							Fall
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://www.bu.edu/academics/cas/courses/cas-cs-350/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										CS 350 - Computing Systems
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Programming-centric introduction to computer systems. The course discusses system design principles, performance analysis, communication and synchronization primitives, concurrency control, database transactions, data consistency, task and data parallelism, replication, fault tolerance, and distributed consensus. 
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>C</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Concurrency</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Parallelism</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

			</ul>
		</div>
  	)
}

export default Junior;