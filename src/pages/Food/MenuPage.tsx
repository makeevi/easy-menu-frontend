import React from 'react';
import { Col, Container, Row, Stack, Card, Nav, Button } from 'react-bootstrap';
import LinkButton from '../../components/common/button/LinkButton';
import MenuSvg from '../../components/common/svg/MenuSvg';

const MenuPage: React.FunctionComponent = () => {
    return (


        <Card style={{ background: '#f7f7f7', margin: '10px' }}>


            <Container fluid>
                <Row>
                    <Col xs={6} md={2}>
                        <Stack gap={3} >

                        <LinkButton text='Light' ><MenuSvg /></LinkButton>
                        <LinkButton text='Light'><MenuSvg /></LinkButton>
                        <LinkButton text='Light'><MenuSvg /></LinkButton>
                        </Stack>
                    </Col>
                    <Col xs={6} md={10}>
                        xs=6 md=4
                    </Col>
                </Row>
            </Container>
        </Card>


    );
};

export default MenuPage;