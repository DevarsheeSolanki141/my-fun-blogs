import React from "react";
import authors from "../../data/authors";

const styles = {
  img: {
    width: 200,
    height: "auto",
    objectFit: "cover",
  },
};

const AuthorInfo = ({ author }) => {
  const selectedAuthor = authors[author] || authors["default"];
  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-12 col-sm-4 col-lg-2 d-flex">
        {/* <img
          src={selectedAuthor.image}
          alt={selectedAuthor.name}
          style={styles.img}
        /> */}
      </div>
      <div className="col-12 col-sm-8 col-lg-10 text-left px-2 px-lg-5">
        <p>
          <strong>-- Written by {selectedAuthor.name}</strong>
        </p>
        {/* <p>{selectedAuthor.description}</p> */}
      </div>
    </div>
  );
};

export default AuthorInfo;
