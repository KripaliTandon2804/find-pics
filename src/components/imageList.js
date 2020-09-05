import React from 'react'

const ImageList = props => {
    const images = props.images.map((ele) => {
        return <img src={ele.urls.regular} />
    });
return <div>{images}</div>
};

export default ImageList;