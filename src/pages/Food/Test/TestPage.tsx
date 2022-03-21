import React from 'react';
import YupValidationNumberUi from '../../../components/common/YupValidationNumberComponent';
import YupValidationStringComponent from '../../../components/common/YupValidationStringComponent';

const TestPage: React.FunctionComponent = () => {
    return (
        <>
        <YupValidationNumberUi initial_value={10} postAction={(a)=>{console.log(a)}} buttonText='Ntcn'/>
        <YupValidationStringComponent postAction={(a)=>{console.log(a)}} initial_value='eeer' isTextarea={false} buttonText='Ntcn' />
        </>

    );
};

export default TestPage;