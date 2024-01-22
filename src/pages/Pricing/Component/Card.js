import React from "react";
import SingleCard from "./SingleCard";

const Card = () => {
  const data = [
    {
      id: 1,
      heading: "Basic",
      line1: "5 Lakhs",
      line2: "No Unlimited Acess!",
      line3: "Horror",
    },
    {
      id: 2,
      heading: "Medium",
      line1: "10 Lakhs",
      line2: "No Unlimited Acess!",
      line3: "Horror",
    },
    {
      id: 3,
      heading: "Premium",
      line1: "20 Lakhs",
      line2: "No Unlimited Acess!",
      line3: "Horror",
    },
  ];
  return (
    <>
      <h1 className="heading">Pricing</h1>
      <section className="cards">
        {
          <>
            <h1 className="heading">Pricing</h1>
            <section className="cards">
              {data.map((item) => {
                const { heading, line1, line2, line3 } = item;
                return (
                  <SingleCard
                    heading={heading}
                    line1={line1}
                    line2={line2}
                    line3={line3}
                  />
                );
              })}
            </section>
          </>
        }
      </section>
    </>
  );
};

export default Card;
