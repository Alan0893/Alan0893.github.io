import React,  { useRef, useEffect, useState } from 'react';

// Styled components for consistent styling across app
import {
  Home as Container,
  Section,
  SectionHeading,
  SectionH2,
  Links,
  Svg,
  Footer
} from '../styles/styles';

// Import components
import Header from '../components/home/Header';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';

// Import global components
import ScrollIndicator from '../components/global/ScrollIndicator';

// Import game components
import NumberGuessingGame from '../components/games/NumberGuess';
import Game2048 from '../components/games/2048';
import TowerOfHanoi from '../components/games/TowerOfHanoi';
import SimonSays from '../components/games/SimonSays';
import ReactionTimer from '../components/games/ReactionTimer';

const Home = () => {
  // References for scroll percentage calculations
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  // State to track scroll progress for sections
  const [scrollPercentages, setScrollPercentages] = useState({
    about: 0,
    skills: 0,
  }); 

  // Scroll listener to calculate scroll percentages for each section
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get current scroll position

      // Calculate scroll percentage for each section
      const aboutScrollPercentage = ((scrollTop - aboutRef.current.offsetTop) / (aboutRef.current.offsetHeight)) * 100;
      const skillsScrollPercentage = ((scrollTop - skillsRef.current.offsetTop) / (skillsRef.current.offsetHeight)) * 100;

      // Update state with new scroll percentages
      setScrollPercentages({
        about: aboutScrollPercentage,
        skills: skillsScrollPercentage,
      });
    };

    // Add scroll listener to window
    window.addEventListener('scroll', handleScroll); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // State to track game list visibility and active game
  const [showGameList, setShowGameList] = useState(false);  // Toggle game list visibility
  const [activeGame, setActiveGame] = useState(null);   // Track active game
  const [keySequence, setKeySequence] = useState([]);   // Track key sequence for game selection

  // Listen for key presses to trigger game selection
  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toLowerCase();  // Convert key to lowercase
      const updatedSequence = keySequence + key;  // Update key sequence with new key
      
      // Valid games to select from
      const validGames = {
        games: "games",
        guess: "guess",
        "2048": "2048",
        hanoi: "hanoi", 
        simon: "simon",
        reaction: "reaction",
      };

      // Check if key sequence matches a valid game
      if (updatedSequence === "games") {
        setShowGameList(true); // Show game list
        setKeySequence(""); // Reset key sequence
        return;
      }
  
      // Find matching game based on key sequence
      const matchingGame = Object.keys(validGames).find(
        (game) => updatedSequence === game
      );
  
      if (matchingGame) {
        setActiveGame(matchingGame); // Set active game
        setKeySequence(""); // Reset key sequence
      } else if (!Object.keys(validGames).some((game) => game.startsWith(updatedSequence))) {
        setKeySequence(""); // Reset key sequence if no match
      } else {
        setKeySequence(updatedSequence);  // Update key sequence
      }
    };
  
    // Add key press listener to window
    window.addEventListener("keydown", handleKeyPress);
  
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [keySequence]);

  return (
    <>
      <Header />
      <main id='content' className={Container}>

        { /* About Section */}
        <section id='about' className={Section} ref={aboutRef}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>About</h2>
            <ScrollIndicator scrollPercentages={scrollPercentages.about.toFixed(2)} />
          </div>
          <About/>
        </section>
        
        { /* Skills Section */}
        <section id='skills' className={Section} ref={skillsRef}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Skills</h2>
            <ScrollIndicator scrollPercentages={scrollPercentages.skills.toFixed(2)} />
          </div>
          <Skills />
        </section>

        { /* Footer Section */}
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

      {/* Render the game list if "games" is typed */}
      {showGameList && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-900/80 z-50">
          <div className="bg-slate-800 text-slate-200 p-8 rounded-lg shadow-lg border border-blue-300 max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4">MiniGames 👾</h2>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => setActiveGame("guess")}
                className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-lg"
              >
                Number Guessing Game
              </button>
              <button
                onClick={() => setActiveGame("2048")}
                className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-lg"
              >
                2048
              </button>
              <button
                onClick={() => setActiveGame("hanoi")}
                className="bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-lg"
              >
                Tower of Hanoi
              </button>
              <button
                onClick={() => setActiveGame("simon")}
                className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-lg"
              >
                Simon Says
              </button>
              <button
                onClick={() => setActiveGame("reaction")}
                className="bg-purple-500 hover:bg-purple-400 px-4 py-2 rounded-lg"
              >
                Reaction Timer
              </button>
            </div>
            <button
              onClick={() => setShowGameList(false)}
              className="mt-8 bg-gray-500 hover:bg-gray-400 px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Render active game based on state */}
      { activeGame === "guess" && ( <NumberGuessingGame onClose={() => setActiveGame(null)} /> )}
      { activeGame === "2048" && <Game2048 onClose={() => setActiveGame(null)} />}
      { activeGame === "hanoi" && ( <TowerOfHanoi onClose={() => setActiveGame(null)} /> )}
      { activeGame === "simon" && ( <SimonSays onClose={() => setActiveGame(null)} /> )}
      { activeGame === "reaction" && ( <ReactionTimer onClose={() => setActiveGame(null)} /> )}
    </>
  )
}

export default Home;