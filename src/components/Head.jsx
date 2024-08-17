import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Head = ({
  siteMetadata: { description, author, siteUrl, themeColor, image, title },
}) => {
  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{title}</title>
      {/* <script
        async
        src="https://www.googletagmanager.com/ns.html?id=GTM-PP3WWT4"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            }
            (window,document,'script','dataLayer','GTM-PP3WWT4');
          `,
        }}
      /> */}

      <link rel="canonical" href={siteUrl} />
      <link
        rel="shortcut icon"
        type="image/png/ico/svg"
        href="src/assets/images/vm-icon-192x192.png"
      />
      {/* <link rel="preload" href="https://fonts.googleapis.com/css?family=Rubic|Helvetica+Neue|Helvetica|Arial&display=swap" />  */}
      {/* hide live chat  */}
      {/* <link rel="preconnect" href="https://crisp.client.chat" /> */}
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="theme-color" content={themeColor || "#fff"} />
      <meta name="author" content={author} />
      {/* <link rel="manifest" href="/manifest.json" /> */}
      {/* <meta name="keywords" content={site.siteMetadata.keywords.join(",")} />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta> 
      <meta http-equiv="Content-Security-Policy" content="default-src 'self'" /> */}
      <meta name="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      {/* <meta property="og:image:width" content={metaImage.width} />
      <meta property="og:image:height" content={metaImage.height} /> 
      <meta property="fb:admins" content="USER_ID"/> 
      <meta property="fb:app_id" content="your_app_id" /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:card" content="summary" />
      {/* <meta name="twitter:site" content="@website-username" />
      <meta property="twitter:creator" content={author} />
      <meta
        name="twitter:title"
        content={pageName == Page.article ? title : pageName}
      /> */}
    </Helmet>
  );
};

Head.propTypes = {
  siteMetadata: PropTypes.shape({
    description: PropTypes.string, //Meta description
    author: PropTypes.string, //The creator of the website
    siteUrl: PropTypes.string, //The canonical url of the page
    themeColor: PropTypes.string,
    image: PropTypes.string, //The image displayed when the page is shared
    title: PropTypes.string, //The title displayed in the tab section at the top of the page
  }),
};

export default Head;
