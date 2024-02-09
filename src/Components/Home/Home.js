import "./Home.css";
import Caro from "./Caro";
import CustomCarousel from "./CustomCarousel";
import DayNightSwitchh from "./DayNightSwitchh";
import ContactMe from "./ContactMe";

import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";
import { useState, useEffect, useRef } from "react";

// REACT IONS
import { FaPersonShelter } from "react-icons/fa6";
import { GiPrayerBeads } from "react-icons/gi"; // zikr
import { GiMeditation } from "react-icons/gi"; // meditation
import { FaMosque } from "react-icons/fa6"; // prayer
import { MdNoFood } from "react-icons/md"; // roza
import axios from "axios";
import BarChartMeditation from "./BarChartMeditation";

function Home() {
  const [students, setStudents] = useState(false);
  const [bar, setBar] = useState(false);
  // const [footerInView, setFooterInView] = useState(false);
  // const [containerTwoInside, setcontainerTwoInside] = useState(false);
  const [scrollY, setScrollY] = useState(0); // THIS IS FOR SCROLLING
  const targetRef = useRef(null);

  useEffect(() => {
    axios
      .get("core/five-students/")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // THIS IS FOR EXTRACTING FOR BAR GRAPH OF LAST 12 MONTHS
  useEffect(() => {
    axios
      .get("tasks/bar-graph/")
      .then((res) => {
        setBar(res.data.roza);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // THIS COMMENTED CODE OF OBSERVER IS FOR ELEMENT WHEN IT BECOMES IN VIEW AND YOU WANT TO PERFORM AN ACTION WHEN ARTICULAR ELEMET COMES IN VIEW
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           // Element is in view
  //           console.log("Element is in view!");
  //           setFooterInView(true);
  //           console.log("Element is in view:", entry.isIntersecting);
  //         } else {
  //           // Element is out of view
  //           setFooterInView(false);
  //           console.log("Element is out of view!");
  //         }
  //       });
  //     },
  //     { threshold: 0.0 } // Adjust the threshold as needed
  //   );

  //   if (targetRef.current) {
  //     observer.observe(targetRef.current);
  //   }

  //   // Cleanup observer on component unmount
  //   return () => {
  //     if (targetRef.current) {
  //       observer.unobserve(targetRef.current);
  //     }
  //   };
  // }, []);
  // useEffect(() => {
  //   if (footerInView) {
  //     setcontainerTwoInside(true);
  //   } else {
  //     setcontainerTwoInside(false);
  //   }
  // }, [footerInView]);

  ///////////////////////////////////
  // Update scrollY state on scroll
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    // Add scroll event listener on component mount
    window.addEventListener("scroll", handleScroll);
    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* <div> */}
      <div className="navigation">
        <logo className="logo">
          <img height={"40px"} src="Media/Med-logo.png" alt="logo-img"></img>
        </logo>
        <li>
          {/* <li>Home</li> */}
          <NavLink>SERVICES</NavLink>
          <NavLink>STUDENTS</NavLink>
          <NavLink>ABOUT</NavLink>
          <NavLink to={"sign-in"}>SIGN IN</NavLink>
          <NavLink to={"sign-up"}>SIGN UP</NavLink>
        </li>
        <switch className="switch">
          <DayNightSwitchh />
        </switch>
      </div>
      {/* </div> */}
      <div className="containers-top">
        <div className="container-one">
          <Container maxWidth="lg">
            <div>
              {/* <Caro /> */}
              {/* <CustomCarousel /> */}
              <div className="students">
                <span className="students-icon">
                  {/* <FaPersonShelter className="students-icon-icon" /> */}
                  <img src="Media/Molana-Mustafa.jpeg" alt="Molana Mustafa " />
                </span>
                <span className="students-def">
                  <h6 style={{ fontFamily: '"Anton", sans-serif' }}>
                    Molana Mustafa Razai
                  </h6>
                  <p>
                    lorem 100 nvbv bnvnmbv bnvnmbv bvbnvbn vbnv nbvbnv mbnvnbv
                    bnv bnvnb bnvbnvnmbv nm vbvmnvbn. bnvnbvbnvb bnv bnvbnvnbv
                    bvnbvnbvnbv nbvnmbvbnvbn vnbvbnv bnvbnvbn nbvbn vmbnv bnvbn
                    vbnv nbvnv bnvmbnvbnv bnvmbnb vnbvnvbnmbv nm vbvmnvbn.
                    bnvnbvbnvb bnv bnvbnvnbv bvnbvnbvnbv nbvnmbvbnvbn vnbvbnv
                    bnvbnvbn nbvbn vmbnv bnvbn vbnv nbvnv bnvmbnvbnv bnvmbnb
                    vnbvnvbn
                  </p>
                </span>
              </div>
              {/* <div className="stu-tasks">STUDENT TASKS</div> */}
              <div className="hadith-top">
                <div className="students02">
                  <span className="students-icon">
                    <GiPrayerBeads className="students-icon-icon" />
                    {/* <img src="Media/Molana-Mustafa.jpeg" alt="Molana Mustafa " /> */}
                  </span>
                  <span className="students-def">
                    <h6>ZIKR ILLAHI</h6>
                    <p>
                      Our Prophet (saw) said: “People who arise from an assembly
                      in which they do not remember Allah will be just as if
                      they had got up from an ass's corpse and it will be a
                      cause of grief to them.” (Abu Dawud).
                    </p>
                  </span>
                </div>{" "}
                <div className="students02">
                  <span className="students-icon">
                    <FaMosque className="students-icon-icon" />
                    {/* <img src="Media/Molana-Mustafa.jpeg" alt="Molana Mustafa " /> */}
                  </span>
                  <span className="students-def">
                    <h6>PRAYER TIME</h6>
                    <p>
                      The Prophet (PBUH) indicated that “The prayer in
                      congregation is twenty seven times superior to the prayer
                      offered by person alone.” (Sahih Bukhari – Book 11; Hadith
                      618)
                    </p>
                  </span>
                </div>{" "}
                <div className="students02">
                  <span className="students-icon">
                    <GiMeditation className="students-icon-icon" />
                    {/* <img src="Media/Molana-Mustafa.jpeg" alt="Molana Mustafa " /> */}
                  </span>
                  <span className="students-def">
                    <h6>MEDITATION</h6>
                    <p>
                      And put your trust in the Almighty, Most Merciful. Who
                      sees you when you meditate during the night. And your
                      frequent prostrations. He is the Hearer, the Omniscient.
                      [26:217-220 Al-Quran]
                    </p>
                  </span>
                </div>{" "}
                <div className="students02">
                  <span className="students-icon">
                    <MdNoFood className="students-icon-icon" />
                    {/* <img src="Media/Molana-Mustafa.jpeg" alt="Molana Mustafa " /> */}
                  </span>
                  <span className="students-def">
                    <h6>FASTING NO FOOD</h6>
                    <p>
                      Narrated Abu Huraira: Allah's Messenger (ﷺ) said, "Allah
                      said, 'All the deeds of Adam's sons (people) are for them,
                      except fasting which is for Me, and I will give the reward
                      for it.'
                    </p>
                  </span>
                </div>
              </div>
              <div className="bar-chart-lasty-stu-roza">
                <h6>TRACKING STUDENTS FASTING HISTORY OF LAST 12 MONTHS!</h6>
                <BarChartMeditation data={bar} />
              </div>
              <div className="bar-chart-lasty-stu-roza">
                <h6>CONTACT ME!</h6>
                <ContactMe />
              </div>
            </div>
          </Container>
        </div>
        <div className="container-two">
          <div
            // className={
            //   containerTwoInside
            //     ? "container-two-inside02"
            //     : "container-two-inside"
            // }
            className="container-two-inside"
            style={{ bottom: `${scrollY + 10}px` }}
          >
            <h6>RECENT STUDENTS</h6>
            {students ? (
              students.map((data) => {
                return (
                  <>
                    <div
                      style={{
                        margin: "0 auto",
                        width: "fit-content",
                      }}
                    >
                      <img
                        key={data.id + 1}
                        src={`http://localhost:8000${data.student_photo}`}
                        alt="student"
                        className="last-five-stu-photo"
                      />
                    </div>
                    <div
                      key={data.id}
                      style={{
                        margin: "0 auto",
                        width: "fit-content",
                        maxWidth: "80%",
                        maxHeight: "30px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        fontWeight: "700",
                        fontSize: "10px",
                        color: "rgb(53, 53, 53)",
                      }}
                    >
                      {data.student_name} <br />
                      {data.student_date_joined}
                    </div>
                    {/* <hr /> */}
                    <br />
                  </>
                );
              })
            ) : (
              <>Loading ...</>
            )}
          </div>
        </div>
      </div>
      <div id="footer" className="footer" ref={targetRef}>
        <div>
          <img src="Media/Med-logo.png" alt="company logo" />
          <div>
            Meditation, termed as "Tafakkur," involves reflective contemplation
            on Allah's signs and Quranic verses. We can let you serves
            MEDITATION as a pathway to spiritual connection, inner peace, and a
            deeper understanding of one's purpose, aligning the soul with
            Islamic teachings.
          </div>
        </div>
        <div>
          <span
            style={{
              color: "#00284b",
              fontFamily: '"Anton", sans-serif',
              fontWeight: "500",
              fontSize: "18px",
            }}
          >
            SERVICES
          </span>
          <div className="lists-in-footer">
            <li>Tranquil Mind</li>
            <li>Serene Soul</li>
            <li>Zen Harmony</li>
            <li>Calm Oasis</li>
          </div>
        </div>
        <div>
          <span
            style={{
              color: "#00284b",
              fontFamily: '"Anton", sans-serif',
              fontWeight: "500",
              fontSize: "18px",
            }}
          >
            STUDENTS
          </span>
          <div className="lists-in-footer">
            <li>Tutor Matching</li>
            <li>Career Counseling</li>
            <li>Study Groups</li>
            <li>Mental Health Support</li>
          </div>
        </div>
        {/* <div
          style={{ backgroundColor: "black", height: "40px", width: "100%" }}
        > */}
        <p>
          © 2024{" "}
          <span
            style={{
              color: "#00284b",
              fontFamily: '"Anton", sans-serif',
              fontWeight: "600",
            }}
          >
            MEDITATION
          </span>{" "}
          All rights reserved.
        </p>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Home;
