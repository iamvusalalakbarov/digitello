"use client";

import Heading from "./heading";
import BlogCard from "./blog-card";
import { useState } from "react";
import clsx from "clsx";

const imageURLs = [
  "/photos/blog-photo-1.jpg",
  "/photos/blog-photo-2.jpg",
  "/photos/blog-photo-3.jpg",
  "/photos/blog-photo-4.jpg",
];

export default function Blog({ className }) {
  const [hoveredCard, setHoveredCard] = useState(0);

  function handleTouchStart(index) {
    setHoveredCard(index);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center px-8 md:px-12 lg:px-24 ${className}`}
    >
      <Heading className="mb-10">Blog</Heading>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-1 gap-y-4">
        {imageURLs.map((imageURL, index) => (
          <BlogCard
            key={index}
            imageURL={imageURL}
            onTouchStart={() => handleTouchStart(index)}
            innerStyle={clsx({
              "opacity-100 md:opacity-0": hoveredCard === index
            })}
          />
        ))}
      </div>
    </div>
  );
}
