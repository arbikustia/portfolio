import "../styles/Projects.css";
import Nav from "../components/Nav";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RandomReveal } from "react-random-reveal";

import { useState, useEffect } from "react";

import cookit from "../assets/project_img/cookit.jpg";
import cookitSample from "../assets/project_img/cookit-sample.jpg";
import airbnb from "../assets/project_img/airbnb.jpg";
import airbnbSample from "../assets/project_img/airbnb-sample.jpg";
import dashboard from "../assets/project_img/dashboard.jpg";
import dashboardSample from "../assets/project_img/dashboard-sample.jpg";
import timeace from "../assets/project_img/timeace.jpg";
import timeaceSample from "../assets/project_img/timeace-sample.jpg";
import figma from "../assets/images/figma.png";
import illustrator from "../assets/images/illustrator.png";
import photoshop from "../assets/images/photoshop.png";
import reactImg from "../assets/images/reactjs.png";
import typescript from "../assets/images/typescript.png";
import tailwind from "../assets/images/tailwind.png";
import node from "../assets/images/node.png";
import express from "../assets/images/expressjs.png";
import mongodb from "../assets/images/mongodb.png";
import redux from "../assets/images/redux.png";
import { useNavigate, useLocation } from "react-router-dom";

const projects = [
  {
    title: "Full Stack",
    projects: [
      {
        title: "TimeAce",
        subtitle: "MERN Stack Project",
        app: "https://timeace.netlify.app/",
        img: timeace,
        sample : timeaceSample,
        description:
          "TimeAce is a comprehensive web application designed to enhance time management and productivity. With its intuitive interface and powerful features, TimeAce helps individuals and teams effectively plan, track, and optimize their time and tasks. It offers three key features: Eisenhower, Pomodoro, and Todo List.",
        designtool: [figma, illustrator],
        figma: "false",
        festack: [reactImg, typescript, tailwind, redux],
        githubfe: "https://github.com/arbikustia/TimeAce",
        bestack: [node, express, mongodb],
        githubbe: "https://github.com/arbikustia/server-TimeAce",
      },
    ],
  },
  {
    title: "FrontEnd",
    projects: [
      {
        title: "Cookit",
        subtitle: "React TypeScript Project",
        app: "false",
        img: cookit,
        sample : cookitSample,
        description:
          "Cookit is a social media platform for sharing cooking recipes. One of its unique features is the ability to buy and sell recipe packages, making cooking even easier. Cookit uses Go programming language with the Midtrans payment gateway to ensure secure payments.",
        designtool: [figma, photoshop],
        figma: "https://www.figma.com/community/file/1225622487567898100/cookit",
        festack: [reactImg, typescript, tailwind, redux],
        githubfe: "https://github.com/arbikustia/ALTA-Cookit-FE",
        bestack: "false",
        githubbe: "false",
      },
      {
        title: "Escapist , airbnb clone",
        subtitle: "React TypeScript Project",
        app: "false",
        img: airbnb,
        sample : airbnbSample,
        description:
          "Escapist App is a marketplace for booking accommodations and homestays. Built with React, TypeScript, Tailwind, and Golang, it offers a seamless user experience. With secure payment processing through Midtrans, travelers can easily find and book their ideal stay",
        designtool: [figma, photoshop],
        figma: "https://www.figma.com/community/file/1256499197747220069",
        festack: [reactImg, typescript, tailwind, redux],
        githubfe: "https://github.com/arbikustia/ALTA-Airbnb-FE",
        bestack: "false",
        githubbe: "false",
      },
      {
        title: "Dashboard Immersive",
        subtitle: "React TypeScript Project",
        app: "false",
        img: dashboard,
        sample : dashboardSample,
        description:
          "Immersive Dashboard is a web-based tool designed for Immersive students to monitor their progress. Built with React, TypeScript, and Tailwind, it provides an intuitive user interface. The application utilizes a REST API and Golang to ensure smooth data communication and processing. Immersive Dashboard allows students to keep track of their progress and stay on top of their coursework.",
        designtool: [figma, photoshop],
        figma: "https://www.figma.com/community/file/1256498675078914660",
        festack: [reactImg, typescript, tailwind, redux],
        githubfe: "https://github.com/arbikustia/Immersive-Dashboard-FrontEnd",
        bestack: "false",
        githubbe: "false",
      },
    ],
  },
];

function Projects() {
  const [projectsReady, setProjectsReady] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("ini", location.state);

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

          {projects?.map((project, index) => {
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
                            navigate("/detailproject", {
                              state: {
                                title: proj.title,
                                subtitle: proj.subtitle,
                                app: proj.app,
                                sample : proj.sample,
                                description: proj.description,
                                designtool: proj.designtool,
                                figma: proj.figma,
                                festack: proj.festack,
                                githubfe: proj.githubfe,
                                bestack: proj.bestack,
                                githubbe: proj.githubbe,
                              },
                            });
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
