import lodash from 'lodash';
import React, { useEffect, useState } from 'react';
import { Row, Card, Col, Badge, Button, Form, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { useIsLoading } from '../hook/useIsLoading';
import EditValueComponent, { ContentType } from './common/EditValueComponent';
import TrashSvg from './common/svg/TrashSvg';
import YupValidationStringComponent from './common/YupValidationStringComponent';
import { format } from 'date-fns';
import AccordionComponent from './common/AccordionComponent';
import { useGlobalContext } from '../hook/GlobalContext';
import { GetFoodDetailModel } from '../api/get/models/food/food/GetFoodDetailModel';
import { GetFoodShortModel } from '../api/get/models/food/food/GetFoodShortModel';

const FoodAllView: React.FunctionComponent = () => {

    const { service } = useGlobalContext();

    const [foods, setFoods] = useState<GetFoodShortModel[]>();
    const [loadingFoodAll, isLoadingFoodAll, error] = useIsLoading(async () => {

        const response = await service?.GetService.FoodService.GetFoodAll();
        setFoods(response);
    });

    useEffect(() => {

        loadingFoodAll();

    }, []);

    // function loadingFoodAll() {
    //     throw new Error('Function not implemented.');
    // }

    return (
        <React.Fragment> {isLoadingFoodAll
            ? <div>Загрузка</div>

            : <Row xs={1} md={2} className="g-4">




                {lodash.map(foods?.sort((a, b) => a.StartDate < b.StartDate ? 1 : -1), a => (
                    <Col key={a.Id}>
                        <Card style={{ margin: '10px' }}>
                            <Card.Header className="d-flex justify-content-between align-items-start">
                                <EditValueComponent contentType={ContentType.String} value={a.Name} action={(value) => EditNameFood(a.Id, String(value))} />
                                <Button variant="link outline-primary" size="sm" onClick={() => { DeleteFood(a.Id) }}>
                                    <TrashSvg />
                                </Button>
                            </Card.Header>
                            <Card.Body>

                                <AccordionComponent topic='Принадлежность к группам' counter={3}>
                                    {/* <FoodGroupItem idFoodGroup={a.Id} source={RequestSource.FoodGroup} /> */}
                                </AccordionComponent>

                                <AccordionComponent topic='Химический состав' counter={3}>
                                    {/* <FoodGroupItem idFoodGroup={a.Id} source={RequestSource.FoodGroup} /> */}
                                </AccordionComponent>

                                <AccordionComponent topic='Единицы измерения' counter={3}>
                                    {/* <FoodGroupItem idFoodGroup={a.Id} source={RequestSource.FoodGroup} /> */}
                                </AccordionComponent>

                                <div className="d-flex justify-content-between align-items-start">
                                    <div></div>
                                    <small className="text-muted">{format(new Date(a.StartDate), 'yyyy-MM-dd')}</small>
                                </div>


                            </Card.Body>
                        </Card>
                    </Col>
                ))}

                <Col>
                    <Card style={{ margin: '10px', padding: '10px' }}>
                        <YupValidationStringComponent
                            buttonText='Создать'
                            label='Создайте новый продукт в этой форме'
                            placeholder="Укажите наименование продукта"
                            isTextarea={false}
                            initial_value=''
                            postAction={(a) => {
                                // const model: FoodGroupPostModel = {
                                //     Name: a
                                // };
                                // AddNewFood(model);
                            }} />
                    </Card>
                </Col>


            </Row>



        }
        </React.Fragment>
    );
};

export default FoodAllView;


function DeleteFood(Id: string) {
    throw new Error('Function not implemented.');
}

function EditNameFood(Id: string, arg1: string): void {
    throw new Error('Function not implemented.');
}

