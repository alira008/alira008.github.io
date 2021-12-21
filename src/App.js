import NavBar from "./components/TopNav";
import Card from "./components/Card";
import SideBar from "./components/SideBar";

const TwitterCloneContent = {
  title: "Twitter Clone",
  description:
    "A web application that imitates Twitter. Users can create accounts, follow other users, and post content on their profile.",
  stacks: ["React", "Express", "Styled Components", "MySQL", "Typescript"],
  link: "https://github.com/alira008/TwitterClone",
  image: "assets/twitter-clone.png",
};

const WeatherAppContent = {
  title: "Weather Web App",
  description:
    "Shows weather for any city the user searches for. I used Nodejs and JSON server to test API calls on my computer before using a production.",
  stacks: ["Angular", "Typescript", "ATMega1284"],
  link: "https://github.com/alira008/WeatherWebApp",
  image: "assets/WeatherApp.png",
};

const ShellProgramContent = {
  title: "My Shell Program",
  description:
    "Shell program similar to Bash and Zsh. Made using C++ and composite design patterns.",
  stacks: ["C++", "CMake", "Composite Design Patterns"],
  link: "https://github.com/alira008/Shell-Program",
  image: "assets/terminal.jpg",
};

const RCCarContent = {
  title: "RC Car",
  description:
    "RC Car that is controlled over a Bluetooth connection with USART using two ATMega1284 Microcontrollers.",
  stacks: ["C", "Make", "ATMega1284", "Bluetooth", "USART", "PWM"],
  link: "https://github.com/alira008/RC-Car",
  image: "assets/toy-car.jpg",
};

