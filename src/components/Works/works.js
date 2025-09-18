import React, { useState } from "react";
import "./works.css";
import Portfolio1 from "../../assets/EG.png";
import Portfolio2 from "../../assets/BF.png";
import Portfolio3 from "../../assets/SB.png";
import Portfolio4 from "../../assets/SM.png";
import Portfolio5 from "../../assets/RJ.png";
import Portfolio6 from "../../assets/K9.png";
import Portfolio7 from "../../assets/DD.png";
import Portfolio8 from "../../assets/QM.png";
import Portfolio9 from "../../assets/ML.png";
import Portfolio10 from "../../assets/PL.png";
import Portfolio11 from "../../assets/FV.png";
import Portfolio12 from "../../assets/ABZ.png";

const Works = () => {
  const [tab, setTab] = useState(1);

  const Mockdata = [
    {
      img: Portfolio1,
      name: "Evaluation Grid",
      link: "https://evaluationgrid.co",
      key: "wordpress",
    },
    {
      img: Portfolio2,
      name: "Burhani Frozen & Nimco",
      link: "https://burhanifrozen.pk/",
      key: "wordpress",
    },
    {
      img: Portfolio3,
      name: "Social Boost",
      link: "https://socialboost.no/",
      key: "wordpress",
    },
    {
      img: Portfolio8,
      name: "Q Marble & Granite",
      link: "https://qmarble-granite.co.uk/",
      key: "wordpress",
    },
    {
      img: Portfolio9,
      name: "Moonlight Hosiery",
      link: "https://moonlighttextile.com/",
      key: "wordpress",
    },
    {
      img: Portfolio10,
      name: "Palm Living Dubai",
      link: "https://palmviewliving.com/",
      key: "wordpress",
    },
    {
      img: Portfolio12,
      name: "ABZ Appliances Repair",
      link: "https://abzappliancerepair.com/",
      key: "wordpress",
    },
    {
      img: Portfolio4,
      name: "The Simple Man",
      link: "https://www.thesimplemanstore.com/",
      key: "shopify",
    },
    {
      img: Portfolio5,
      name: "Rover Jackets",
      link: "https://roverjackets.com/",
      key: "shopify",
    },
    {
      img: Portfolio6,
      name: "k9ite",
      link: "https://k9ite.com/",
      key: "shopify",
    },
    {
      img: Portfolio11,
      name: "Fully Vital",
      link: "https://fullyvital.com/",
      key: "shopify",
    },
    {
      img: Portfolio7,
      name: "Denture Dubai",
      link: "https://www.denturedubai.com/",
      key: "wordpress",
    },
  ];

  const filteredData =
    tab === 1
      ? Mockdata.filter((item) => item.key === "wordpress")
      : Mockdata.filter((item) => item.key === "shopify");

  return (
    <section id="works">
      <h2 className="work-title">
        My <strong>Portfolio</strong>
      </h2>
      <p className="work-description">
        I have designed various websites on Wordpress and Shopify. My expertise
        is the proof that I work with dedication and enthusiasm, ensuring my
        clients’ projects are delivered on time.
      </p>

      <div className="category">
        <div
          onClick={() => setTab(1)}
          style={{
            border: tab === 1 ? "none" : "",
            padding: "1rem",
            borderRadius: "50px",
            background: "#fff041",
            color: "#000",
            cursor: "pointer",
            width: "138px",
          }}
        >
          Wordpress
        </div>
        <div
          onClick={() => setTab(2)}
          style={{
            border: tab === 2 ? "none" : "",
            padding: "1rem",
            borderRadius: "50px",
            background: "#fff041",
            color: "#000",
            cursor: "pointer",
            width: "138px",
          }}
        >
          Shopify
        </div>
      </div>

      <div className="work_items">
        {filteredData.map((item, index) => (
          <div className="portfolios" key={index}>
            <a href={item.link}>
              <img src={item.img} alt={item.name} className="works-img" />
              <p>{item.name}</p>
            </a>
          </div>
        ))}
      </div>

      <a href="https://wa.me/923322467774">
        <button className="work-btn">Contact Me</button>
      </a>
    </section>
  );
};

export default Works;
