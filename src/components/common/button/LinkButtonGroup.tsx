import React, { useState } from 'react';
import { TypeOf } from 'yup';
import LinkButton from './LinkButton';

const LinkButtonGroup: React.FunctionComponent = (props) => {
    return (
        <div>
            {
                            React.Children.map(props.children, x => (x as any).props.foo)
            }
        </div>
    );
}

export default LinkButtonGroup;