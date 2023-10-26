import { Navbar } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        {/* <!-- navbar --> */}
        <Navbar expand="lg" variant='dark' bg='warning'>
          <div className="container">
            <a href="#" className="navbar-brand"><img src={require('./assets/logo.png')} alt="logo" width="125rem" /></a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mine">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mine">
              <ul className="navbar-nav">
                <li className="nav-item"><a href="file:///C:/Users/Bhuvana/OneDrive/Desktop/booTsTrap/componenTs/trials/index.html#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="file:///C:/Users/Bhuvana/OneDrive/Desktop/booTsTrap/componenTs/trials/about.html" className="nav-link">About</a></li>
                <li className="nav-item"><a href="file:///C:/Users/Bhuvana/OneDrive/Desktop/booTsTrap/componenTs/trials/contact.html" className="nav-link">Contact</a></li>
                <li className="nav-item dropdown"><a href="#" className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown">Follow us on</a>
                  <ul className="dropdown-menu bg-secondary">
                    <li className="dropdown-item">Whatsapp</li>
                    <li className="dropdown-item">Facebook</li>
                    <li className="dropdown-item">Instagram</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="float-end">
              <button className="btn btn-danger">Login</button>
            </div>
          </div>
        </Navbar>
        {/* <!-- end of navbar --> */}

        {/* <!-- alert --> */}
        <div className="container-fluid my-2">
          <div className="alert bg-light alert-dismissible align">
            <button className="btn-close" data-bs-dismiss="alert"></button>
            New batch will starts on <span className="badge text-bg-info btnn">June 18th</span>
            Limited seats only! <span><a href="#" className="alert-link linki"> Book your seats here</a></span>
          </div>
        </div>
        {/* <!-- end of alert --> */}

        {/* <!-- horizontal card --> */}
        <div className="container my-5">
          <div className="card">
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center">
                <div className="card-body">
                  <h2 id="header1" className="d-flex justify-content-center">ATHER ENERGY</h2>
                  <div className='align12'>
                    <span className="badge text-bg-secondary">Go-Electric</span>
                    <span className="badge text-bg-secondary label">Ather motorcycles</span>
                  </div>
                  <p className='paraAlign'>Ather Energy is an Indian electric vehicle company, headquartered in Bangalore. It was
                    founded by Tarun Mehta and Swapnil Jain in 2013. It manufactures two electric scooters - the
                    Ather 450X and the Ather 450 Plus. It has also established electric vehicle charging
                    infrastructure across the country called Ather Grid.Ather Energy was founded in 2013 by
                    Tarun Mehta and Swapnil Jain.

                    In early 2014, it received ₹4.5 million (US$56,000) from the Technology Development Board
                    under Department of Science and Technology, IIT Madras and Srini V Srinivasan, IIT alumnus
                    and founder of Aerospike.[3] In December 2014, Flipkart founders, Sachin Bansal and Binny
                    Bansal invested $1 million as the seed capital.[4] In May 2015, it received $12 million from
                    Tiger Global for investments in development, testing, production and the launch of the
                    vehicle.[5]

                    On 23 February 2016, the company unveiled its first scooter S340 at a technology conference
                    Surge in Bengaluru.[6][7] Hero MotoCorp invested ₹180 crore (U
                  </p>
                  <button className="btn btn-danger w-100">For Enquiry </button>
                </div>
              </div>
              <div className="col-md-8 d-flex justify-content-center">
                <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/04/Ather-450X-FI-1200x900.png"
                  width="850px" className="card-img" alt="ather" />
              </div>

            </div>
          </div>
        </div>
        {/* <!-- end of horizontal card --> */}

        {/* <!-- cards --> */}
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card">
                <img src={require('./assets/img1.jpg')} className="card-img" alt="" />
                <div className="card-header align">
                  <h4>Ather 450X</h4>
                </div>
                <div className="card-body">
                  <div className='align1'>
                    <span className="badge text-bg-secondary">Go-Electric</span>
                    <span className="badge text-bg-secondary label">Go-Electric</span>
                  </div>
                  <p className='paraAlign'>
                    Ex-Showroom Price: ₹1.33 lakhs - ₹1.52 lakhs
                    Curb weight: 108 kg
                    Max speed: 80 km/h
                    Driving range: 85 km/full charge
                    Seat height: 780 mm
                    Battery: 51.1 V 56.75 Ah Lithium Ion
                    Color options: White, Space Grey, Mint Green
                  </p>
                  <button className="btn btn-danger align">Book a ride</button>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card">
                <img src={require('./assets/img2.jpg')} className="card-img img1" alt="" />
                <div className="card-header align">
                  <h4>Ather 450X</h4>
                </div>
                <div className="card-body">
                  <div className='align1'>
                    <span className="badge text-bg-secondary">Go-Electric</span>
                    <span className="badge text-bg-secondary label">Go-Electric</span>
                  </div>
                  <p className='paraAlign'>
                    Ex-Showroom Price: ₹1.33 lakhs - ₹1.52 lakhs
                    Curb weight: 108 kg
                    Max speed: 80 km/h
                    Driving range: 85 km/full charge
                    Seat height: 780 mm
                    Battery: 51.1 V 56.75 Ah Lithium Ion
                    Color options: White, Space Grey, Mint Green
                  </p>
                  <button className="btn btn-danger align">Book a ride</button>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card cards">
                <img src={require('./assets/img3.jpg')} className="card-img img1" alt="" />
                <div className="card-header align">
                  <h4>Ather 450X</h4>
                </div>
                <div className="card-body">
                  <div className='align1'>
                    <span className="badge text-bg-secondary">Go-Electric</span>
                    <span className="badge text-bg-secondary label">Go-Electric</span>
                  </div>
                  <p className='paraAlign'>
                    Ex-Showroom Price: ₹1.33 lakhs - ₹1.52 lakhs
                    Curb weight: 108 kg
                    Max speed: 80 km/h
                    Driving range: 85 km/full charge
                    Seat height: 780 mm
                    Battery: 51.1 V 56.75 Ah Lithium Ion
                    Color options: White, Space Grey, Mint Green
                  </p>
                  <button className="btn btn-danger align">Book a ride</button>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end of cards --> */}
      </div>

      <hr id='horule' />

      {/* <!-- fooTer --> */}
    <footer  class="footerContainer"    >
        <div class="row">
            <div class="col-md-4 footer">
                <img src={require('./assets/ather.png')} alt="footerImg" class="footerImg" />
            </div>
            <div class="col-md-4 footer">   
                <ul>
                <h6 id='foohad'>Contact Us</h6>
                    <li class="liFooter">38, Gotham city, US</li>
                    <li class="liFooter">you@awesome.com</li>
                </ul>
            </div>
            <div class="col-md-4 footer">
                <ul>
                    <h6 id='foohad'>Follow Us On</h6>
                    <li class="liFooterfoo">
                        <span><img src={require('./assets/youtube (3).png')} alt="" class="iconFooter" /></span>
                        <span><img src={require('./assets/facebook (4).png')} alt="" class="iconFooter" /></span>
                        <span><img src={require('./assets/instagram (2).png')} alt="" class="iconFooter" /></span>
                        <span><img src={require('./assets/twitter (3).png')} alt="" class="iconFooter" /></span>
                    </li>
                </ul>
            </div>
        </div>
        {/* <!-- <p class="text-center">Copyrights @ 2022-2023. All rights reserved.</p> --> */}
    </footer>
    {/* <!-- end of fooTer --> */}
    </div>
  );
}

export default App;
