import './App.css';
import { AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header>
          <span id="logo-wrap">
            <img src="./ucp-cog.png" alt="Site is Under Construction" title="Site is Under Construction" id="logo"></img>
          </span>
        </header>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-md-12 col-lg-12">
              <h1 className='h1'>Sorry, we're doing some work on the site</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-offset-2 col-lg-8">
              <p className="content">Thank you for being patient. We are doing some work on the site and will be back shortly.</p>
            </div>
          </div>

          <div className="row" id="social">
            <div className="col-xs-12 col-md-12 col-lg-12">


              <div className='ml-2 mr-2'>
                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.facebook.com/instibuddyapp/" target="_blank" and rel="noopener noreferrer">
                  <AiFillFacebook className='social' />
                </a>
              </div>
              <div className='ml-2 mr-2'>
                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://twitter.com/instibuddyapp/" target="_blank" and rel="noopener noreferrer">
                  < AiFillTwitterSquare  className='social'/>
                </a>
              </div>
              <div className='ml-2 mr-2'>
                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.instagram.com/instibuddyapp/" target="_blank" and rel="noopener noreferrer">
                  <AiFillInstagram  className='social'/>
                </a>
              </div>
              <div className='ml-2 mr-2'>
                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.linkedin.com/company/instibuddyapp" target="_blank" and rel="noopener noreferrer">
                  <AiFillLinkedin  className='social'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
