// components are like functions that returns HTML Elements. 

/** React component are two types:
 *  Class Components
 * Function components 
 * important note: the component's name must start with "upper case" letter*/

// creating a class component

class Contact extends React.Component {
    render() {
        return(
            <div className="contact-form">
                <h2> Contact Me</h2>
                <form className ="ui form">
                    <label>username: </label>
                    <input type="text" name="username"/><br/>
                    <label>Email: </label>
                    <input type="text" name="email"/> <br/>
                    <button className="btn">Submit</button>
                </form>
            </div>
        );

    }
}

export default Contact;
// call is modulename in app.js : <Contact/>
// ReactDOM.render(<Contact />, document.getElementById('abc'));


//creating function component 

const Navbar = () => {
    return(
        <nav className="navbar">
            {/* main menu links */}
            <div className= "menu-link">
                <ul>
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link className="active" to="/contact">Contact</Link></li>
                    <li><Link to="/academic">Academic</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><a href="https://www.linkedin.com/in/purnimagurung/" target= "_purnima"><FaLinkedin/></a></li>
                    <li><a href="https://github.com/purnimagurung" target="_purnima"><FaGithub/></a></li>
                </ul>
            </div>
         </nav>
    );
}
export default Navbar;

/** component Constructor
 * 
 * 
 * creating constructor function in the Footer Component , add a color property   */ 

class Footer extends React.Component {
    constructor() {
      super(); // super() inheritance all the function of parent component (React.Component) to ur component
      this.state = {color: "green"}; // component properties are kept in an " state" object. - color is the property and state in the object where property is kept.
    }
    render() {
      return <h2>This is a footer!</h2>;
    }
  }