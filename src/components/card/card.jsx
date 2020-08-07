import React from "react";

//  after https://robohash.org .. we may write anything and it will return me a picture
const Card = ({ Robots, searchInput }) => {
  // Filtering arrays according to search input
  const filteredRobots = Robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchInput.toLowerCase()); // we are not using startsWith here bcoz includes is better
  });

  console.log("Cards");
  return (
    <div className="">
      {filteredRobots.map((robot) => (
        <div
          key={robot.id}
          className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
        >
          <img src={`https://robohash.org/${robot.id}?size=200x200`} alt="" />
          <div className="">
            <h2>{robot.name}</h2>
            <p>{robot.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
