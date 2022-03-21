import { Console } from 'console';
import { startOfDecade } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Stack, Card, Nav, Button, Tab } from 'react-bootstrap';
import LinkButton from '../../components/common/button/LinkButton';
import MenuSvg from '../../components/common/svg/MenuSvg';
import ReferenceBook from './service/ReferenceBookComponent';

const MenuPage: React.FunctionComponent = () => {

    return (


        <Card style={{ background: '#f7f7f7', margin: '10px' }}>

<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col xs={6} md={2}>
      <Nav className="flex-column">
        <Nav.Item>

          <LinkButton eventKey="referenceBook">


          <Stack direction="horizontal" gap={2}>
          <MenuSvg height='20' width='20'/>
          <span className="align-baseline">Справочники</span>
</Stack>

          </LinkButton>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>

    <Col xs={6} md={10}>
      <Tab.Content>
        <Tab.Pane eventKey="referenceBook">
            <ReferenceBook />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
            2
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>


            
            {/* <Container fluid>
                <Row>
                    <Col xs={6} md={2}>

                        <Stack gap={3} >
                            <LinkButton text='Light' name='linkButton_0' onClick={SetLinkButton} ><MenuSvg /></LinkButton>
                            <LinkButton text='Light' name='linkButton_1' onClick={SetLinkButton} ><MenuSvg /></LinkButton>
                            <LinkButton text='Light' name='linkButton_2' onClick={SetLinkButton} ><MenuSvg /></LinkButton>
                        </Stack>

                    </Col>
                    <Col xs={6} md={10}>
                        xs=6 md=4
                    </Col>
                </Row>
            </Container> */}
        </Card>


    );
};

export default MenuPage;