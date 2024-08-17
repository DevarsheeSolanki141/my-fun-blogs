import PropTypes from 'prop-types';
import { window } from 'lodash/_freeGlobal';
import { useState, useEffect } from 'react';
import bootstrapVars from 'styles/js/variables.js';

const gridBreakpoints = bootstrapVars.gridBreakpoints;
const bsSizes = {0:'xl', 1:'lg', 2:'md', 3:'sm', 4:'xs'};

const getStyleForSize = (styles, sizeIndex) => {
    if (sizeIndex >= bsSizes.length){
        return {};  //No default styling defined
    }else if (styles[bsSizes[sizeIndex]]){
        return styles[bsSizes[sizeIndex]];
    }else{
        return getStyleForSize(styles, sizeIndex+1);
    };
};

const bsGridStyle = function useWindowSize(allSizesStyle, styles) {

    const isClient = typeof window === 'object';

    function getSize() {
        if (isClient){
            let bsStyleSize;
            if (window.innerWidth > gridBreakpoints.xl){
                bsStyleSize = getStyleForSize(styles, 0);
            } else if (window.innerWidth > gridBreakpoints.lg){
                bsStyleSize = getStyleForSize(styles, 1);
            } else if (window.innerWidth > gridBreakpoints.md){
                bsStyleSize = getStyleForSize(styles, 2);
            } else if (window.innerWidth > gridBreakpoints.sm){
                bsStyleSize = getStyleForSize(styles, 3);
            }else{
                bsStyleSize = getStyleForSize(styles, 4);
            };
            return { ...allSizesStyle, ...bsStyleSize};
        }else{
            return undefined;
        };
    };

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        };

        function handleResize() {
            setWindowSize(getSize());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
};

/**Bootstrap size with it's corresponding style 
 * e.g. {'md': {width: "80%"}, 'xs': {width: "100%"}}
 * 
*/
bsGridStyle.propTypes = {
    styles: PropTypes.arrayOf(PropTypes.instanceOf({
        [PropTypes.oneOf(Object.values(bsSizes))]: PropTypes.any
    }))
};

export default bsGridStyle;