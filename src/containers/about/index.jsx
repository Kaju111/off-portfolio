import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase, FaAndroid } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Kaju Saikia",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "saikiakaju275@gmail.com",
  },
  {
    label: "Contact",
    value: "7896941168",
  },
];

function About() {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            start={{
              transform: "translateX(-1000px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences.
            </p>
          </Animate>

          <Animate
            play
            duration={1}
            start={{
              transform: "translateY(500px)",
            }}
            end={{
              transform: "translatex(100px)",
            }}
          >
            <h3 className="personalInfromationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
          
        </div>
        <Animate
        play
        duration={1}
        start={{
          transform: "translateY(-500px)",
        }}
        end={{
          transform: "translatex(-200px)",
        }}>
        <div className="about__content__servicesWrapper">
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>

            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>

            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>

            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
        </div>
        </Animate>
      </div>
    </section>
  );
}

export default About;
