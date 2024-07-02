import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/blogs")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  const getShortenedDescription = (description) => {
    const words = description.split(" ");
    if (words.length <= 20) {
      return description;
    }
    return words.slice(0, 20).join(" ") + "...";
  };

  return (
    <section className="simple-section pt-0">
      <div className="container">
        <div className="section-heading center">
          <h3 className="text-[1.8rem] mt-5 font-bold text-center py-2">
            Latest from Blog
          </h3>
          <p className="text-[1rem] mx-auto text-center max-w-[700px] ">
            Create your account and complete your profile to find your ideal
            university and study program based on your personality, your
            academic achievements, career prospects, and what it takes to make
            your education dream come true.
          </p>
        </div>
        <div className="flex flex-wrap justify-around mt-5   mx-auto  w-[82vw] ">
          {blogs.map((post) => (
            <div
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3"
              key={post.id}
            >
              <div className="card mt-7 md:mt-2 h-full border-2 border-black   rounded-lg">
                <img
                  src={`http://localhost:4000/${post.image}`}
                  className="card-img-top h-[14rem]  w-full rounded-tl-lg rounded-tr-lg"
                  alt="..."
                />

                <div className="card-body p-[2rem]">
                  <h5 className="card-title">
                    <Link
                      className="no-underline text-black text-[18px] font-[600] hover:underline"
                      to={`/blog-detail/${post._id}`}
                    >
                      {post.title.length > 30
                        ? post.title.substr(0, 30) + "..."
                        : post.title}
                    </Link>
                  </h5>
                  <p
                    className="card-text text-[1rem]"
                    dangerouslySetInnerHTML={{
                      __html: getShortenedDescription(post.description),
                    }}
                  />
                  <Link
                    to={`/blog-detail/${post._id}`}
                    className="button border-2 text-base md:text-sm lg:text-base border-gray-800 text-gray-800 my-3 md:my-5 no-underline w-[9rem] hover:text-white hover:bg-gray-800 px-4 py-2 rounded-md flex"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
