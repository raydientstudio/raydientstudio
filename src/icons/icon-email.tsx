import { FC } from "react";
import { IconProps } from "./icon-props";

const IconEmail: FC<IconProps> = ({
    size = 24,
    viewBox = "0 0 24 24",
    className = "",
    fill = "none",
    ...props
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox={viewBox}
            fill={fill}
            {...props}
            className={className}
        >
            <path fill="currentColor" d="M22 12h-1v.031l.002.031zm-6 0 .998.062.002-.03V12zm1-4V7h-2v1h2m-5-6v1a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11zM2 12h1a9 9 0 0 1 9-9V1C5.925 1 1 5.925 1 12zm17.141 7-.714-.7A8.97 8.97 0 0 1 12 21v2a10.97 10.97 0 0 0 7.855-3.3zM12 22v-1a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11zm10-10-.998.062v-.003.022l.002.095c0 .088-.002.218-.013.376-.024.322-.083.73-.218 1.123-.135.394-.329.72-.587.944-.24.207-.597.381-1.186.381v2c1.036 0 1.867-.326 2.494-.869.609-.526.962-1.2 1.17-1.806.21-.608.29-1.2.322-1.627a7 7 0 0 0 .013-.736v-.023zm-3 4v-1c-.589 0-.946-.174-1.186-.381-.258-.224-.452-.55-.587-.944a4.6 4.6 0 0 1-.218-1.123 5 5 0 0 1-.01-.493v.002L16 12l-.998-.062v.009l-.001.015a4 4 0 0 0-.005.205c-.001.132.002.314.018.53.032.429.113 1.02.322 1.628.208.606.561 1.28 1.17 1.806.627.543 1.458.869 2.494.869zm-3-4h1V8h-2v4z"></path>
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"></circle>
        </svg>
    );
};

export { IconEmail as default };