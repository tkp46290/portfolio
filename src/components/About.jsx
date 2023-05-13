import React from "react";
import aboutImg from "../assets/images/profile.jpg";
const About = () => {
  // const info = [
  //   { text: "Years experience", count: "04" },
  //   { text: "Completed Projects", count: "24" },
  //   { text: "Companies Work", count: "06" },
  // ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl text-[pink] font-semibold">
          About Me
        </h3>
        <p className="text-gray-400 my-3 text-lg">Who I am</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify text-2xl leading-7 w-11/12 mx-auto">
              I'm a recent graduate with a degree in Mechanical Engineering and
                but I have a passion for web development. I have hands on in
                ReactJS and I have experience building responsive, user-friendly
                web applications using this framework. I gained hands-on
                experience in web development through several projects . I'm
                proficient in HTML, CSS, JavaScript, and I have experience
                working with various front-end technologies such as ReactJS,
                Redux, and Bootstrap. I'm also familiar with back-end
                development such as Node.js and Express.js.
              </p>
             
              <br />
              <br />
              <a href="./src/assets/Profile-Resume.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
