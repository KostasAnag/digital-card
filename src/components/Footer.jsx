import React from "react";
import facebook from "./images/Facebook Icon.png";
import insta from "./images/Instagram Icon.png";
import git from "./images/GitHub Icon.png";
import tweet from "./images/Twitter Icon.png";

export default function Footer() {
  return (
    <footer>
      <img src={tweet} />
      <img src={facebook} />
      <img src={insta} />
      <img src={git} />
    </footer>
  );
}
