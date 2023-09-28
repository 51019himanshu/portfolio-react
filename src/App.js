
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Contact from './components/contact';
import './App.css';
// import Alert from './components/Alert';





function MyComponent() {
  useEffect(() => {
    const typed = new Typed('#element', {
      strings: [
        'Web Developer.^500',
        'FrontEnd Developer.^500',
      ],
      typeSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []); // Run this effect once when the component mounts

  return <div id="element"></div>;
}
function App() {

  // // Alert state
  // const [alert, setAlert] = useState(null);

  // // creating method for alert and we will make alert as an object because we want to pass both messages and type
  // const showAlert = (message, type) => {
  //   // creating object
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   // adding time out so that the alert message will automatically vanishes after sometime and I also removed the close button from the Alert.js component
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1000); //timeout seconds in miliseconds
  // }

  return (
    <div>
      <header>
        <nav>
          <div className="left">Himanshu Sanga Portfolio</div>
          <div className="right">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* <Alert alert={alert} /> */}

      <main>
        <section className="firstSection" id="home">
          <div className="leftSection">
            Hi! My name is <span className="purple">Himanshu Sanga</span>
            <div>and I am a Passionate</div>
            <span id="element"><MyComponent /></span>
            <div className="mainbtn">
              <button className="mybtn resumebtn">
                <img src="/resumepng.png" alt="" />
                <a href="/Himanshu Sanga (3).pdf" download>Download Resume</a>
              </button>
              <button className="mybtn">
                <img src="/linkedin.png" alt="" />
                <a href="https://www.linkedin.com/in/himanshu-sanga-970a05172/"
                >Linkedin</a
                >
              </button>
            </div>
          </div>
          <div className="rightSection">
            <img src="/main.png" alt="webdevelopergif" />
          </div>
        </section>
        <hr />
        <section className="secondSection" id="about">
          <div className="aboutmeinfo">
            <h1>About</h1>
            <p>
              Experienced Electronics and Communication Engineer with a passion
              for web development and a strong interest in IT. Skilled in
              programming, problem-solving, and teamwork, I'm looking to leverage
              my abilities in the IT industry to contribute to innovative projects
              and embrace ongoing learning. As a self-taught Frontend Developer, I
              have proficiency in React, JavaScript, Bootstrap, CSS, HTML, Git,
              and GitHub, and I'm eager to secure a role in Frontend or Web
              Development to further develop my skills and make a meaningful
              impact.
            </p>
          </div>
          <div className="imagecontainer">
            <img className="img1" src="/aboutme.png" alt="" />
            <img className='img2' src="/aboutmebackground.jpg" alt="" />
          </div>
        </section>
        <div className='secondhr'>
          <hr />
        </div>
        <section className="thirdSection" id="projects">
          <h1>Projects</h1>
          <div className="mainbox">
            <div className="box">
              <div className="verticalline line1">
                <img src="/responsivewebsite.png" alt="" id='responsivepng' />
                <div className="project1">
                  Responsive Website
                  <span>(IEducate)</span>
                </div>
                <div className="project1description">
                  <img id="#gif" src="/responsive.gif" alt="" />
                  A responsive webpage by using HTML,CSS and JS and also added the
                  Hamburger Menu and Sticky Navbar for better view and easy
                  navigation.
                </div>
              </div>
              <div className="verticalline line2">
                <img src="/textutils.png" alt="" id='textutilspng'/>
                <div className="project2">
                  TextUtility Website
                  <span>(To modify your texts)</span>
                </div>
                <div className="project2description">
                  <img id="#gif" src="/textanalyzer.gif" alt=""/>
                  Website created with the help of CSS, HTML, JS and React JS is
                  used to modify your texts and change it to desired result with
                  the help of given options you can also use dark mode and light
                  mode for this website. You can modify your texts to Upper Case,
                  Lower Case, Capitalize every first letter in your text words,
                  and many more by just one click.
                </div>
              </div>
              <div className="verticalline line3">
                <img src="/spotify.png" alt="" id='spotifypng'/>
                <div className="project3">Spotify Clone</div>
                <div className="project3description">
                  <img id="#gif" src="/spotify.gif" alt="" />
                  A place where you can listen all your favorite song.
                </div>
              </div>
              <div className="verticalline line4">
                <img src="/calculator.png" alt="" id='calculatorpng'/>
                <div className="project4">Simple Calculator</div>
                <div className="project4description">
                  <img id="#gif" src="/calculater.gif" alt="" />
                  This is the simple calculator to add,
                  subtract, divide and many other options to increase the
                  productivity of your work
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="thirdhr">
        <hr />
      </div>
      <section className="contacts" id="contact">
        <div className="textabovecontactform">
          <h2 className="contact-us">Get in touch</h2>
        </div>
        <Contact />
      </section>

      <footer className="footer-text">
        <p>- Made by Himanshu Sanga - &copy; 2023</p>
      </footer>
    </div>
  );
}


export default App

