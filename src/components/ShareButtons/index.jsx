import React from 'react';
// import {useState, useEffect} from 'react';
import './style.scss';
// import gridBreakpoints from 'styles/bootstrap-plus/gridBreakpoints';
import PropTypes from 'prop-types';

import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TwitterShareButton,
    // WhatsappShareButton
} from "react-share";
import { 
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faRedditAlien,
    // faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';

import { Article } from 'types';

const ShareButtons = ({ article, ...props }) => {

    const butCls = 'm-md-1 m-p5 outline-none';
    // let [onMobile, setOnMobile] = useState(false);
    // let innerWidth = typeof window === 'object' ? window.innerWidth : 1950;

    // useEffect(() => {
    //     setOnMobile(typeof window === 'object' ? window.innerWidth < 558 : false);
    // }, [innerWidth]);    //Use if you add another share button like what's app

    const FaIcon = ({ circleIcon }) => {

        const size = "2x" // "2x" !onMobile ? "2x" : "1x"; //TODO:Figure out how to make the padding look good on mobile

        return (
            <div className='fa-circle-container'>
                <FontAwesomeIcon className='fa-circle' size={size} icon={circleIcon} />
            </div>
        );
    };

    //TODO: outline none
    return (
        <div {...props}>
            <div className="h-100">
                <div style={{top:0}} className="d-flex position-sticky flex-column">
                    <FontAwesomeIcon size="2x" className="my-3 share-icon" icon={faShareAlt} />
                    <div className="share-wrap">
                        <FacebookShareButton
                            className={butCls}
                            url={article.url}
                        >
                            <FaIcon circleIcon={faFacebookF} />
                        </FacebookShareButton>
                    </div>
    
                    <div className="share-wrap">
                        <TwitterShareButton
                            className={butCls}
                            url={article.url}
                            title={article.shareTitle}
                            hashtags={["ffuncars"]}
                        >
                            <FaIcon circleIcon={faTwitter} />
                        </TwitterShareButton>
                    </div>
    
                    <div className="share-wrap">
                        <LinkedinShareButton
                            className={butCls}
                            url={article.url}
                            title={article.shareTitle}
                            summary={article.description} //Doesn't show up
                            source={article.url}
                        >
                            <FaIcon circleIcon={faLinkedinIn} />
                        </LinkedinShareButton>
                    </div>
    
                    <div className="share-wrap">
                        <RedditShareButton
                            className={butCls}
                            url={article.url}
                            title={article.shareTitle}
                        >
                            <FaIcon circleIcon={faRedditAlien} />
                        </RedditShareButton>
                    </div>
    
                    {/* <WhatsappShareButton  //TODO: test this
                        className={butCls}
                        url={article.url}
                        title={article.title}
                    >
                        <FaIcon circleIcon={faWhatsapp} />
                    </WhatsappShareButton> */}
    
                    <div className="share-wrap">
                        <EmailShareButton
                            className={butCls}
                            url={article.url}
                            subject={`${article.shareTitle} | FFUN Blog`}
                            body={article.description}
                            separator={"\n\n"}
                        >
                            <FaIcon circleIcon={faEnvelopeOpen} />
                        </EmailShareButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

ShareButtons.propTypes = {
    article: PropTypes.instanceOf(Article)
};

export default ShareButtons;