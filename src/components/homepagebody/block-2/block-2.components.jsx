import React from 'react';
import { useState } from 'react';
import "./block-2.styles.css"



 const Block2 = () => {
    const [imageSrc, setImageSrc] = useState({imageSrc1: 'Media/vacation/image7',
            imageSrc2: 'Media/vacation/image4', imageSrc3: 'Media/vacation/image2',
            imageSrc4: 'Media/vacation/image6', imageSrc5: 'Media/vacation/image9',})

    const {imageSrc1, imageSrc2, imageSrc3, imageSrc4, imageSrc5} = imageSrc   
                                         
    const HandleImgClick = (e) => {
        const {name, src, dataset:{price, index}} = e.target
        const usePrice = document.querySelector(`#price[data-index="${index}"]`)
        const text = document.querySelector(`#name[data-index="${index}"]`)
        usePrice.textContent = price
        text.textContent = e.target.nextElementSibling.innerText

        const dir = src.split('/')[5].split('.')[0]
        setImageSrc({...imageSrc, [name]: `Media/vacation/${dir}`})

    }
    const HandleHeaderClick = (e) => {
        if (document.querySelector('.content > .now-display')){
            const item = document.querySelector(`.content > .cover[data-country="${e.target.className.split(' ')[1]}"]`)
            document.querySelector('.content > .now-display').classList.remove('now-display')
            item.classList.add('now-display')
        }
        // document.querySelector('.content > .cover').remove('now-display')
        // const item = document.querySelector(`.content > .cover[data-index="${e.target.className}"]`)
        // item.classList.add('now-display')
        // siblings.map((sibs, idx) => {
        //     return children.map((kids, pos) => {
        //         idx === pos ? console.log(kids) : console.log('ZZZZZZZZZZZZZZz')

        //     })
        // })
        // // console.log(siblings)
    }

    // console.log(imageSrc1, imageSrc2, imageSrc3, imageSrc4, imageSrc5)
    return (
        <div id="destinations" className="block-two" data-index="block-two">
            <div className="head">Destinations</div>
            <div className='headers'>
                <span onClick={(e) => HandleHeaderClick(e)} className="one calabar">Calabar</span><span className="two">|</span>
                <span onClick={(e) => HandleHeaderClick(e)} className="one port-hacourt">Port&nbsp;hacourt</span><span className="two">|</span>
                <span onClick={(e) => HandleHeaderClick(e)} className="one lagos">Lagos</span><span className="two">|</span>
                <span onClick={(e) => HandleHeaderClick(e)} className="one kaduna">Kaduna</span><span className="two">|</span>
                <span onClick={(e) => HandleHeaderClick(e)} className="one ondo">Ondo</span>
            </div>
            <div className="content">
                <div className="cover cover1 now-display" data-country="calabar">
                    <div className="innerblock1">
                        <div className="block1">
                            <span className="image">
                                <img name='imageSrc1' data-index='one' data-price='4533' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/image7.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Edet beach</span>
                            </span>
                            <span className="image">
                                <img name='imageSrc1' data-index='one' data-price='3245' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/fox.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Npkong forest</span>
                            </span>
                        </div>
                        <div className="block2">
                            <span className="image">
                                <img name='imageSrc1' data-index='one' data-price='2234' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/image14.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Ufot spring</span>
                            </span>
                            <span className="image">
                                <img name='imageSrc1' data-index='one' data-price='1003' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/image4.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Bassey lake</span>
                            </span>
                        </div>
                    </div>
                    <div className="innerblock2">
                        <div className="block1">
                            <span className="image image-lg">
                                <img name='imageSrc1' onClick={(e) => HandleImgClick(e)} src={require(`../../../${imageSrc1}.png`)} />
                                {/* <span style={{color:'var (--normalwhite)'}} data-index='one' className="inscription img-txt">Edet beach</span> */}
                            </span>
                        </div>

                        <div className="block2">
                            <div className="inside">
                                <div className="side1">
                                    <span data-index='one' id="name">Edet beach</span>
                                    <p data-index='one' id="price">4533</p>
                                </div>
                                <div className="side2">
                                    <p id="text">Calabar Location</p>
                                    <span className="description">there are as lot of reasons why you should
                                        travel to italy and not any other place, because
                                        italy you might not know is not a scandinavian country.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cover cover2" data-country="port-hacourt">
                    <div className="innerblock1">
                        <div className="block1">
                            <span className="image image-lg">
                                <img name='imageSrc2' data-index='two' data-price='4009' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/image4.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Obiapkor beach</span>
                            </span>
                            <span className="image image-lg">
                                <img name='imageSrc2' data-index='two' data-price='3245' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/tiger.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Uniport spring</span>
                            </span>
                        </div>
                        <div className="block2">
                            <span className="image image-lg">
                                <img name='imageSrc2' data-index='two' data-price='2222' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/image8.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Emuoha reserve</span>
                            </span>
                            <span className="image image-lg">
                                <img name='imageSrc2' data-index='two' data-price='1090' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/image10.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Umuokoro hills</span>
                            </span>
                        </div>
                    </div>
                    <div className="innerblock2">
                        <div className="block1">
                            <span className="image image-lg">
                                <img name='imageSrc2' onClick={(e) => HandleImgClick(e)} src={require(`../../../${imageSrc2}.png`)} />
                                {/* <span style={{color:'var (--normalwhite)'}} data-index='two' className="inscription img-txt">Obiapkor beach</span> */}
                            </span>
                        </div>

                        <div className="block2">
                            <div className="inside">
                                <div className="side1">
                                    <span  data-index='two' id='name'>Obiapkor beach</span>
                                    <p  data-index='two' id='price'>4009</p>
                                </div>
                                <div className="side2">
                                    <p>Port-Hacourt Location</p>
                                    <span>there are as lot of reasons why you should
                                        travel to italy and not any other place, because
                                        italy you might not know is not a scandinavian country.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cover cover3" data-country="lagos">
                    <div className="innerblock1">
                        <div className="block1">
                            <span className="image image-lg">
                                <img name='imageSrc3' data-index='three' data-price='5435' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/image2.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Ikoyi fantasy</span>
                            </span>
                            <span className="image image-lg">
                                <img name='imageSrc3' data-index='three' data-price='4367' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/panda.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Chevron reserve</span>
                            </span>
                        </div>
                        <div className="block2">
                            <span className="image image-lg">
                                <img name='imageSrc3' data-index='three' data-price='3456' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/image1.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Badagry island</span>
                            </span>
                            <span className="image image-lg">
                                <img name='imageSrc3' data-index='three' data-price='2555' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/image3.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Lekki waterside</span>
                            </span>
                        </div>
                    </div>
                    <div className="innerblock2">
                        <div className="block1">
                            <span className="image image-lg">
                                <img name='imageSrc3' onClick={(e) => HandleImgClick(e)} src={require(`../../../${imageSrc3}.png`)} />
                                {/* <span style={{color:'var (--normalwhite)'}} data-index='three' className="inscription img-txt">Ikoyi fantasy</span> */}
                            </span>
                        </div>

                        <div className="block2">
                            <div className="inside">
                                <div className="side1">
                                    <span  data-index='three' id='name'>Ikoyi fantasy</span>
                                    <p  data-index='three' id='price'>5435</p>
                                </div>
                                <div className="side2">
                                    <p>Lagos Location</p>
                                    <span>there are as lot of reasons why you should
                                        travel to italy and not any other place, because
                                        italy you might not know is not a scandinavian country.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cover cover4" data-country="kaduna">
                    <div className="innerblock1">
                        <div className="block1">
                            <span className="image image-lg">
                                <img name='imageSrc4' data-index='four' data-price='4999' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/image6.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Kaduna waters</span>
                            </span>
                            <span className="image image-lg">
                                <img name='imageSrc4' data-index='four' data-price='3444' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/jaguar.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Mambilla forest</span>
                            </span>
                        </div>
                        <div className="block2">
                            <span className="image image-lg">
                                <img name='imageSrc4' data-index='four' data-price='9002' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/image12.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Bassa Mountains</span>
                            </span>
                            <span className="image image-lg">
                                <img name='imageSrc4' data-index='four' data-price='3245' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/image13.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Idrissou lake</span>
                            </span>
                        </div>
                    </div>
                    <div className="innerblock2">
                        <div className="block1">
                            <span className="image image-lg">
                                <img name='imageSrc4' onClick={(e) => HandleImgClick(e)} src={require(`../../../${imageSrc4}.png`)} />
                                {/* <span style={{color:'var (--normalwhite)'}} data-index='four' className="inscription img-txt">{imageText4}</span> */}
                            </span>
                        </div>

                        <div className="block2">
                            <div className="inside">
                                <div className="side1">
                                    <span data-index='four' id="name">Kaduna waters</span>
                                    <p data-index='four' id="price">4999</p>
                                </div>
                                <div className="side2">
                                    <p>Kaduna Location</p>
                                    <span>there are as lot of reasons why you should
                                        travel to italy and not any other place, because
                                        italy you might not know is not a scandinavian country.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cover cover5" data-country="ondo">
                    <div className="innerblock1">
                        <div className="block1">
                            <span className="image a image-lg">
                                <img name='imageSrc5' data-index='five' data-price='3245' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/image9.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Ilaje waterside</span>
                            </span>
                            <span className="image b image-lg">
                                <img name='imageSrc5' data-index='five' data-price='4563' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/bird2.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Akure Lakeside</span>
                            </span>
                        </div>
                        <div className="block2">
                            <span className="image image-lg">
                                <img name='imageSrc5' data-index='five' data-price='2020' onClick={(e) => HandleImgClick(e)} src={require("../../../Media/vacation/turtle.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Ikale bird reserve</span>
                            </span>
                            <span className="image image-lg">
                                <img name='imageSrc5' data-index='five' data-price='1209' onClick={(e) => HandleImgClick(e)} src={require("../../../Media//vacation/image2.png")} />
                                <span style={{color:'var (--normalwhite)'}} className="img-txt">Owo views</span>
                            </span>
                        </div>
                    </div>
                    <div className="innerblock2">
                        <div className="block1">
                            <span className="image image-lg">
                                <img name='imageSrc5' onClick={(e) => HandleImgClick(e)} src={require(`../../../${imageSrc5}.png`)} />
                                {/* <span style={{color:'var (--normalwhite)'}} data-index='five' className="inscription img-txt">{imageText5}</span> */}
                            </span>
                        </div>

                        <div className="block2">
                            <div className="inside">
                                <div className="side1">
                                    <span data-index='five' id="name">Ilaje waterside</span>
                                    <p data-index='five' id="price">3245</p>
                                </div>
                                <div className="side2">
                                    <p>Ondo Location</p>
                                    <span>there are as lot of reasons why you should
                                        travel to italy and not any other place, because
                                        italy you might not know is not a scandinavian country.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

 export default Block2;
