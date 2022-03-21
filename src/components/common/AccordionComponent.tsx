import React, { Children, createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Row, Card, Col, Badge, Button} from 'react-bootstrap';
import lodash from 'lodash';

type AccordionProps = {
    topic: string;
    counter?: number;
}



const AccordionComponent: React.FunctionComponent<AccordionProps> = (props) => {

    const [isShowContent, SetIsShowContent] = useState<boolean>(false);

    return (
        <Accordion defaultActiveKey="0" flush  >
            <Button variant="btn btn-light" size="sm" onClick={()=>{SetIsShowContent(!isShowContent);}}>{props.topic}</Button>
            <Accordion.Collapse eventKey="0">
          <Card.Body>{isShowContent && props.children}</Card.Body>
        </Accordion.Collapse>
        </Accordion>
    );
};

export default AccordionComponent;


{/* <Accordion.Item eventKey='1' >
<Accordion.Header onClick={()=>{SetIsShowContent(!isShowContent);}}>
   {lodash.join([props.topic, props?.counter],' #')}
</Accordion.Header>
    <Accordion.Body>
        {isShowContent && props.children}                     
    </Accordion.Body>
</Accordion.Item> */}