function App() {
  return (
    <>
      <NavBar />
      <SideBar>
        <ul>
          <li>
            <a
              href="https://github.com/alira008"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 inline-block hover:text-green-300 hover:-translate-y-1 transition-transform"
            >
              <i class="fab fa-github fa-lg" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ariel-lira-2456a71a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 inline-block hover:text-green-300 hover:-translate-y-1 transition-transform"
            >
              <i class="fab fa-linkedin-in fa-lg" />
            </a>
          </li>
        </ul>
      </SideBar>
      <SideBar right>
        <a
          href="mailto:ariellira.al@gmail.com"
          className="font-light font-mono text-sm vertical-rl p-3 inline-block hover:text-green-300 hover:-translate-y-1 transition-transform"
        >
          ariellira.al@gmail.com
        </a>
      </SideBar>
      <main className="w-full px-8 lg:px-40 text-slate-400 font-serif text-sm md:text-base">
        <section
          id="Home"
          className="flex flex-col mx-auto max-w-xl lg:max-w-5xl min-h-screen"
        >
          <div className="mt-36 md:mt-80 lg:mt-60 mb-4">
            <h1 className="font-sans text-sm md:text-lg lg:text-xl text-slate-300">
              Hi, my name is
            </h1>
          </div>
          <div className="mb-2 md:mb-4">
            <h2 className="font-sans text-5xl font-bold md:text-6xl lg:text-8xl text-green-300">
              Ariel Lira.
            </h2>
          </div>
          <div className="mb-5 md:mb-8">
            <h3 className="font-sans text-3xl font-bold md:text-4xl">
              I love web development and making software.
            </h3>
          </div>
          <div className="mb-14">
            <p>
              I'm a computer engineer and a highly capable full stack developer.
              I have a big interest in programming and love to look at all thing
              programming!
            </p>
          </div>
          <div>
            <a
              href="/assets/resume/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 rounded p-4 inline-block text-green-300 border-green-300 hover:bg-green-300 hover:bg-opacity-5"
            >
              Checkout my resume!
            </a>
          </div>
        </section>
        <section
          id="About"
          className="flex flex-col mx-auto max-w-xl lg:max-w-4xl py-14 lg:py-28"
        >
          <h2 className="font-sans mt-2 text-slate-200 font-bold mb-10 flex items-center text-2xl lg:text-4xl before:content-['01.'] before:font-mono before:font-light before:text-green-300 before:text-xl before:mr-2 after:ml-2 md:after:ml-3 lg:after:ml-5 after:w-32 md:after:w-64 lg:after:w-72 after:h-px after:bg-navy-100">
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 lg:gap-x-12 gap-6">
            <div className="col-span-2">
              <div className="flex flex-col gap-4">
                <p>
                  I am graduate from the University of California, Riverside
                  with a B.S. in Computer Engineering. I am a highly capable,
                  front-end developer with experience of back-end development. I
                  have a passionate interest in embedded systems and computer
                  security.
                </p>
                <p>
                  Tinkering with hardware and learning knew things in the world
                  of software engineering has always been a big interest for me.
                  Sometimes, I get lost and spend a whole afternoon watching
                  coding videos and articles about React, Python, and C++.
                </p>
                <p>
                  On top of this, I take time researching machine learning and
                  artificial intelligence after taking introduction classes for
                  each. I believe, my diverse background allows me to reach
                  solutions to issues from pragmatic angles.
                </p>
                <p>
                  On my free time, I love watching everything Star Wars, Marvel,
                  Lord of the Rings, Harry Potter, and DC Comics related
                  materials. My favorite movies are Lord of the Rings: Return of
                  the King and Star Wars Episode III: Revenge of the Sith. I
                  also love to play video games like League of Legends with my
                  high school friends. Catch me on the Rift!
                </p>
              </div>
            </div>
            <div className="w-64 h-64 justify-self-center lg:justify-self-auto mt-6 lg:mt-0 relative after:border-2 after:border-green-300 after:absolute after:block after:w-64 after:h-64 after:top-5 after:left-5 after:-z-10 before:border-2 before:border-green-300 before:absolute before:block before:w-64 before:h-64 before:-top-5 before:-left-5 before:-z-10">
              <div className="h-full w-full overflow-hidden">
                <img src="assets/Me.jpg" alt="Ariel Lira" />
              </div>
            </div>
          </div>
        </section>
        <section
          id="Skills"
          className="flex flex-col mx-auto max-w-xl lg:max-w-4xl py-14 lg:py-28"
        >
          <h2 className="font-sans mt-2 text-slate-200 font-bold mb-10 flex items-center text-2xl lg:text-4xl before:content-['02.'] before:font-mono before:font-light before:text-green-300 before:text-xl before:mr-2 after:ml-2 md:after:ml-3 lg:after:ml-5 after:w-20 md:after:w-64 lg:after:w-72 after:h-px after:bg-navy-100">
            Tech Experience
          </h2>
          <div className="col-span-3">
            <div className="grid grid-col-2 lg:grid-cols-3 gap-6 mt-4">
              <div>
                <h2 className="font-sans text-lg mb-1 text-slate-300">
                  Web Development
                </h2>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <li>React</li>
                  <li>Angular</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                  <li>Styled Components</li>
                </ul>
              </div>
              <div>
                <h2 className="font-sans text-lg mb-1 text-slate-300">
                  Server Side Development
                </h2>
                <ul className="grid grid-cols-1 gap-x-4 gap-y-1">
                  <li>Node.js</li>
                  <li>ASP.NET MVC</li>
                  <li>ASP.NET Web API</li>
                  <li>MySQL</li>
                  <li>SQL Server</li>
                </ul>
              </div>
              <div>
                <h2 className="font-sans text-lg mb-1 text-slate-300">
                  Software
                </h2>
                <ul className="grid grid-cols-1 gap-x-4 gap-y-1">
                  <li>C</li>
                  <li>C++</li>
                  <li>C#</li>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </div>
              <div>
                <h2 className="font-sans text-lg mb-1 text-slate-300">Tools</h2>
                <ul className="grid grid-cols-1 gap-x-4 gap-y-1">
                  <li>Git</li>
                  <li>Bash</li>
                  <li>FreeRTOS</li>
                  <li>Raspberry Pi</li>
                  <li>AVR MCUs</li>
                  <li>Jupyter Notebooks</li>
                </ul>
              </div>
              <div className="col-span-2">
                <h2 className="font-sans text-lg mb-1 text-slate-300">
                  Related Skills
                </h2>
                <ul className="grid grid-cols-1 gap-y-1">
                  <li>Multi-threaded Programming</li>
                  <li>Computer Networks</li>
                  <li>Machine Learning Concepts</li>
                  <li>Artificial Intelligence Concepts</li>
                  <li>Computer Security</li>
                  <li>Embedded Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          id="Projects"
          className="flex flex-col mx-auto max-w-xl lg:max-w-4xl py-14 lg:py-28"
        >
          <h2 className="font-sans mt-2 text-slate-200 font-bold mb-10 flex items-center text-2xl lg:text-4xl before:content-['03.'] before:font-mono before:font-light before:text-green-300 before:text-xl before:mr-2 after:ml-2 md:after:ml-3 lg:after:ml-5 after:w-8 md:after:w-64 lg:after:w-72 after:h-px after:bg-navy-100">
            Projects I Have Made
          </h2>
          <ul>
            <li className="grid grid-cols-1 md:grid-cols-11 mb-24">
              <Card {...TwitterCloneContent} />
            </li>
            <li className="grid grid-cols-1 md:grid-cols-11 mb-24">
              <Card {...WeatherAppContent} right />
            </li>
            <li className="grid grid-cols-1 md:grid-cols-11 mb-24">
              <Card {...ShellProgramContent} />
            </li>
            <li className="grid grid-cols-1 md:grid-cols-11">
              <Card {...RCCarContent} right />
            </li>
          </ul>
        </section>
        <section
          id="Contact"
          className="flex flex-col items-center mx-auto max-w-4xl py-14 lg:py-28"
        >
          <h2 className="font-sans mt-2 mb-10 text-slate-200 flex self-start md:self-auto items-center text-4xl before:content-['04.'] before:font-mono before:font-light before:bottom-1 before:text-green-300 before:text-xl before:mr-2">
            Get In Touch
          </h2>
          <p className="mb-12">
            Would you like to know more about me or just want to say hello?
          </p>
          <a
            className="border-2 rounded p-3 inline-block text-green-300 border-green-300"
            href="mailto:ariellira.al@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Say Hello
          </a>
        </section>
        <section className="flex flex-col items-center mx-auto max-w-4xl pt-14 lg:pt-28">
          <p className="mb-6">
            This site's design takes inspiration from{" "}
            <a
              href="https://brittanychiang.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300"
            >
              brittanychiang
            </a>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
