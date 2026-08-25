import * as React from "react";

const IconTemplate: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 21V3h7v18zM14 21v-9h7v9zM14 8V3h7v5z"
    ></path>
  </svg>
);

export default IconTemplate;
