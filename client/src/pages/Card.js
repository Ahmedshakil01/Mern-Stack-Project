import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import Data, { data } from "./Data";
import './CardCss.css'

 class Card extends Component {
    constructor(){
        super();
        this.state={
            data : Data,
            feature: false
            
        };
    }
   feature = () => {
       this.setState({feature : !this.state.feature})
   }



    render() {
        //console.log(this.state.data)
        const menu = this.state.data.map((item)=>{
            return(
                <BrowserRouter>
                <div className="container">
                    <h1>Featured Hosting Plans</h1>
                    <p className="sub-head">Featured Hosting Plans</p>
                    <div className="card-head">
                        <ul className="card-u">
                            <li><Link onClick={() => this.feature()}>Featured</Link></li>
                            <li><Link>Online Beginner</Link></li>
                            <li><Link>Small Business</Link></li>
                        
                        </ul>
                    </div>
                    {
                        this.state.feature ? 
                        (
                            <div className="row">
                    
                    <div className="col-lg-4 col-md-6 card-body">
                        <div className="single-pricing best-deal">
                        <div className="label-area">
                            <span>Popular</span>
                        </div>
                            <div className="head-text">
                                <h3>Standard</h3>
                            </div>
                            <div className="price-area">
                                $11<span class="duration">Per month</span>
                            </div><div className="feature-area">
                                <ul>
                                <li>{}</li>
                                    <li>{item.regular.one.title}</li>
                                    <li>{item.regular.one.price}</li>
                                    <li>{item.regular.one.billingCode}</li>
                                    <li>{item.regular.one.priceOverview}</li>
                                   
                                </ul>
                            </div>
                            <div className="btn-area">
                                <a href="#" >Get started</a>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing">
                            <div className="head-text">
                                <h3>Basic</h3>
                            </div>
                            <div className="price-area">
                                $11<span class="duration">Per day</span>
                            </div><div className="feature-area">
                                <ul>
                                <li>{item.regular.two.title}</li>
                                <li>{item.regular.two.price}</li>
                                <li>{item.regular.two.billingCode}</li>
                                <li>{item.regular.two.priceOverview}</li>
                                   
                                </ul>
                            </div>
                            <div className="btn-area">
                                <a href="#">Choose Plan</a>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing">
                            <div className="head-text">
                                <h3>Basic</h3>
                            </div>
                            <div className="price-area">
                                $11<span class="duration">Per day</span>
                            </div><div className="feature-area">
                                <ul>
                                <li>{item.regular.three.title}</li>
                                <li>{item.regular.three.price}</li>
                                <li>{item.regular.three.billingCode}</li>
                                <li>{item.regular.three.priceOverview}</li>
                                   
                                </ul>
                            </div>
                            <div className="btn-area">
                                <a href="#">Choose Plan</a>
                            </div>

                        </div>
                    </div>
                    
                </div>

                        ) : (
                            <div className="row">
                    
                    <div className="col-lg-4 col-md-6 card-body">
                        <div className="single-pricing best-deal">
                        <div className="label-area">
                            <span>Popular</span>
                        </div>
                            <div className="head-text">
                                <h3>Standard</h3>
                            </div>
                            <div className="price-area">
                                $11<span class="duration">Per month</span>
                            </div><div className="feature-area">
                                <ul>

                                    <li>{item.promo.one.title}</li>
                                    <li>{item.promo.one.price}</li>
                                <li>{item.promo.one.billingCode}</li>
                                <li>{item.promo.one.priceOverview}</li>
                                   
                                </ul>
                            </div>
                            <div className="btn-area">
                                <a href="#" >Get started</a>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing">
                            <div className="head-text">
                                <h3>Basic</h3>
                            </div>
                            <div className="price-area">
                                $11<span class="duration">Per day</span>
                            </div><div className="feature-area">
                                <ul>
                                <li>{item.promo.two.title}</li>
                                <li>{item.promo.two.price}</li>
                                <li>{item.promo.two.billingCode}</li>
                                <li>{item.promo.two.priceOverview}</li>
                                   
                                </ul>
                            </div>
                            <div className="btn-area">
                                <a href="#">Choose Plan</a>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing">
                            <div className="head-text">
                                <h3>Basic</h3>
                            </div>
                            <div className="price-area">
                                $11<span class="duration">Per day</span>
                            </div><div className="feature-area">
                                <ul>
                                <li>{item.promo.three.title}</li>
                                <li>{item.promo.three.price}</li>
                                <li>{item.promo.three.billingCode}</li>
                                <li>{item.promo.three.priceOverview}</li>
                                   
                                </ul>
                            </div>
                            <div className="btn-area">
                                <a href="#">Choose Plan</a>
                            </div>

                        </div>
                    </div>
                </div>
                            
                        )
                    }
               
                </div>
                </BrowserRouter>
            );
        });
        return (
           <div className="container">
               <div className="row">
                   {menu}
               </div>
           </div>
            
        )
    }
}

export default Card
