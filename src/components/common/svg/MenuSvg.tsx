import React from 'react';

type Props = {
    width?: string;
    height?: string;
    fill?: string;
    className?: string;
    viewBox?: string;
}
//fillRule="evenodd"
const MenuSvg: React.FunctionComponent<Props> = (props?) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props?.width} height={props?.height} fill={props?.fill} className={props?.className} viewBox={props?.viewBox}>
            <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
    );
};

MenuSvg.defaultProps = {

    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-plus-lg",
    viewBox: "0 0 16 16",
     
}

export default MenuSvg;