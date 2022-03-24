import React, { FunctionComponent } from 'react';

type Props = {
    description: string;
    component: any;
    onClick: () => void;
    className?: string
}
//height:"150px", width:"150px" 1, 
const CardMenuComponent: React.FunctionComponent<Props> = (props) => {
    return (

        <div className={props.className}>

            <div className='shadow bg-body rounded'>
                <div className='btn-outline-secondary p-3 rounded-3'
                    style={{ cursor: "pointer", height: "150px" }} onClick={props.onClick}>
                    <div className='vstack gap-3'>
                        <div>{props.component}</div>
                        <p className='fs-6 fw-normal text-break'>{props.description}</p>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default CardMenuComponent;