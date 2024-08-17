import { useEffect } from 'react';
import PropTypes from 'prop-types';

/** Executes on action when the user clicks outside this component */
const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    },
        [ref, handler],
    );
};

useOnClickOutside.propTypes = {
    //ref: PropTypes.instanceOf(MutableRefObject),  //Ref returned form use ref, which is attached to the component of interest
    handler: PropTypes.func //An action to perform once the user clicks somewhere outside of this component
};

export default useOnClickOutside;