// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "../index.css";

class FirstState extends Component {
  constructor() {
    super();
    this.state = {
      title: "Belajar Menggunakan Refactoring",
      subtitle: "Tugas by Laeli Nurchasanah",
    };
  }

  render() {
    const { title, subtitle } = this.state;

    return (
      <div className="state">
        {/* Conditional rendering for title and subtitle */}
        {title && <h1>{title}</h1>}
        {subtitle && <h4>{subtitle}</h4>}
      </div>
    );
  }
}

export default FirstState;
