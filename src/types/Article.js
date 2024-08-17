import {kebabCaseToTitleCase} from 'utils/conversions';
import metadata from 'data/metadata';

class Article{
    title;          //The title of the article
    alt;            //The alt description for the image
    slug;           //The path to this article from the site directory
    category;       //The category that the article falls into
    imgProps;       //The GatsbyImageProps for the image featured for this article
    description;    //Description for this article shown on page shares and google
    date;

    constructor(title, imgProps, alt, slug, category, description, date){
        this.title = title;
        this.imgProps = imgProps;
        this.alt = alt;
        this.slug = slug;                   
        this.category = category;
        this.description = description;
        this.date = date;
    };

    get url() {           //The full domain url for this article
        return `${metadata.siteUrl}${this.slug}`;
    };

    get shareTitle() {
        return kebabCaseToTitleCase(this.title);
    };

};

export default Article;