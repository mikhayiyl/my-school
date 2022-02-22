import React, { Component } from "react";
import { toast } from "react-toastify";

export default class ErrorPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      toast("Page Not Found ...!!!");
      window.location = "/";
    }, 4000);
  }
  render() {
    return (
      <div
        style={{
          background: "crimson",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontWeight: "900",
        }}
      >
        <h6>This page Does Not Exist??? / Protected Page</h6>
      </div>
    );
  }
}
