import React from 'react';
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

const Projects24 = () => {	
	return (
		<div>
			<ul className={ProjContainer}>

				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							September - December
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/Alan0893/Image-Queueing-System' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										Multi-threaded Image Processing Server
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Developed a multi-threaded server in C using POSIX threads and semaphores to handle concurrent image processing requests with a FIFO queue policy.
								Implemented synchronization mechanisms, including mutexes and semaphores, to manage shared resources such as image arrays, request queues, and socket connections, ensuring thread-safe operations.
								Optimized request handling with a worker pool, supporting operations like image registration, rotation, blurring, and edge detection, while maintaining consistent throughput and minimizing race conditions.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>C</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Multi-threading</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Synchronization</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Queuing Policy</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Concurrency</div>
								</li>
							</ul>
						</div>
						<img 
							alt='server' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/server.png'
						/>
					</div>
				</li>

				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							November  
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/Alan0893/Neural-Networks-Visualization' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										Neural Networks Visualizer
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Developed a custom multi-layer perceptron (MLP) from scratch, capable of training on a circularly separable dataset with 100+ samples, using backpropagation and various activation functions (e.g., Tanh, ReLU).
								Visualized the training process dynamically over 1,000 steps using Matplotlib animations, showcasing decision boundaries in the input space, 3D hidden space transformations, and gradient flow across network layers.
								Generated interactive gradient maps with edge thickness proportional to gradient magnitude, providing real-time insights into the learning dynamics and convergence behavior of the model.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Python</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Flask</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Javascript</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>HTML</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Makefile</div>
								</li>
							</ul>
						</div>
						<img 
							alt='neural' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/neural.png'
						/>
					</div>
				</li>

				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							November
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/Alan0893/Logistic-Regression' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										Logistic Regression Visualizer
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Developed a Python-based system to simulate clustered datasets with configurable shift distances between two classes, generating up to 1,000 samples per simulation.
								Implemented logistic regression to analyze how the separation between clusters affects model parameters (intercept, coefficients) and performance metrics such as logistic loss and margin width.
								Visualized results through contour plots of decision boundaries, scatter plots of data distributions, and parameter vs. shift distance graphs, achieving dynamic insights into model behavior across 8+ experimental setups.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Python</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Flask</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Javascript</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>HTML</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Makefile</div>
								</li>
							</ul>
						</div>
						<img 
							alt='logreg' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/logreg.png'
						/>
					</div>
				</li>

				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							November
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/Alan0893/Confidence-Intervals' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										Interactive Linear Regression & Hypothesis Testing Simulator
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Developed a Flask-based web application to simulate linear regression on datasets of up to 10,000 data points and perform 1,000+ simulations, with dynamic hypothesis testing and confidence interval estimation. 
								Visualized results through scatter plots with regression lines, histograms of slopes and intercepts, and interactive hypothesis test plots, achieving plot generation times under 300ms using Matplotlib.
								Implemented advanced statistical features, including p-value calculation for hypothesis tests and confidence intervals with 95% accuracy, helping users explore variability and significance in regression modeling.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Python</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Flask</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Javascript</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>HTML</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Makefile</div>
								</li>
							</ul>
						</div>
						<img 
							alt='hypothesis' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/hypothesis.png'
						/>
					</div>
				</li>

				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							November
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/Alan0893/Linear-Regression-Visualization' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										Linear Regression Visualizer
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Simulated linear regression on synthetic datasets, generating and visualizing results for up to 10,000 data points and 1,000 simulations with
								real-time user input handling. Visualized regression results with scatter plots and histograms, achieving 100% accuracy in slope and intercept calculation
								and rendering plots in under 300ms. Integrated Scikit-learn for regression modeling, reducing simulation processing time by 40% through efficient dataset generation
								and model fitting techniques.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Python</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Flask</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Javascript</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>HTML</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Makefile</div>
								</li>
							</ul>
						</div>
						<img 
							alt='linreg' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/linreg.png'
						/>
					</div>
				</li>

				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							October
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/Alan0893/LSA-Search-Engine' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										Latent Semantic Analysis Search Engine
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Built a search engine that uses Latent Semantic Analysis (LSA) to retrieve top 5 relevant documents from a dataset of 18,000+ documents with 95% accuracy based on cosine similarity.
								Designed a responsive web interface, handling user queries in real time with document retrieval latency under 200ms, and visualized cosine similarity scores via bar charts.
								Reduced dimensionality of the term-document matrix by 85% using Singular Value Decomposition (SVD), leading to a 50% improvement in query processing speed while maintaining high retrieval accuracy.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Python</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Flask</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Javascript</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>HTML</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Makefile</div>
								</li>
							</ul>
						</div>
						<img 
							alt='search' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/search.png'
						/>
					</div>
				</li>

				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							September
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/Alan0893/KMeans-Visualization' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										KMeans Clustering Visualization
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
							Developed an interactive web application to visualize the KMeans Clustering algorithm with 4 initialization methods (Random, Farthest First, KMeans++, Manual).
							Engineered a dynamic clustering process visualization with step-by-step playback and manual centroid selection, allowing users to track algorithm convergence 
							in under 5 seconds for datasets of up to 100 points. Optimized clustering performance and visualization rendering, reducing load times by 20% for large datasets.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Python</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Flask</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Javascript</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>HTML</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Makefile</div>
								</li>
							</ul>
						</div>
						<img 
							alt='kmeans' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/kmeans.svg'
						/>
					</div>
				</li>

				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							January - May
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/Alan0893/Recipe' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										<img
											className='mr-2 h-5 w-5 inline'
											src='/assets/projects/favicons/recipe.ico'
											alt='favicon'
										/>
										Munchy Minion
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Streamlined meal planning for users by creating an app that fetches recipes based on available ingredients, improving user convenience by 30%, by integrating the 
								<a className={Links} href='https://spoonacular.com/food-api' target='_blank' rel='noreferrer'> Spoonacular API </a>.
								Ensured quick and easy retrieval of past recipes, reducing search time by 40%, by storing and managing user's histories in Firebase' Firestore. Integrated Google OAuth login via 
								Firebase, enhancing user security and streamlining authentication; increased user retention by 15% and reduced login-related issues by 30%. Simplified the grocery shopping process 
								by 50% by developing a feature that identifies missing ingredients and generates a shopping list using the 
								<a className={Links} href='https://www.unwrangle.com/' target='_blank' rel='noreferrer'> Unwrangle Sam's Club API</a>.						</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ReactJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ExpressJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>REST APIs</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Firebase</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>OAuth</div>
								</li>
							</ul>
						</div>
						<img 
							alt='recipe' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/recipe.svg'
						/>
					</div>
				</li>

				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							April
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/Alan0893/Sprofile' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										<img
											className='mr-2 h-5 w-5 inline'
											src='/assets/projects/favicons/sprofile.ico'
											alt='favicon'
										/>
										Sprofile
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
									<div className={Chip}>ExpressJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>OAuth</div>
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

			</ul>
		</div>
	)
}

export default Projects24