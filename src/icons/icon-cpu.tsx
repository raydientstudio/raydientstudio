import * as React from "react";

const IconCPU: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth="2"
      d="M2 10h2.5M2 14h2.5M22 10h-2.5m2.5 4h-2.5M10 2v2.5M14 2v2.5M10 22v-2.5m4 2.5v-2.5"
    ></path>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 5h14v14H5z"
    ></path>
  </svg>
);

export default IconCPU;
