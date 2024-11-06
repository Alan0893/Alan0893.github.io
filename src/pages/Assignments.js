import React from 'react';
import { Link } from 'react-router-dom';

import {
  PageContainer as Container,
  Section,
  SectionHeading,
  SectionH2,
  SectionH3,
  InfoP,
  LinkWrapper,
  LinkText,
  LeftArrowSvg,
  RightArrowSvg,
  AssignmentCard,
  Video,
  Iframe
} from '../styles/styles';

const assignments = [
  {
    title: 'Hypothesis Testing and Confidence Intervals in Linear Regression',
    description: 'Enhanced interactive webpage to allow users to perform hypothesis tests on the slope or intercept of the regression line and generate confidence intervals based on simulations.',
    repoLink: 'https://github.com/Alan0893/alanl193-assignment-7',
    videoLink: '/assets/videos/assignment7.mp4'
  }, {
    title: 'Linear Regression',
    description: 'Created an interactive webpage to demonstrate how modifying parameters affects regression results, especially when there is no actual relationship between X and Y.',
    repoLink: 'https://github.com/Alan0893/alanl193-assignment-6',
    videoLink: '/assets/videos/assignment6.mp4'
  }, {
    title: 'Midterm: Predicting Star Rating',
    description: 'Predicted the star rating associated with user reviews from Amazon Movie Reviews using the available features.',
    repoLink: 'https://github.com/Alan0893/alanl193-midterm'
  }, {
    title: 'Assignment 5: Predicting Customer Churn Using KNN',
    description: 'Developed a predictive model to identify customers who are likely to churn (i.e., leave the bank) using the K-Nearest Neighbors (KNN) algorithm.',
    repoLink: 'https://github.com/Alan0893/alanl193-assignment-5'
  },{
    title: 'Assignment 4: Latent Semantic Analysis (LSA) Search Engine Webpage',
    description: 'Created a webpage where users can type queries and retrieve documents from a predefined dataset using the Latent Semantic Analysis (LSA) algorithm.',
    repoLink: 'https://github.com/Alan0893/alanl193-assignment-4',
    videoLink: '/assets/videos/assignment4.mp4'
  },{
    title: 'Assignment 3: Singular Value Decomposition (SVD) Algorithm',
    description: 'Implemented the SVD algorithm from scatch to perform dimensionality reduction on a dataset, explore the effect of the number of dimensions on the performance of a classifier, and visualize results for comparison and analysis.',
    repoLink: 'https://github.com/Alan0893/alanl193-assignment-3'
  }, {
    title: 'Assignment 2: KMeans Clustering Visualization Webpage',
    description: 'Developed an interactive web application that demonstrates the KMeans clustering algorithm using various initialization methods.',
    repoLink: 'https://github.com/Alan0893/alanl193-assignment-2',
    videoLink: '/assets/videos/assignment2.mp4'
  }, {
    title: 'Assignment 1: Elevator Data Collection',
    description: 'Calculated the average walking distance to the next elevator arrival for both the training and test data, comparing the results between the naive waiting position and the smart waiting position.',
    repoLink: 'https://github.com/Alan0893/alanl193-assignment-1'
  }, {
    title: 'Assignment 0: Adding Two Numbers',
    description: 'Wrote a python script that adds two numbers and prints their sum to the command line.',
    repoLink: 'https://github.com/Alan0893/alanl193-assignment-0'
  }
];

const Assignments = () => {
  return (
    <>
      <main id='content' className={Container}>

        <Link className={LinkWrapper} to={{ pathname: '/' }}>
          <span>
            <span className='whitespace-nowrap'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LeftArrowSvg}>
                <path fillRule='evenodd' d='M17 10a.75.75 0 01-.75.75H5.612l4.108 3.96a.75.75 0 01-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 011.04 1.08L5.862 9.25H16.25A.75.75 0 0117 10z' clipRule='evenodd' />
              </svg>
              <span className={LinkText}> Home</span>
            </span>
          </span>
        </Link>

        <section id='assignments' className={Section}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Assignments</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {assignments.map((assignment, index) => (
              <div key={index} className={AssignmentCard}>
                <h3 className={SectionH3}>{assignment.title}</h3>
                <p className={InfoP}>{assignment.description}</p>
                <a href={assignment.repoLink} target='_blank' rel='noopener noreferrer' className={LinkWrapper}>
                  <span className={LinkText}>Github Link</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={RightArrowSvg}>
                    <path fillRule="evenodd" d="M12 10H3m9-4l4 4m0 0l-4 4m4-4H9" clipRule="evenodd" />
                  </svg>
                </a>
                {assignment.videoLink && (
                  <div className={Video}>
                    <iframe
                      className={Iframe}
                      src={assignment.videoLink}
                      title='Assignment 2 Video'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}

export default Assignments;
