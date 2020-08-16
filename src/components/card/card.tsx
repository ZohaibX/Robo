import React from "react";
import { IRobots } from "../../App";

//? Use of typescript with stateless components

export interface CardStatelessProps {
  Robots: Array<IRobots>;
  searchInput: string;
}

//  after https://robohash.org .. we may write anything and it will return me a picture
const Card: React.FunctionComponent<CardStatelessProps> = ({
  Robots,
  searchInput,
}): JSX.Element => {
  // Filtering arrays according to search input
  const filteredRobots = Robots.filter(
    (robots: any): Array<object> => {
      return robots.name.toLowerCase().includes(searchInput.toLowerCase()); // we are not using startsWith here bcoz includes is better
    }
  );

  console.log("Cards");
  return (
    <div className="">
      {filteredRobots.map((robot: any): any => (
        <div
          key={robot.id}
          className="bg-light-green dib br3  ma2 grow bw2 shadow-5"
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
