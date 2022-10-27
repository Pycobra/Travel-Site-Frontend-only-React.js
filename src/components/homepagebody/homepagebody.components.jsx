import React from 'react';
import "./homepagebody.styles.css"
import Block1 from './block-1/block-1.components';
import Block2 from './block-2/block-2.components';
import Block3 from './block-3/block-3.components';
// import Block4 from './block-4/block-4.components';



 const HomePageBody = () => {
       
    // const scrollBlock = window.onscroll = () => {
    //     const Homepage = document.querySelector('#homepage > .homepage-img')
    //     if (window.scrollY > 5){
    //             header.setAttribute('style', 'background-color:#00ffff;border:1px solid #00ffff;')
    //             li.forEach((itm, idx) => {
    //                 itm.firstElementChild.setAttribute('style', 'color:var(--normalblack);')
    //                 if (window.scrollY < Homepage.clientHeight){
    //                     return idx === 0 ? itm.setAttribute('style', 
    //                         'border-bottom:3px solid var(--normalwhite);animation: \
    //                         sleekSlide 500ms ease-in-out 1;')
    //                         : itm.setAttribute('style', 'border-bottom:none')
    //                 }
    //             })
    //     }
    // }
    return (
        <section id="homepage-body">
            <Block1 />
            <Block2 />
            <Block3 />
        </section>
    )};

 export default HomePageBody;
