import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

export default function Footer() {
    return (
        <BrowserRouter>
            <footer className="page-footer font-small unique-color-dark">
                <div style={{backgroundColor: '#2E3133'}}>
                    <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                    {/* <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 className="mb-0">Get connected with us on social networks!</h6>
              </div> */}
              <div className="col-md-6 col-lg-7 text-center text-md-right">
              <Link className="fb-ic">
                  <i className="fa fa-facebook-f white-text mr-4"> </i>
                </Link>
                <Link className="fb-ic">
                <i class="fa fa-car mr-4"></i>
                </Link>
                <Link className="fb-ic">
                <i class="fa fa-car mr-4" ></i>
                </Link>
                <Link className="fb-ic">
                  <i className="fa fa-instagram white-text mr-4"> </i>
                </Link>
              </div>
                    </div>
                    </div>
                </div>
                {/* <div className="container text-center text-md-left mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            
                        </div>
                    </div>
                </div> */}
                <div className="footer-copyright text-center py-3 bg-dark ">© 2020 Copyright:
    <Link to="#">Shakil Ahmed</Link>
  </div>
            </footer>
        </BrowserRouter>
    )
}
