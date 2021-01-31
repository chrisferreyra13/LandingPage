import React from "react";

import '../styles/Services.css';

const Services = ({title,data}) => {
    return (
      <div className="services-block">
        <div className="section-title">
          <h2 className="services-title">{title}</h2>
          <p className="services-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {data
            ? data.map((d, i) => (
                <div  key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3 className="services-subtitle">{d.name}</h3>
                    <p className="services-text">{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    );
}

export default Services;