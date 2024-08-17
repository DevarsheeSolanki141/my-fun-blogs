import { Article } from "types";

export const edgesToArticles = function (edges) {
  return edges.map((edge) => {
    const {
      node: {
        fields: { slug },
        frontmatter: {
          title,
          imgAlt,
          category,
          date,
          featuredImage: {
            childImageSharp: { fluid },
          },
        },
      },
    } = edge;

    return new Article(title, fluid, imgAlt, slug, category, undefined, date);
  });
};

//Converst a string to a string where each words start with capital letters
export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const kebabCaseToLowerCaseWithSpaces = (text) => text.replace(/-/g, " ");

//Takes a string, replaces spaces with hyphens, and coverts it to lowercase
export const titleCaseToKebabCase = (text) =>
  text.replace(/\s+/g, "-").toLowerCase();

//Takes a string, replaces hyphens with spaces, and coverts it to title case
//TODO: Exclude words like and, to ...
export const kebabCaseToTitleCase = (text) =>
  toTitleCase(kebabCaseToLowerCaseWithSpaces(text));
export const kebabCaseToUpperCase = (text) =>
  kebabCaseToLowerCaseWithSpaces(text).toUpperCase();
export const kebabCaseToSentenceCase = (str) =>
  str[0].toUpperCase() + str.slice(1).replace(/-/g, " ");
