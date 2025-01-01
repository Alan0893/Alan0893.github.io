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

// Import course components
import Freshman from '../components/courses/Freshmen';
import Sophomore from '../components/courses/Sophomore';
import Junior from '../components/courses/Junior';

const Courses = () => {
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

        { /* Course sections for Junior year */ }
        <section id='Junior' className={Section}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Junior</h2>
          </div>
          <Junior />
        </section>
    
        { /* Course sections for Sophomore year */ }
        <section id='Sophomore' className={Section}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Sophomore</h2>
          </div>
          <Sophomore />
        </section>

        { /* Course sections for Freshmen year */ }
        <section id='Freshman' className={Section}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Freshmen</h2>
          </div>
          <Freshman />
        </section>

      </main>
    </>
  )
}

export default Courses;