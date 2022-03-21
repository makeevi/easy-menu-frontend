import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import { boolean } from 'yup/lib/locale';

type Props = {
    onClick?: () => void;
    text: string;
    isSelect?: boolean;
}

const LinkButton: React.FunctionComponent<Props> = (props) => {

    LinkButton.defaultProps={
        isSelect: false
    };

    const [isSelect, SetSelect] = useState<boolean>(Boolean(props.isSelect));

    function OnClickComponent()
    {
        SetSelect(!isSelect);
        if(props.onClick != undefined)
                props.onClick();
    }

    return (

        <Stack direction="horizontal" style={{cursor:'pointer'}} gap={1} onClick={OnClickComponent}>
            {props.children}
            <div style={{ color: isSelect?'#0075cf':'#666', textAlign: "center" }}>{props.text}</div>
        </Stack>        
    );
};

export default LinkButton;