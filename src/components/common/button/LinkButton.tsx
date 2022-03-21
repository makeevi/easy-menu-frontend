import React, { useState } from 'react';
import { Nav, Stack } from 'react-bootstrap';
import { boolean } from 'yup/lib/locale';

type Props = {
    onClick?: () => void;
    eventKey: string;
}


const LinkButton: React.FunctionComponent<Props> = (props) => {

    return (

        <Nav.Link eventKey={props.eventKey} style={{cursor:'pointer'}} onClick={props.onClick} >{props.children}</Nav.Link>

        // <Stack direction="horizontal" style={{cursor:'pointer'}} gap={1} onClick={OnClickComponent}>
        //     {props.children}
        //     <div style={{ color: isSelect?'#0075cf':'#666', textAlign: "center" }}>{props.text}</div>
        // </Stack>        
    );
};

export default LinkButton;