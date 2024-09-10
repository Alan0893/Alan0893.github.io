import React from 'react';
import { Link } from 'react-router-dom';

import {
  Projects as Container,
  Section,
  SectionHeading,
  SectionH2,
  LinkWrapper,
  LinkText,
  LeftArrowSvg
} from '../styles/styles';

import Projects24 from '../components/projects/2024';
const Projects = () => {
  return (
    <>
      <main id='content' className={Container}>
        <Link className={LinkWrapper} to={{ pathname: '/', hash: 'work-experience' }}>
          <span>
            <span className='whitespace-nowrap'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LeftArrowSvg}>
                <path fillRule='evenodd' d='M17 10a.75.75 0 01-.75.75H5.612l4.108 3.96a.75.75 0 01-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 011.04 1.08L5.862 9.25H16.25A.75.75 0 0117 10z' clipRule='evenodd' />
              </svg>
              <span className={LinkText}> Home</span>
            </span>
          </span>
        </Link>

        <section id='2024' className={Section}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>2024</h2>
          </div>
          <Projects24 />
        </section>

      </main>
    </>
  )
}

export default Projects;