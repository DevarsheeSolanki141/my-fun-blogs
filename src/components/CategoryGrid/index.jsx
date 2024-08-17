import React from 'react';
import "./style.scss";
import PropTypes from 'prop-types';

import {ArticlePreview} from 'components';
import {Article} from 'types';

const CategoryGrid = ({bigArticle, article1, article2}) => {
    return (
        <div className="d-flex flex-lg-row flex-column">
            <ArticlePreview className="cat-big-art" article={bigArticle} />
            <div className='d-flex flex-lg-column'>
                {article1 && <ArticlePreview className="cat-art-1" article={article1} />}
                {article2 && <ArticlePreview className="cat-art-2" article={article2} />}
            </div>
        </div>
    );
};

CategoryGrid.propTypes = {
    bigArticle: PropTypes.instanceOf(Article),
    article1: PropTypes.instanceOf(Article),
    article2: PropTypes.instanceOf(Article)
};

export default CategoryGrid;