import * as React from "react";

const IconGlobe: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeWidth="2"
      d="M8 12a14.5 14.5 0 0 1 4-10 14.5 14.5 0 0 1 0 20 14.5 14.5 0 0 1-4-10Z"
    ></path>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M2 12h20"
    ></path>
  </svg>
);

export default IconGlobe;

