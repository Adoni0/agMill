import React from 'react'
import bifold from '../images/bifold.jpg'
import slide from '../images/slide.jpg'
import swing from '../images/swing.jpg'

const ImageBanner = ({ imageVal }) => {
    return (
        <div>
            {imageVal === 0 ? <img style={styles.image} src={bifold} alt="bifold" /> : null}
            {imageVal === 1 ? <img style={styles.image} src={slide} alt="slide" /> : null}
            {imageVal === 2 ? <img style={styles.image} src={swing} alt="swing" /> : null}
        </div>
    )
}


const styles = {
    image: {
        borderRadius: '20px',
        width: 700,
        height: 200
    }
}

export default ImageBanner
