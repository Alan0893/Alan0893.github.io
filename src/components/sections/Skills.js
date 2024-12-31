import React from 'react';
import {
  Spacing,
  Container,
  DivStyles,
  Subhead,
  Info,
  ChipWrapper,
  Chip,
  ChipText,
  ChipImage
} from '../../styles/styles';
import WordSphere from '../home/WordSphere';

const Skills = () => {
  const texts = [
    'Java', 'HTML', 'CSS', 'Python', 'JavaScript', 'ReactJS', 'Git', 'Firebase', 'Jupyter Notebook',
    'Bash/Shell', 'x86 Assembly', 'LaTeX', 'Tailwind CSS', 'Bootstrap', 'ViteJS', 'NodeJS', 'OCaml', 
    'NextJS', 'C', 'C++', 'Flask', 'MongoDB', 'Kotlin', 'GoLang'
  ];
  const counts = [1, 2, 4, 5, 4, 2, 1];

  const options = {
    tilt: Math.PI / 9,
    initialVelocityX: 3.5,
    initialVelocityY: 3.5,
    initialRotationX: Math.PI * 0.5,
    initialRotationZ: 0,
  };

  return (
	  <div>
      <ol>

        <li className={Spacing}>
          <div className={Container}>
            <div className={DivStyles} />
            <header className={Subhead}>
              Comfortable
            </header>
            <div className={Info}>
              <ul className={ChipWrapper}>
                <li className='mr-1.5 mt-1'> 
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/java-4.svg' alt='java' className={ChipImage} />
                    <span className={ChipText}>Java</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/html-1.svg' alt='html' className={ChipImage} />
                    <span className={ChipText}>HTML</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/css-3.svg' alt='css' className={ChipImage} />
                    <span className={ChipText}>CSS</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/python-5.svg' alt='python' className={ChipImage} />
                    <span className={ChipText}>Python</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' alt='javascript' className={ChipImage} />
                    <span className={ChipText}>JavaScript</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/react-2.svg' alt='reactjs' className={ChipImage} />
                    <span className={ChipText}>ReactJS</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/git-icon.svg' alt='git' className={ChipImage} />
                    <span className={ChipText}>Git</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/firebase-1.svg' alt='firebase' className={ChipImage} />
                    <span className={ChipText}>Firebase</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png' alt='figma' className={ChipImage} />
                    <span className={ChipText}>Jupyter Notebook</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className={Spacing}>
          <div className={Container}>
            <div className={DivStyles} />
            <header className={Subhead}>
              Familiar
            </header>
            <div className={Info}>
              <ul className={ChipWrapper}>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://www.svgrepo.com/show/353478/bash-icon.svg' alt='bash' className={ChipImage} />
                    <span className={ChipText}>Bash/Shell</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://user-images.githubusercontent.com/5421823/62779159-4cf76880-baaa-11e9-8318-e20a1aaa913a.png' alt='x86 assembly' className={ChipImage} />
                    <span className={ChipText}>x86 Assembly</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/latex/latex.png' alt='latex' className={ChipImage} />
                    <span className={ChipText}>LaTeX</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg' alt='tailwind' className={ChipImage} />
                    <span className={ChipText}>Tailwind CSS</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' alt='bootstrap' className={ChipImage} />
                    <span className={ChipText}>Bootstrap</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/vitejs.svg' alt='vitejs' className={ChipImage} />
                    <span className={ChipText}>ViteJS</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' alt='nodejs' className={ChipImage} />
                    <span className={ChipText}>NodeJS</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://www.svgrepo.com/show/373945/ocaml.svg' alt='nodejs' className={ChipImage} />
                    <span className={ChipText}>OCaml</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://www.svgrepo.com/show/354113/nextjs-icon.svg' alt='nextjs' className={ChipImage} />
                    <span className={ChipText}>NextJS</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/c-1.svg' alt='C' className={ChipImage} />
                    <span className={ChipText}>C</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/c.svg' alt='C++' className={ChipImage} />
                    <span className={ChipText}>C++</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/flask.svg' alt='Flask' className={ChipImage} />
                    <span className={ChipText}>Flask</span>
                  </div>
                </li>    
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' alt='mongodb' className={ChipImage} />
                    <span className={ChipText}>MongoDB</span>
                  </div>
                </li>            
              </ul>
            </div>
          </div>
        </li>

        <li className={Spacing}>
          <div className={Container}>
            <div className={DivStyles} />
            <header className={Subhead}>
              Currently Learning
            </header>
            <div className={Info}>
              <ul className={ChipWrapper}>
                
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/kotlin-2.svg' alt='mongodb' className={ChipImage} />
                    <span className={ChipText}>Kotlin</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={Chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/go-logo-1.svg' alt='mongodb' className={ChipImage} />
                    <span className={ChipText}>GoLang</span>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
        </li>

      </ol>
      <div className="flex justify-center items-center">
        <WordSphere texts={texts} counts={counts} options={options} />
      </div>
    </div>
  )
}

export default Skills;