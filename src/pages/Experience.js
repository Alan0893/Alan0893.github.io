import React from 'react';
import { Link } from 'react-router-dom';

// Styled components for consistent styling across app
import {
  PageContainer as Container,
  Section,
  SectionHeading,
  SectionH2,
  LinkWrapper,
  LinkText,
  LeftArrowSvg
} from '../styles/styles';

// Import components
import Experiences from '../components/experiences/experience';

const Experience = () => {
  return (
    <>
      <main id='content' className={Container}>

        { /* Navigation back to Home */ }
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

        { /* Work Experience Section */}
        <section id='work' className={Section}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Work Experiences</h2>
          </div>
          <Experiences />
        </section>

      </main>
    </>
  )
}

export default Experience;