import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AppleSvg } from '../asset/apple.svg';
import { ReactComponent as GooglePlaySvg } from '../asset/google-play.svg';
import { ReactComponent as ShoppingCartSvg } from '../asset/shopping-cart1.svg';
import { ReactComponent as StarSvg } from '../asset/star.svg';
import { ReactComponent as TwitterSvg } from '../asset/twitter.svg';
import { ReactComponent as FaceBookSvg } from '../asset/facebook.svg';
import "./footer.styles.css";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";





const Footer = () => (
        <footer>
            <div className="block2" id="inside2">
                <div className="about">
                    <span> ABOUT NGStoreboy</span>
                    <span> About us</span>
                    <span> NGStoreboy careers</span>
                    <span> NGStoreboy Express</span>
                    <span> Terms and Conditions</span>
                    <span> Privacy and Cookie Notice</span>
                    <span> NGStoreboy Prime</span>
                    <span> NGStoreboy Global</span>
                    <span> NGStoreboy Black Friday</span>
                </div>
                <div className="make-money">
                    <div className="inner-block1">
                        <span>MAKE MONEY WITH NGStoreboy</span>
                        <span>Sell on NGStoreboy</span>
                        <span>Become a Sales Consultant</span>
                        <span>Become a NGStoreboy Vendor Service Provider</span>
                        <span>Become a Logistics Service Partner</span>
                        <span>Join the NGStoreboy DA Academy</span>
                        <span>Join the NGStoreboy KOL Program</span>
                    </div>
                    <div className="inner-block2">
                        <span>Lets us fix it</span>
                        <span>Help center</span>
                        <span>How to shon on NGStoreboy</span>
                        <span>Delivery options and timeline</span>
                        <span>How to return products on NGStoreboy</span>
                        <span>Coperate and bulk purchase</span>
                        <span>Report a product</span>
                        <span>ship your package anywhere in nigeria</span>


                    </div>
                </div>
                <div className="countries">
                    <span>NGStoreboy INTERNATIONAL</span>
                    <div className="names">
                        <span>Algeria</span>
                        <span>Egypt</span>
                        <span>Ghana</span>
                    </div>
                </div>
            </div>
            <div className="block3" id="inside3">
                <div className="recognition">
                    <span>JOin Us On Social Media</span>
                    <div className="inner-block1">
                        <span><a className="" href="{% url 'core_:contact' %}"><GooglePlaySvg className="logo google-play" /></a></span>
                        <span><a href="{% url 'core_:contact' %}"><GooglePlaySvg className="logo google-play" /></a></span>
                        <span><a className="" href="{% url 'core_:contact' %}"><GooglePlaySvg className="logo google-play" /></a></span>
                        <span><a href="{% url 'core_:contact' %}"><GooglePlaySvg className="logo google-play" /></a></span>
                    </div>
                </div>
                <div className="social-icons">
                    <span>Payment Methods & Delivery Partners</span>
                    <div className="inner-block1">
                        <span><a className="" href="{% url 'core_:contact' %}"><TwitterSvg className="logo twitter" /></a></span>
                        <span><a href="{% url 'core_:contact' %}"><FaceBookSvg className="logo facebook" /></a></span>
                        <span><a href="{% url 'core_:contact' %}"><TwitterSvg className="logo twitter" /></a></span>
                        <span><a href="{% url 'core_:contact' %}"><FaceBookSvg className="logo facebook" /></a></span>
                        <span><a href="{% url 'core_:contact' %}"><TwitterSvg className="logo twitter" /></a></span>
                        <span><a href="{% url 'core_:contact' %}"><FaceBookSvg className="logo facebook" /></a></span>
                        <span><a href="{% url 'core_:contact' %}"><TwitterSvg className="logo twitter" /></a></span>
                        <span><a href="{% url 'core_:contact' %}"><FaceBookSvg className="logo facebook" /></a></span>

                    </div>
                </div>
            </div>
        </footer>
    )
export default Footer;