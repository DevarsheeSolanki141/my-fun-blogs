import React, {useEffect, useState} from 'react';

export default ({children, style, ...props}) => {
/**
 * All elements inside this component scroll at a different speed than the rest of the page
 */
  
  const [margin, setMargin] = useState(0)

  const parralax = () => {
    var yPos = window?.pageYOffset * 0.6;
  
    setMargin(yPos);
  };

  useEffect(() => {
    
    window && window.addEventListener("scroll", parralax)
    
    // return () => {
    //   window.removeEventListener("scroll", parralax)
    // };
  }, [])

  return (
        <div className="overflow-hidden pb-5" style={{maxHeight: "100%", paddingTop: margin, ...style}} {...props}>
          {children}
        </div>
    );
};