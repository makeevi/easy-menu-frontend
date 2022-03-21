import React from 'react';
import { Button } from 'react-bootstrap';
import TrashSvg from '../svg/TrashSvg';

type Props = {
    onClick?: () => void;
}

const DeleteButton: React.FunctionComponent<Props> = (props) => {
    return (
        <Button variant="link outline-primary" size="sm" onClick={() => {
            if (props.onClick !== undefined)
                props.onClick()
        }} >
            <TrashSvg />
        </Button>
    );
};

export default DeleteButton;