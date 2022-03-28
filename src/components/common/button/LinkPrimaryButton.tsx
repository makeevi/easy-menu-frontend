import React from 'react';
import { Button } from 'react-bootstrap';
import PencilSvg from '../svg/PencilSvg';
import PlusSvg from '../svg/PlusSvg';
import TrashSvg from '../svg/TrashSvg';

type Props = {
    onClick?: () => void;
    role: Role;
}

export enum Role {
    edit,
    add,
    delete
}




const LinkPrimaryButton: React.FunctionComponent<Props> = (props) => {

    function GetIcon() {
        switch (props.role) {
            case Role.add:
                return <PlusSvg />;

            case Role.edit:
                return <PencilSvg />;

            case Role.delete:
                return <TrashSvg />;
        }
    }

    return (
        <Button variant="link outline-primary" size="sm" onClick={() => {
            if (props.onClick !== undefined)
                props.onClick()
        }} >

            <div className="hstack gap-3">
                {GetIcon()}
                {props.children}

            </div>





        </Button>
    );
};

export default LinkPrimaryButton;