import React from 'react';
import {ArticlePreview} from 'components';
import './style.scss';

const ArticleGrid = ({articles, className, ...props}) => {

    return(
        <div className={`articleGrid ${className}`} {...props}>
            {articles.map(article => <ArticlePreview article={article} key={article.slug} className="rounded shadow2 overflow-hidden" />)}
        </div>
    );
};


export default ArticleGrid;