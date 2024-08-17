import React from 'react';
import "./style.scss";
import PropTypes from 'prop-types';
import {Link} from 'gatsby'

import {ArrowHead} from 'components';
import links from 'data/links';
import {kebabCaseToSentenceCase} from 'utils';

const CategoryPath = ({category, ...props}) => (
    <div {...props}>
        <div className="d-flex align-items-center">
            <Link to={links.blog.home} className="font-weight-bold text-secondary mr-3 ">Blog</Link>
            <ArrowHead />
            <Link to={`/${category}`} className="font-weight-bold text-secondary ml-4 ">{kebabCaseToSentenceCase(category)}</Link>
        </div>
    </div>
);

CategoryPath.propTypes = {
    category: PropTypes.string  //The type of article that this path points to
};

export default CategoryPath;