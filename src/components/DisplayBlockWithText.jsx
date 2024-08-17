import React from 'react';
import PropTypes from 'prop-types';
// import {GatsbyImageProps} from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

import {PrimaryLink} from 'components';

const styles = {
    button: {
        fontSize: 16,
        minHeight: 45
    },
    container: {
        height: 415,
        width: 415
    }
}

const DisplayBlockWithText = ({imgProps, alt, title, text, link, buttonText, className="", style={}, ...props}) => (
    <a href={link} className={`link-nostyle rounded ${className}`} style={{...styles.container, ...style}} {...props}>
        <BackgroundImage
            Tag="section"
            role="img"
            durationFadeIn={250}
            title={alt}
            alt={alt}
            className='shadow2 rounded' //TODO: Couldn't get the bg-image to grow when using hover-grow
            fluid={imgProps}
        >
            <div className="p-3 meme-text">
                <h2>{title}</h2>
                <p>{text}</p>
                <PrimaryLink style={styles.button} className="font-default shadow2 col-9">{buttonText}</PrimaryLink>
            </div>
        </BackgroundImage>
    </a>
);

DisplayBlockWithText.propTypes = {
    // imgProps: PropTypes.instanceOf(GatsbyImageProps) //Background Image for this component    //TODO: Figure out why this doesn't work
    alt: PropTypes.string,          //Alt description for the image
    text: PropTypes.string,         //Text displayed over the image
    link: PropTypes.string,         //What the block links to
    buttonText: PropTypes.string    //Text displayed on button
};

export default DisplayBlockWithText;