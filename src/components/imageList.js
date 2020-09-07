import './ImageList.css'
import ImageCard from './ImageCard'
import React from 'react'

const ImageList = props => {
    const images = props.images.map((ele) => {
        return <ImageCard key={ele.id} image={ele}/>
    });
return <div className="image-list">{images}</div>
};

export default ImageList;