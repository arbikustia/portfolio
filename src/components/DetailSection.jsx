/* eslint-disable react/prop-types */

const DetailSection = ({ title, tool, namelink, link }) => {
  return (
    <div className="design">
      {tool !== "false" ? (
        <>
          <h2 className="design-tool-title">{title}</h2>
          <figure className="img-design-cover">
            <div className="content-design1">
              {tool.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item}
                    alt="design-tool"
                    className="img-design-tool"
                  />
                );
              })}
            </div>
            <div className="content-design2">
              <a href={link} target="_blank" rel="noreferrer">
                {namelink}
              </a>
            </div>
          </figure>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailSection;
