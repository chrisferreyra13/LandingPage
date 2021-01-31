import React, { Component } from "react";

import '../styles/Features.css';

const Features = ({title,data}) => {
    return (
      <div className="features-block">
        <div className="col-md-10 col-md-offset-1">
          <h2 className="features-title">{title}</h2>
        </div>
        <div className="row">
          {data
            ? data.map((d,i) => (
                <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon + " features-icon"}></i>
                  <h3 className="features-subtitle">{d.title}</h3>
                  <p className="features-text">{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    );
}

export default Features;