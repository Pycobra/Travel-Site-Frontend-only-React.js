import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./header.styles.css";




//NOTE: hover effect and scrollIntoView funct failed
const Header = ({currentImgUrl}) => {
    const handleChange = (e) => {
        e.target.scrollIntoView({behaviour: 'smooth'})
    }
    const scrollBlock = window.onscroll = () => {
        const scroll_top = document.getElementById('scroll-top')
        const Homepage = document.querySelector('#homepage > .homepage-img')
        const blockOne = document.querySelector('.block-one[data-index="block-one"]')
        const blockTwo = document.querySelector('.block-two[data-index="block-two"]')
        const header = document.querySelector('#section-nav > nav > ul')
        const li = Array.from(document.querySelector('#section-nav > nav > ul').children)
        if (window.scrollY >= 500){
            scroll_top.classList.add('display-jump-icon')
            scroll_top.classList.add('keepMoving-jump-icon')
        } else {
            setTimeout(() => {
                scroll_top.classList.remove('display-jump-icon')
            }, 2);
        }
        const animation_str2 = 'border-bottom:3px solid var(--normalwhite); \
                -webkit-transform: scale(2);-moz-transform: scale(2); -o-transform: \
                scale(2); animation: sleekSlide 500ms ease-in-out 1;'
        const animation_str = 'border-bottom:3px solid var(--normalwhite); \
                animation: sleekSlide 500ms ease-in-out 1;'
        if (window.scrollY > 5){
                header.setAttribute('style', 'background-color:#00ffff;border:1px solid #00ffff;')
                li.forEach((itm, idx) => {
                    itm.firstElementChild.setAttribute('style', 'color:var(--normalblack);')
                    if (window.scrollY < Homepage.clientHeight){
                        return idx === 0 ? itm.setAttribute('style', animation_str)
                            : itm.setAttribute('style', 'border-bottom:none')
                    }
                })
        } else {
            header.setAttribute('style', 'background-color:none;color:#00ffff;')
            li.forEach((itm, idx) => {
                itm.firstElementChild.setAttribute('style', 'color:#00ffff;')
                return idx === 0 ? itm.setAttribute('style', animation_str)
                    : itm.setAttribute('style', 'border-bottom:none')
            })
        }
        if (window.scrollY  >= blockOne.offsetTop - 150 && 
            window.scrollY < blockOne.clientHeight + blockOne.offsetTop - 150){
            li.forEach((itm, idx) => {
                // if (window.scrollY < blockOne.offsetTop - 130){
                    return idx === 1 ? itm.setAttribute('style',  animation_str)
                    : itm.setAttribute('style', 'border-bottom:none')
            })
        }
        if (window.scrollY  >= blockTwo.offsetTop - 150 && 
            window.scrollY < blockTwo.clientHeight + blockTwo.offsetTop - 150){
            li.forEach((itm, idx) => {
                // if (window.scrollY < blockTwo.offsetTop - 130){
                    return idx === 2 ? itm.setAttribute('style', animation_str)
                    : itm.setAttribute('style', 'border-bottom:none') 
            })
        }
    }
    return (
        <header>
            <section id="section-nav">
                <nav className="container-fluid" id="nav1">
                    <ul>
                        <li onClick={(e) => handleChange(e)} className="scroll" data-index="one"><a href="#">Home</a><span className="line1" data-index="one"></span></li>
                        <li onClick={(e) => handleChange(e)} className="scroll" data-index="two"><a href="#features">Features</a><span className="line1" data-index="two"></span></li>
                        <li onClick={(e) => handleChange(e)} className="scroll" data-index="three"><a href="#destinations">Destinations</a><span className="line1" data-index="three"></span></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

const mapStateToProps = createStructuredSelector({
    // currentImgUrl: selectCurrentImageForUse
})
export default connect(mapStateToProps)(Header);


