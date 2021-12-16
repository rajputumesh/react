import React, { Component } from 'react';
import logo from '../img/logo.svg';
import chat from '../img/illustrations/chat.png';
import star from '../img/svg/illustrations/star.svg';
import starhalf from '../img/svg/brands/amazon-white-50.svg';
import amazonwhite from '../img/svg/brands/amazon-white-50.svg';
import airbnbwhite from '../img/svg/brands/airbnb-white-50.svg';
import googlewhite from '../img/svg/brands/google-white-50.svg';
import shape1 from '../img/svg/components/shape-1-soft-light.svg';
import shape2 from '../img/svg/components/shape-2-soft-light.svg';
import shape3 from '../img/svg/components/shape-3-soft-light.svg';
import '../css/style.css';
import '../css/bootstrap.min.css';

class Home extends Component {
    render() {
        return (
            <div className="homebar">
                <div className="bg-primary-dark space-y position-relative overflow-hidden ">
                    <div className="container ">
                        <div className="row justify-content-center align-items-lg-center py-lg-3 ">
                            <div className="col-md-8 col-lg-6 mb-7 mb-lg-0 my-lg-0 my-sm-5 ">
                                <h1 className="heading-1">Solving problems for every
                                    <span className="animateslider text-warning"></span>
                                </h1>
                                <h4 className="text-white-70 py-4 py-4 ">
                                    Built on standard web technology, teams use Space to build beautiful cross-platform hybrid apps in a fraction of the time.
                                </h4>
                                <div className="row">
                                    <div className="col-sm-6 mb-3 mb-sm-0 ">
                                        <div className="d-flex ">
                                            <div className="flex-shrink-0 ">
                                                <span className="svg-icon text-white ">
                                                    <svg width="24 " height="24 " viewBox="0 0 24 24 " fill="none " xmlns="http://www.w3.org/2000/svg ">
                                                        <path fill-rule="evenodd " clip-rule="evenodd " d="M22.1671 18.1421C22.4827 18.4577 23.0222 18.2331 23.0206 17.7868L23.0039 13.1053V5.52632C23.0039 4.13107 21.8729 3 20.4776 3H8.68815C7.2929 3 6.16183 4.13107 6.16183
                                                            5.52632V9H13C14.6568 9 16 10.3431 16 12V15.6316H19.6565L22.1671 18.1421Z " fill="#035A4B "></path>
                                                        <path opacity="0.3 " fill-rule="evenodd " clip-rule="evenodd " d="M1.98508 18V13C1.98508 11.8954 2.88051 11 3.98508 11H11.9851C13.0896 11 13.9851 11.8954 13.9851 13V18C13.9851 19.1046 13.0896 20 11.9851 20H4.10081L2.85695
                                                            21.1905C2.53895 21.4949 2.01123 21.2695 2.01123 20.8293V18.3243C1.99402 18.2187 1.98508 18.1104 1.98508 18ZM5.99999 14.5C5.99999 14.2239 6.22385 14 6.49999 14H11.5C11.7761 14 12 14.2239 12 14.5C12 14.7761 11.7761 15 11.5 15H6.49999C6.22385
                                                            15 5.99999 14.7761 5.99999 14.5ZM9.49999 16C9.22385 16 8.99999 16.2239 8.99999 16.5C8.99999 16.7761 9.22385 17 9.49999 17H11.5C11.7761 17 12 16.7761 12 16.5C12 16.2239 11.7761 16 11.5 16H9.49999Z " fill="#035A4B "></path>
                                                    </svg>

                                                </span>
                                            </div>

                                            <div className="flex-grow-1 ml-4 ">
                                                <h6 className="text-white mb-0 ">24 hours</h6>
                                                <p className="text-white-70 ">Response time</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 ">
                                        <div className="d-flex ">
                                            <div className="flex-shrink-0 ">
                                                <span className="svg-icon text-white ">
                                                    <svg width="24 " height="24 " viewBox="0 0 24 24 " fill="none " xmlns="http://www.w3.org/2000/svg ">
                                                        <path opacity="0.3 " d="M4.875 20.75C4.63542 20.75 4.39583 20.6542 4.20417 20.4625L2.2875 18.5458C1.90417 18.1625 1.90417 17.5875 2.2875 17.2042C2.67083 16.8208 3.29375 16.8208 3.62917 17.2042L4.875 18.45L8.0375 15.2875C8.42083
                                                            14.9042 8.99583 14.9042 9.37917 15.2875C9.7625 15.6708 9.7625 16.2458 9.37917 16.6292L5.54583 20.4625C5.35417 20.6542 5.11458 20.75 4.875 20.75Z " fill="#035A4B "></path>
                                                        <path fill-rule="evenodd " clip-rule="evenodd " d="M5 3C3.34315 3 2 4.34315 2 6V11.865C3.04486 11.3127 4.23591 11 5.5 11C9.47412 11 12.7263 14.091 12.9836 18H18.0249L20.3178 20.2929C20.9478 20.9229 22.0249 20.4767
                                                            22.0249 19.5858V15L22 15.0098L22 15V6C22 4.34315 20.6569 3 19 3H5ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44771 9 6 9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7H6Z " fill="#035A4B "></path>
                                                    </svg>

                                                </span>
                                            </div>

                                            <div className="flex-grow-1 ml-4 ">
                                                <h6 className="text-white mb-0 ">92%</h6>
                                                <p className="text-white-70 ">Satisfaction rate</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8 col-lg-6 ">
                                <div className="py-lg-5 m-2 ">
                                    <div className="card ">
                                        <div className="card-body ">
                                            <div className="row align-items-sm-center mb-5 ">
                                                <div className="col-sm-12 col-lg-4 order-sm-2 mb-3 mb-sm-0 ">
                                                    <img className="avatar img-fluid " src={chat} alt="Image Description " />
                                                </div>

                                                <div className="col-sm-12 col-lg-8 ">
                                                    <h5 className="card-title ">Join Space</h5>
                                                    <p className="card-text ">Hundreds of companies using Space to build their business.</p>
                                                </div>
                                            </div>

                                            <form>
                                                <div className="mb-4 ">
                                                    <label className="form-label " for="registerEmail ">Your name</label>
                                                    <input type="text " className="form-control form-control-lg " name="name " id="registerName " placeholder="Type your name " aria-label="Type your name " required=" " data-msg="Please enter your name. " />
                                                </div>
                                                <div className="mb-4 ">
                                                    <label className="form-label " for="registerEmail ">Your email</label>
                                                    <input type="email " className="form-control form-control-lg " name="email " id="registerEmail " placeholder="example@site.com " aria-label="example@site.com " required=" " data-msg="Please enter a valid email address. " />
                                                </div>

                                                <div className="mb-4 ">
                                                    <label className="form-label " for="registerEmail ">Company Size</label>

                                                    <div className="row ">
                                                        <div className="col-sm mb-4 mb-sm-0 ">
                                                            <label className="form-control form-control-lg " for="registerRadio1 ">
                                                                <span className="form-check form-check-custom ">
                                                                    <input className="form-check-input " name="registerRadio " id="registerRadio1 " checked=" " type="radio" />
                                                                    <span className="form-check-label ">1-10</span>
                                                                </span>
                                                            </label>
                                                        </div>

                                                        <div className="col-sm ">
                                                            <label className="form-control form-control-lg " for="registerRadio2 ">
                                                                <span className="form-check form-check-custom ">
                                                                    <input className="form-check-input " name="registerRadio " id="registerRadio2 " type="radio" />
                                                                    <span className="form-check-label ">More than 10</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-grid text-center ">
                                                    <button type="submit " className="btn btn-success btn-lg btn-block ">Start your free 30-days trial</button>
                                                    <span className="form-text ">Need help? <a className="link " href="">Visit our Help Center <i className="bi-chevron-right small ms-1 "></i></a></span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-top border-white-10 my-10 "></div>
                        <div className="row ">
                            <div className="col-lg-4 col-sm-12 pb-5 mb-sm-0 ">
                                
                                <div className="d-flex gap-1 mb-2 ">
                                    <img src={star} alt="Review rating " width="16" />
                                    <img src={star} alt="Review rating " width="16" />
                                    <img src={star} alt="Review rating " width="16" />
                                    <img src={star} alt="Review rating " width="16" />
                                    <img src={star} alt="Review rating " width="16" />
                                </div>

                                <blockquote className="blockquote blockquote-sm text-white mb-4 ">“ This is a beautiful template with exciting components. ”</blockquote>

                                <img className="avatar avatar-lg avatar-4x3 " src={amazonwhite} alt="Logo "/>
                            </div>

                            <div className="col-lg-4 col-sm-12 pb-5 mb-sm-0 ">
                                
                                <div className="d-flex gap-1 mb-2 ">
                                    <img src={star} alt="Review rating " width="16" />
                                    <img src={star} alt="Review rating " width="16" />
                                    <img src={star} alt="Review rating " width="16" />
                                    <img src={star} alt="Review rating " width="16" />
                                    <img src={starhalf} alt="Review rating " width="16" />
                                </div>

                                <blockquote className="blockquote blockquote-sm text-white mb-4 ">“ The best template I've ever come across. ”</blockquote>

                                <img className="avatar avatar-lg avatar-4x3" src={airbnbwhite} alt="Logo " />
                            </div>

                            <div className="col-lg-4 col-sm-12 pb-5 ">
                                
                                <div className="d-flex gap-1 mb-2 ">
                                    <img src={star} alt="Review rating " width="16" />
                                    <img src={star} alt="Review rating " width="16" />
                                    <img src={star} alt="Review rating " width="16" />
                                    <img src={star} alt="Review rating " width="16" />
                                    <img src={starhalf} alt="Review rating " width="16" />
                                </div>
                                

                                <blockquote className="blockquote blockquote-sm text-white mb-4 ">“ There one theme is everything that user wants.”</blockquote>

                                <img className="avatar avatar-lg avatar-4x3 " src={googlewhite} alt="Logo " />
                            </div>
                            
                        </div>
                    </div>

                    <div className="position-absolute top-0 end-0 ">
                        <img src={shape3} alt="SVG " width="500" />
                    </div>
                    <div className="position-absolute bottom-0 end-0 me-10 ">
                        <img src={shape1} alt="SVG " width="250" />
                    </div>
                    <div className="position-absolute bottom-0 start-0 ">
                        <img src={shape2} alt="SVG " width="400" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
