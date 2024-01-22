import React from "react";

const About = ({heading}) => {
  return (
    <>
      <h1 className="heading">{heading}</h1>
      <section className="about">
        <img src={require("../../../assets/image2.jpg")} alt="" />
        <div className="content">
          <h2>
            The Vampire Diaries follows three central characters: Elena Gilbert,
            Stefan Salvatore, and Damon Salvatore
          </h2>
          <p>
            Elena is a human teenage girl living in Fells Church, Virginia, in
            the 1990s. She's pretty, popular, and sometimes petty. After her
            parents die in a car crash, she's also an orphan.
          </p>
          <p>
           
            After centuries of quarreling, Stefan and Damon Salvatore return to
            their original town of Mystic Falls, Virginia.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
