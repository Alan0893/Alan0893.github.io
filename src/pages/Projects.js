import React from 'react';

// For navigation between routes
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

// Specific project components for each year
import Projects24 from '../components/projects/2024';
import Projects23 from '../components/projects/2023';
import Projects22 from '../components/projects/2022';
import Projects21 from '../components/projects/2021';

const Projects = () => {
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

        { /* Project sections for 2024 year */ }
        <section id='2024' className={Section}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>2024</h2>
          </div>
          <Projects24 />
        </section>

        { /* Project sections for 2023 year */ }
        <section id='2023' className={Section}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>2023</h2>
          </div>
          <Projects23 />
        </section>

        { /* Project sections for 2022 year */ }
        <section id='2022' className={Section}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>2022</h2>
          </div>
          <Projects22 />
        </section>

        { /* Project sections for 2021 year */ }
        <section id='2021' className={Section}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>2021</h2>
          </div>
          <Projects21 />
        </section>

      </main>
    </>
  )
}

export default Projects;