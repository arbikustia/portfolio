import "../styles/Projects.css";
import Nav from "../components/Nav";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RandomReveal } from "react-random-reveal";

import { useState, useEffect } from "react";

import cookit from "../assets/project_img/cookit.jpg";
import airbnb from "../assets/project_img/airbnb.jpg";
import dashboard from "../assets/project_img/dashboard.jpg";

const projects = [
  {
    title: "CURRENT",
    projects: [
      {
        img: cookit,
        title: "Cookit",
        subtitle: "React TypeScript Project",
        link: "https://github.com/arbikustia/ALTA-Cookit-FE",
        description:
          "Cookit is a social media platform for sharing cooking recipes. One of its unique features is the ability to buy and sell recipe packages, making cooking even easier. Cookit uses Go programming language with the Midtrans payment gateway to ensure secure payments.",
      },
      {
        img: airbnb,
        title: "Escapist , airbnb clone",
        subtitle: "React TypeScript Project",
        link: "https://github.com/arbikustia/ALTA-Airbnb-FE",
        description:
          "Escapist App is a marketplace for booking accommodations and homestays. Built with React, TypeScript, Tailwind, and Golang, it offers a seamless user experience. With secure payment processing through Midtrans, travelers can easily find and book their ideal stay",
      },
      {
        img: dashboard,
        title: "Dashboard Immersive",
        subtitle: "React TypeScript Project",
        link: "https://github.com/arbikustia/Immersive-Dashboard-FrontEnd",
        description:
          "Immersive Dashboard is a web-based tool designed for Immersive students to monitor their progress. Built with React, TypeScript, and Tailwind, it provides an intuitive user interface. The application utilizes a REST API and Golang to ensure smooth data communication and processing. Immersive Dashboard allows students to keep track of their progress and stay on top of their coursework.",
      },
    ],
  },
];

function Projects() {
  const [projectsReady, setProjectsReady] = useState(false);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".Project-Card"), {
      max: 7,
      speed: 400,
    });
  }, []);

  const randomRevealCharacters = [
    "█",
    "░",
    "`",
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "{",
    "]",
    "}",
    "\\",
    "|",
    ";",
    ":",
    "'",
    '"',
    ",",
    "<",
    ".",
    ">",
    "/",
    "?",
  ];

  const circleVariants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  return (
    <div>
      <Nav color="var(--purple)" />
      <div className="Projects">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ delay: 1.25, duration: 0.5 }}
          className="Contact-Line"
        >
          <motion.div
            variants={circleVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.5, duration: 0.5 }}
            className="Contact-Line-Circle"
          ></motion.div>
        </motion.div>

        <motion.div className="Projects-Header">
          <div className="Projects-Title">
            <TypeAnimation
              sequence={[
                "",
                1500,
                "< Projects />",
                () => {
                  setProjectsReady(true);
                },
              ]}
              cursor={false}
              speed={80}
            />
          </div>
          {projectsReady ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="Projects-Subtitle"
            >
              <RandomReveal
                isPlaying
                duration={1.5}
                characters="Frontend Project"
                revealEasing="easeInQuad"
                characterSet={randomRevealCharacters}
              />
            </motion.div>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: projectsReady ? 1 : 0 }}
          transition={{ duration: 0.75 }}
          className="Projects-Section"
        >
          {/* Project Mapping */}

          {projects.map((project, index) => {
            return (
              <>
                <div className="Projects-List">
                  <div
                    key={index}
                    className={`Projects-${
                      (index + 1) % 2 === 1 ? "Right" : "Left"
                    } Projects-Section-Title`}
                  >
                    {project.title}
                  </div>
                  {project.projects.map((proj, projindex) => {
                    return (
                      <motion.div
                        key={projindex}
                        className={`Project-Wrapper Card-${
                          (projindex + index + 1) % 2 === 1 ? "Left" : "Right"
                        }`}
                      >
                        <div
                          className={`Project-Card `}
                          key={projindex}
                          onClick={() => {
                            window.open(proj.link, "__blank");
                          }}
                        >
                          <motion.div className="Project-Image">
                            <div className="Image-Gradient"></div>
                            <LazyLoadImage
                              className="Project-Image"
                              src={proj.img}
                              alt={proj.title}
                            />
                            <motion.div
                              className={`Project-Texts Project-Text-${
                                (projindex + index + 1) % 2 === 1
                                  ? "Left"
                                  : "Right"
                              }`}
                            >
                              <div
                                className={`Project-Name ${
                                  proj.title.length > 9
                                    ? "Name-Long"
                                    : "Name-Short"
                                }`}
                              >
                                {proj.title}
                              </div>
                              <div className="Project-Subtitle">
                                {proj.subtitle}
                              </div>
                            </motion.div>
                          </motion.div>
                          <motion.div
                            className={`Project-Description Desc-${
                              (projindex + index + 1) % 2 === 1
                                ? "Left"
                                : "Right"
                            }`}
                          >
                            {proj.description}
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </motion.div>
        <div className="Projects-Footer">
          <motion.a
            href="/contact"
            className="Projects-Contact"
            animate={{ color: "var(--light)" }}
            whileHover={{
              color: "var(--blue)",
              letterSpacing: "0.2rem",
              scale: 1.1,
            }}
          >
            get in touch
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
