import React,  { useRef, useEffect, useState } from 'react';
import {
  Home as Container,
  Section,
  SectionHeading,
  SectionH2,
  Links,
  Svg,
  Footer
} from '../styles/styles';

import Header from '../components/home/Header';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';

import ScrollIndicator from '../components/global/ScrollIndicator';

const Home = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  const [scrollPercentages, setScrollPercentages] = useState({
    about: 0,
    skills: 0,
  }); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const aboutScrollPercentage = ((scrollTop - aboutRef.current.offsetTop) / (aboutRef.current.offsetHeight)) * 100;
      const skillsScrollPercentage = ((scrollTop - skillsRef.current.offsetTop) / (skillsRef.current.offsetHeight)) * 100;

      setScrollPercentages({
        about: aboutScrollPercentage,
        skills: skillsScrollPercentage,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main id='content' className={Container}>

        <section id='about' className={Section} ref={aboutRef}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>About</h2>
            <ScrollIndicator scrollPercentages={scrollPercentages.about.toFixed(2)} />
          </div>
          <About/>
        </section>
        
        <section id='skills' className={Section} ref={skillsRef}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Skills</h2>
            <ScrollIndicator scrollPercentages={scrollPercentages.skills.toFixed(2)} />
          </div>
          <Skills />
        </section>

        <section className={Section}>
          <footer className={Footer}>
            <p>
              Design inspired by 
              <a className={Links} href='https://brittanychiang.com/' target='_blank' rel='noreferrer'> Brittany Chiang </a>.
              Constructed using 
              <a className={Links} href='https://react.dev/' target='_blank' rel='noreferrer'> ReactJS </a> and
              <a className={Links} href='https://tailwindcss.com/' target='_blank' rel='noreferrer'> Tailwind CSS </a>, 
              deployed on
              <a className={Links} href='https://github.com/' target='_blank' rel='noreferrer'> GitHub Pages </a>, and developed in
              <a className={Links} href='https://code.visualstudio.com/' target='_blank' rel='noreferrer'> Visual Studio Code</a>.

              <br/><br/>
              <span>
                <span className='inline-block'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className={Svg}>
                    <path fillRule="evenodd" d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M12,6 C12.5128358,6 12.9355072,6.38604019 12.9932723,6.88337887 L13,7 L13,11.5857864 L14.7071068,13.2928932 C15.0976311,13.6834175 15.0976311,14.3165825 14.7071068,14.7071068 C14.3466228,15.0675907 13.7793918,15.0953203 13.3871006,14.7902954 L13.2928932,14.7071068 L11.2928932,12.7071068 C11.1366129,12.5508265 11.0374017,12.3481451 11.0086724,12.131444 L11,12 L11,7 C11,6.44771525 11.4477153,6 12,6 Z"/>                  
                  </svg>
                </span>
              </span>
              2024
            </p>
          </footer>
        </section>
      </main>
    </>
  )
}

export default Home;