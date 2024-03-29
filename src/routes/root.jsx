import "../styles/Root.css";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import portrait from "../assets/images/me.png";

function Root() {
  return (
    <div className="App">
      <Nav color="var(--yellow)" />
      <div className="Home">
        <div className="Name">
        <motion.h2
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 1.5,
            }}
          >
            Arbi Kustia
          </motion.h2>
          <motion.h1
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 1.5,
            }}
          >
            Self-motivated front-end developer with expertise in HTML, CSS,
            TypeScript, React, creating visually appealing web applications.
          </motion.h1>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 1.75,
            }}
          >
            <TypeAnimation
              sequence={[
                "//WEB DEVELOPER",
                2000,
                "//FRONT-END DEVELOPER",
                2000,
                () => {},
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
          </motion.div>

          
        </div>
        <div className="img">
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.8,
            }}
            transition={{
              duration: 0.5,
              delay: 2,
            }}
            className="Portrait"
            src={portrait}
            alt="Me"
          />
        </div>
        <div className="Socials">
            <motion.a
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: { duration: 0.5, delay: 2 },
              }}
              whileHover={{
                color: "var(--yellow)",
                transition: { duration: 0.25, delay: 0 },
              }}
              href="https://github.com/arbikustia/"
              target="_blank"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: { duration: 0.5, delay: 2.5 },
              }}
              whileHover={{
                color: "var(--purple)",
                transition: { duration: 0.25, delay: 0 },
              }}
              href="https://www.linkedin.com/in/arbi-kustia-59a572238/"
              target="_blank"
            >
              <FaLinkedinIn />
            </motion.a>
          </div>
      </div>
    </div>
  );
}

export default Root;
