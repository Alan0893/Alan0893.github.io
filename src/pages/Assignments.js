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
	AssignmentCard
} from '../styles/styles';

const assignments = [
  {
    title: 'Assignment 1: CPU Clock Frequency Measurement',
    description: 'I measured CPU clock frequency using `rdtsc` and compared sleep vs busy-waiting methods.',
    repoLink: 'https://github.com/alan0893/cpu-frequency-measurement'
  },
  {
    title: 'Assignment 2: Web Development Portfolio',
    description: 'Created a portfolio site using React and Tailwind, deployed via GitHub Pages.',
    repoLink: 'https://github.com/alan0893/portfolio'
  }
  // Add more assignments here
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
                <Link to={{ pathname: assignment.repoLink }} target='_blank' rel='noopener noreferrer' className={LinkWrapper}>
                  <span className={LinkText}>View on GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={RightArrowSvg}>
                    <path fillRule="evenodd" d="M12 10H3m9-4l4 4m0 0l-4 4m4-4H9" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}

export default Assignments;