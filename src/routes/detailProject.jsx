// import DetailSection from "../components/DetailSection";
import Nav from "../components/Nav";
import "../styles/Detailproject.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function detailProject() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const data = location?.state;
  console.log(data.festack);
  return (
    <div>
      <Nav />
      <div className="cover">
        <motion.h1
          className="title"
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
          {data.title}
        </motion.h1>
        <motion.p
          className="desc"
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
          {data.description}
        </motion.p>
        <div className="cover-sample">
          <motion.img
            src={data.sample}
            className="sample"
            alt="sample"
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 1.5,
            }}
          />
        </div>
        {data.app !== "false" ? (
          <motion.a
            href={data.app}
            target="_blank"
            className="visit-web"
            initial={{
              opacity: 0,
              x: 0,
            }}
            animate={{
              opacity: 1,
              x: -100,
            }}
            transition={{
              duration: 0.5,
              delay: 1.5,
            }}
          >
            visit web
          </motion.a>
        ) : (
          ""
        )}
        <div className="link">
          {data.figma !== "false" ? (
            <motion.a
              className="source-code"
              href={data.figma}
              target="_blank"
              initial={{
                opacity: 0,
                y: -100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 1.5,
              }}
            >
              visit figma
            </motion.a>
          ) : (
            ""
          )}
          <motion.a
            className="source-code"
            href={data.githubfe}
            target="_blank"
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 1.5,
            }}
          >
            frontend github
          </motion.a>
          {data.githubbe !== "false" ? (
            <motion.a
              className="source-code"
              href={data.githubbe}
              target="_blank"
              initial={{
                opacity: 0,
                y: -100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 1.5,
              }}
            >
              backend github
            </motion.a>
          ) : (
            ""
          )}
        </div>
        <div className="stack">
          <div className="section">
            <h2>Design Tool</h2>
            <div className="cover-tool">
              {data.designtool.map((item, index) => {
                return (
                  <img className="img-tool" key={index} src={item} alt="tool" />
                );
              })}
            </div>
          </div>
          <div className="section">
            <h2>FrontEnd Stack</h2>
            <div className="cover-tool">
              {data.festack.map((item, index) => {
                return (
                  <img className="img-tool" key={index} src={item} alt="tool" />
                );
              })}
            </div>
          </div>
          {data.bestack !== "false" ? (
            <div className="section">
              <h2>BackEnd Stack</h2>
              <div className="cover-tool">
                {data.bestack.map((item, index) => {
                  return (
                    <img
                      className="img-tool"
                      key={index}
                      src={item}
                      alt="tool"
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* <DetailSection title="Design Tool" tool={data.designtool} namelink="visit figma" link="https://arbikustia.netlify.app"/>
      <DetailSection title="FrontEnd Stack" tool={data.festack} namelink="visit Github" link="https://arbikustia.netlify.app"/>
      <DetailSection title="BackEnd Stack" tool={data.bestack} namelink="visit Github" link="https://arbikustia.netlify.app"/> */}
      </div>
    </div>
  );
}

export default detailProject;
