import React, { useState } from 'react';
import Images from "../Images";
import { FaWindowClose } from 'react-icons/fa';
import "./Gallery.css";


function Gallery() {

    const [car, setCar] = useState(false);
    const [imgSrc, setImgSrc] = useState("");


    const tikImg = (imgSrc) => {
        setImgSrc(imgSrc)
        setCar(true)
    }

    return (
        <div>
            <div className={car ? "carOpen" : "car"}>
                <img src={imgSrc} alt="carpic" className='img-fluid rounded' />
                <FaWindowClose onClick={()=> setCar(false)} className='icon' />
            </div>
            <div className='Gallery'>
                {Images.map((item, index) => {
                    return (
                        <div className="d-inline mx-5 pics" key={index}>

                            <img
                                src={item.image} alt="car" className='img-fluid rounded mb-5 pt-3 w-auto'
                                style={{ maxWidth: "300px" }} onClick={() => tikImg(item.image)}
                            />

                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Gallery;