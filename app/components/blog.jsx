import Heading from "./heading";
import BlogCard from "./blog-card";

export default function Blog({ className }) {
  return (
    <div
      className={`flex flex-col justify-center items-center px-8 md:px-12 lg:px-24 ${className}`}
    >
      <Heading className="mb-10">Blog</Heading>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-1 gap-y-4">
        <BlogCard imageURL="/photos/blog-photo-1.jpg" />
        <BlogCard imageURL="/photos/blog-photo-2.jpg" />
        <BlogCard imageURL="/photos/blog-photo-3.jpg" />
        <BlogCard imageURL="/photos/blog-photo-4.jpg" />
      </div>
    </div>
  );
}
