import React from 'react';

type Props = {
    width?: string;
    height?: string;
    fill?: string;
    className?: string;
    viewBox?: string;
}
//fillRule="evenodd"
const PlusSvg: React.FunctionComponent<Props> = (props?) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props?.width} height={props?.height} fill={props?.fill} className={props?.className} viewBox={props?.viewBox}>
            <path  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg>
    );
};

PlusSvg.defaultProps = {

    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-plus-lg",
    viewBox: "0 0 16 16",
     
}

export default PlusSvg;