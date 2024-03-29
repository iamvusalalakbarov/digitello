"use client";

import Heading from "./heading";
import TeamCard from "./team-card";
import { useState } from "react";
import clsx from "clsx";

const team = [
  {
    name: "Odin Borson",
    position: "CEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam asperiores expedita, dolores nisi ipsam distinctio esse beatae laudantium voluptatum quasi?",
    background: "bg-odin-borson",
  },
  {
    name: "Wanda",
    position: "Finance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam asperiores expedita, dolores nisi ipsam distinctio esse beatae laudantium voluptatum quasi?",
    background: "bg-wanda",
  },
  {
    name: "Cptn America",
    position: "Sales Manager",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam asperiores expedita, dolores nisi ipsam distinctio esse beatae laudantium voluptatum quasi?",
    background: "bg-captain-america",
  },
  {
    name: "Black Panther",
    position: "Senior Developer",
    description:
      "With unparalleled skill and precision, Black Panther leads our development team, protecting the integrity of our codebase and delivering superior digital solutions.",
    background: "bg-black-panther",
  },
  {
    name: "Deadpool",
    position: "Junior Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam asperiores expedita, dolores nisi ipsam distinctio esse beatae laudantium voluptatum quasi?",
    background: "bg-deadpool",
  },
  {
    name: "Spider-Man",
    position: "React Developer",
    description: "This is obviously Vusal Alakbarov. :)",
    background: "bg-spider-man",
  },
];

export default function Team({ className }) {
  const [hoveredCard, setHoveredCard] = useState(0);

  function handleTouchStart(index) {
    setHoveredCard(index);
  };

  return (
    <div className={`${className}`}>
      <Heading className="mb-[60px]">Team</Heading>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-y-4 mb-4 lg:mb-0">
        {team.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            position={member.position}
            description={member.description}
            background={member.background}
            onTouchStart={() => handleTouchStart(index)}
            innerStyle={clsx({
              "opacity-100 lg:opacity-0": hoveredCard === index
            })}
          />
        ))}
      </div>
    </div>
  );
}
