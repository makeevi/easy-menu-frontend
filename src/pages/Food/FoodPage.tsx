import React, { useState } from 'react';
import { Tabs, Tab, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import FoodGroupView from '../../components/referenceBook/foodGroup/FoodGroupView';
import FoodAllView from '../../components/FoodAllView';
import SearchFormView from '../../components/SearchFormView';

const FoodPage: React.FunctionComponent = () => {
    const [key, setKey] = useState<any>('foodGroup');

    return (
        <React.Fragment>

            <SearchFormView />

            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="foodGroup" title="Группы продуктов">
                    <FoodGroupView />
                </Tab>
                <Tab eventKey="sanPinGroup" title="СанПин">

                </Tab>

                <Tab eventKey="foodsAll" title="Продукты">
                    <FoodAllView />
                </Tab>
            </Tabs>

        </React.Fragment>




    );
};

export default FoodPage;