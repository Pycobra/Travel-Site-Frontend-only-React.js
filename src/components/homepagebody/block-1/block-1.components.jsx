import React from 'react';
import { useState } from 'react';
import "./block-1.styles.css"




 const Block1 = () => {
    // var btn = undefined
    const HandleOnClick = (e) => {
        
        // if (e.target.firstElementChild){
        //     e.target.firstElementChild.classList.toggle('move-right')
        //     e.target.classList.toggle('white-border')
        // }
        // else {
        //     e.target.parentElement.classList.toggle('white-border')
        //     e.target.classList.toggle('move-right')
        // }
        const img = document.querySelector(`img[data-index="${e.target.dataset.index}"]`)
        const button = document.querySelector(`button[data-index="${e.target.dataset.index}"]`)
        const div = document.querySelector(`div[data-index="${e.target.dataset.index}"]`)
        img.classList.toggle('black-and-white')
        button.classList.toggle('move-right')
        div.classList.toggle('white-border')
    }
    const HandleMouseEnter = (e) => {
        e.target.nextElementSibling.nextElementSibling.classList.add('now-display')
    }
    const HandleMouseLeave = (e) => {
        document.querySelector('.now-display').classList.remove('now-display')
    }
    return (
        <section className="block-one" data-index='block-one'>
            <div className="head" id="features">Features</div>
            <div className='content'>
                <div className="block1">
                    <span className="img-case" onMouseEnter={(e) => HandleMouseEnter(e)} onMouseLeave={(e) => HandleMouseLeave(e)} data-index="one">
                        <img name='btnDiv1' data-index="one" src={require("../../../Media/vacation/image7.png")} style={{width:'100%'}}/>
                        <span data-index="one" className="img-txt1">See&nbsp;coconut&nbsp;palmtrees</span>
                        <div name='btnDiv1' onClick={(e) => HandleOnClick(e)} className='black-img-txt2' data-index="one">
                            <button name='btn1' className='black-button' data-index="one">change view</button>
                        </div>
                    </span>
                    <span className="img-case" onMouseEnter={(e) => HandleMouseEnter(e)} onMouseLeave={(e) => HandleMouseLeave(e)} data-index="two">
                        <img name='btnDiv2' data-index="two" src={require("../../../Media/vacation/fox.png")} style={{width:'100%'}}/>
                        <span data-index="two" className="img-txt1">Go animal watching</span>
                        <div name='btnDiv2' onClick={(e) => HandleOnClick(e)} className='black-img-txt2'  data-index="two">
                            <button name='btn2' className='black-button' data-index="two">change view</button>
                        </div>
                    </span>
                </div>
                <div className="block2">
                    <span className="img-case" onMouseEnter={(e) => HandleMouseEnter(e)} onMouseLeave={(e) => HandleMouseLeave(e)} data-index="three">
                        <img name='btnDiv3' data-index="three" src={require("../../../Media/vacation/image14.png")} style={{width:'100%'}}/>
                        <span data-index="three" className="img-txt1">Enjoy your stay</span>
                        <div name='btnDiv3' onClick={(e) => HandleOnClick(e)} className='black-img-txt2' data-index="three">
                            <button name='btn3' className='black-button' data-index="three">change view</button>
                        </div>
                    </span>
                    <span className="img-case" onMouseEnter={(e) => HandleMouseEnter(e)} onMouseLeave={(e) => HandleMouseLeave(e)} data-index="four">
                        <img name='btnDiv4' data-index="four" src={require("../../../Media/vacation/image4.png")} style={{width:'100%'}}/>
                        <span data-index="four" className="img-txt1">Sail on lakes</span>
                        <div name='btnDiv4' onClick={(e) => HandleOnClick(e)} className='black-img-txt2' data-index="four">
                            <button name='btn4' className='black-button'data-index="four">change&nbsp;view</button>
                        </div>
                    </span>
                </div>
            </div>
        </section>
    )};

 export default Block1;
