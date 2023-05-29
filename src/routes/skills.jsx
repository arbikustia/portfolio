import "../styles/Skills.css";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

import Skill from "../components/Skill";

// SKILLS DATABASE
import reactimg from "../assets/images/reactjs.png";
import nodeimg from "../assets/images/node.png";
import photoshopimg from "../assets/images/photoshop.png";
import typescript from "../assets/images/typescript.png";
import illustrator from "../assets/images/illustrator.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import figma from "../assets/images/figma.png";
import tailwind from "../assets/images/tailwind.png";

const skills = [
  {
    command: "webdev",
    comment: "click anywhere to continue",
    data: [
      {
        image: reactimg,
        name: "ReactJS",
        level: 9,
        description: "really good",
      },
      {
        image: typescript,
        name: "TypeScript",
        level: 9,
        description: "really good",
      },
      {
        image: nodeimg,
        name: "NodeJS",
        level: 2,
        description: "still learning",
      },
    ],
  },
  {
    command: "webdev",
    comment: "click anywhere to continue",
    data: [
      {
        image: html,
        name: "HTML",
        level: 9,
        description: "really good",
      },
      {
        image: css,
        name: "CSS",
        level: 9,
        description: "really good",
      },
      {
        image: tailwind,
        name: "Tailwind",
        level: 7,
        description: "quite good",
      },
    ],
  },
  {
    command: "design",
    comment: "Thanks",
    data: [
      {
        image: photoshopimg,
        name: "Photoshop",
        level: 3,
        description: "still learning",
      },
      {
        image: illustrator,
        name: "Illustrator",
        level: 3,
        description: "still learning",
      },
      {
        image: figma,
        name: "Figma",
        level: 7,
        description: "quite good",
      },
    ],
  },
];

function SkillsMap(skills) {
  return skills.map((skill, index) => {
    return (
      <motion.div
        key={index}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0 + index * 0.125, duration: 0.5 }}
      >
        <Skill
          image={skill.image}
          name={skill.name}
          level={skill.level}
          date={skill.date}
          description={skill.description}
          key={"skill-" + index}
        />
      </motion.div>
    );
  });
}

function Skills() {
  const [typing, setTyping] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [skillsState, setSkillsState] = useState(0);
  const [isReadyForComment, setIsReadyForComment] = useState(false);

  return (
    <div>
      <Nav color="var(--red)" />
      <div className="Skills">
        <motion.div
          className="Terminal"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.25, duration: 0.5 }}
          onAnimationComplete={() => {
            setIsReady(true);
          }}
          onClick={() => {
            if (typing) {
              return;
            }
            if (skillsState < skills.length - 1) {
              setSkillsState(skillsState + 1);
              setTyping(true);
            } else {
              setSkillsState(0);
              setTyping(true);
            }
          }}
        >
          <motion.div className="Window">
            <div className="TitleBar">
              <div className="Icons">
                <div className="Icon"></div>
                <div className="Icon"></div>
                <div className="Icon"></div>
              </div>
              <div className="Title">arbi-cli</div>
            </div>
            <div className="Content">
              <div className="Line">
                <div className="Prompt">arbi@dev:~$</div>
                {isReady ? (
                  <div className="Command">
                    {typing ? (
                      <TypeAnimation
                        sequence={[
                          `skills ${skills[skillsState].command}`,
                          750,
                          () => {
                            setTyping(false);
                            setIsReadyForComment(true);
                          },
                        ]}
                      />
                    ) : (
                      <>skills {skills[skillsState].command}</>
                    )}
                  </div>
                ) : null}
              </div>

              <div
                className={`Showcase Grid-${
                  skills[skillsState].data.length > 3
                    ? 3
                    : skills[skillsState].data.length
                }`}
              >
                {typing ? null : SkillsMap(skills[skillsState].data)}
              </div>

              <div className="Line">
                {typing ? null : (
                  <div className="Command">
                    {isReadyForComment ? (
                      <TypeAnimation
                        sequence={[
                          "",
                          1000,
                          `>> page ${skillsState + 1}/${skills.length} (${
                            skills[skillsState].comment
                          })`,
                        ]}
                        speed={80}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
