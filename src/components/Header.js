import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderH1,
  HeaderH2,
  HeaderP,
  Nav,
  NavItems,
  NavItem,
  NavSpan,
  NavSpanText,
  MediaItems,
  Media,
  ActiveSpan,
  ActiveSpanText
} from '../styles/styles';

const Header = () => {
  const [activeNav, setActiveNav] = useState('');
  const headerRef = useRef(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0% -50% 0%' }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className={HeaderContainer} ref={headerRef}>
      <div>
        <h1 className={HeaderH1}>
          Alan Lin
        </h1>
        <h2 className={HeaderH2}>
          CS Student at Boston University
        </h2>
        <p className={HeaderP}>
          Constructing ideas into reality, one line at a time.
        </p>

        <nav className={Nav}>
          <ul className={NavItems}>
            <li>
              <Link className={`${NavItem} ${activeNav === 'about' ? 'active' : ''}`} to="/">
                <span className={`${activeNav === 'about' ? ActiveSpan : NavSpan}`} />
                <span className={`${activeNav === 'about' ? ActiveSpanText : NavSpanText}`}> About</span>
              </Link>
            </li>

            <li>
              <Link className={`${NavItem} ${activeNav === 'experience' ? 'active' : ''}`} to='/work-experience'>
                <span className={`${activeNav === 'experience' ? ActiveSpan : NavSpan}`} />
                <span className={`${activeNav === 'experience' ? ActiveSpanText : NavSpanText}`}> Experience</span>
              </Link>
            </li>

            <li>
              <Link className={`${NavItem} ${activeNav === 'projects' ? 'active' : ''}`} to="/projects">
                <span className={`${activeNav === 'projects' ? ActiveSpan : NavSpan}`} />
                <span className={`${activeNav === 'projects' ? ActiveSpanText : NavSpanText}`}> Projects</span>
              </Link>
            </li>

            <li>
              <Link className={`${NavItem} ${activeNav === 'contact' ? 'active' : ''}`} to="/contact">
                <span className={`${activeNav === 'contact' ? ActiveSpan : NavSpan}`} />
                <span className={`${activeNav === 'contact' ? ActiveSpanText : NavSpanText}`}> Contact</span>
              </Link>
            </li>

            <a className={`${NavItem} ${activeNav === 'resume' ? 'active' : ''}`} href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <span className={`${activeNav === 'resume' ? ActiveSpan : NavSpan}`} />
              <span className={`${activeNav === 'resume' ? ActiveSpanText : NavSpanText}`}> Resume</span>
            </a>

          </ul>
        </nav>
      </div>

      <ul className={MediaItems}>
        <li className={Media}>
          <a href='https://github.com/Alan0893' target='_blank' rel='noreferrer'>
            <span className='sr-only'>Github</span>
            <svg 
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16' 
              fill='currentColor' 
              className='h-6 w-6'
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </li>

        <li className={Media}>
          <a href='https://www.linkedin.com/in/alanl193/' target='_blank' rel='noreferrer'>
            <span className='sr-only'>LinkedIn</span>
            <svg 
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24' 
              fill='currentColor' 
              className='h-6 w-6'
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
          </a>
        </li>

        <li className={Media}>
          <a href='mailto:alanl07905@gmail.com' target='_blank' rel='noreferrer'>
            <span className='sr-only'>Mail</span>
            <svg 
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16' 
              fill='currentColor' 
              className='h-6 w-6'
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
