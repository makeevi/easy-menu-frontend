import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Row, Card, Col, Button } from 'react-bootstrap';
import GetService from '../api/GetService';
import lodash from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodGroupItem, { RequestSource } from './FoodGroupView';
import AccordionComponent from './common/AccordionComponent';
import { useIsLoading } from '../hook/useIsLoading';
import TrashSvg from './common/svg/TrashSvg';
import PostService from '../api/PostService';
import YupValidationStringComponent from './common/YupValidationStringComponent';
import EditValueComponent, { ContentType, Role } from './common/EditValueComponent';
import PutService from '../api/PutService';
import { GetSanPinGroupAllModel, IBaseTypeWhithStartDateIdName, IStandardSanpinGetModel } from '../api/models/GetModel';
import { FoodGroupPostModel, StandardSanpinPostModel } from '../api/models/PostModel';
import DeleteService from '../api/DeleteService';
import { FoodGroupSanpoinPutModel, StandardSanpinPutModel } from '../api/models/PutModel';

const SanPinGroupAllView: React.FunctionComponent = () => {
    const [foodGroups, setFoodGroups] = useState<GetSanPinGroupAllModel[]>();
    const [ageGrops, setAgeGrops] = useState<IBaseTypeWhithStartDateIdName[]>();
    const [foodWeightType, setFoodWeightType] = useState<IBaseTypeWhithStartDateIdName[]>();

    const [loadingFoodGroupAll, isLoadingFoodGroupAll, error] = useIsLoading(async () => {

        const responseFoodGroups = await GetService.GetSanPinGroupAll();
        setFoodGroups(responseFoodGroups.data);

        const responseAgeGroup = await GetService.GetAgeGroupAll();
        setAgeGrops(responseAgeGroup.data);

        const responseFoodWeightType = await GetService.GetFoodWeightTypeAll();
        setFoodWeightType(responseFoodWeightType.data);
    });

    useEffect(() => {

        loadingFoodGroupAll();

    }, []);

    async function AddNewFoodGroup(model: FoodGroupPostModel) {

        const response = await PostService.PostFoodGroupSanPin(model);
        loadingFoodGroupAll();
    }

    async function DeleteFoodGroup(id: string) {

        const response = await DeleteService.DeleteSanPinGroup(id);
        loadingFoodGroupAll();
    }

    async function EditNameInFoodGroup(id: string, value: string) {

        const model: FoodGroupSanpoinPutModel = {
            Name: value
        };

        const response = await PutService.PutFoodGroupSanpin(id, model);
        loadingFoodGroupAll();
    }

    async function EditDescriptionInFoodGroup(id: string, value: string) {

        const model: FoodGroupSanpoinPutModel = {
            Description: value
        };

        const response = await PutService.PutFoodGroupSanpin(id, model);
        loadingFoodGroupAll();
    }


    async function EditNutritionStandards(value: number, foodWeightTypeId: string, ageGroupId: string, idGroup: string, standardSanpinId: string) {

        const model: StandardSanpinPutModel = {
            Value: value,
            AgeGroup: ageGroupId,
            FoodWeightType: foodWeightTypeId,
            Id: standardSanpinId
        };

        const response = await PutService.PutFoodGroupSanpin_StandardSanpin(idGroup, model);
        loadingFoodGroupAll();
    }

    async function CreateNutritionStandards(value: number, foodWeightTypeId: string, ageGroupId: string, idGroup: string) {

        const model: StandardSanpinPostModel = {
            Value: value,
            AgeGroup: ageGroupId,
            FoodWeightType: foodWeightTypeId
        };

        const response = await PostService.PostFoodGroupSanPin_StandardSanpin(idGroup, model);
        loadingFoodGroupAll();
    }



    return (
        <React.Fragment> {isLoadingFoodGroupAll
            ? <div>Загрузка</div>

            : <Row xs={1} md={2} className="g-4">

                {lodash.map(foodGroups?.sort((a, b) => a.StartDate < b.StartDate ? 1 : -1), group => (
                    <Col key={group.Id}>
                        <Card style={{ margin: '10px' }}>
                            <Card.Header className="d-flex justify-content-between align-items-start">
                                <EditValueComponent contentType={ContentType.String} value={group.Name} action={(value) => EditNameInFoodGroup(group.Id, String(value))} />
                                <Button variant="link outline-primary" size="sm" onClick={() => { DeleteFoodGroup(group.Id) }}>
                                    <TrashSvg />
                                </Button>
                            </Card.Header>
                            <Card.Body>

                                <table className="table table-bordered">


                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Возрастная группа</th>
                                            {lodash.map(foodWeightType, a => (<th key={a.Id}>{a.Name}</th>))}
                                        </tr>
                                    </thead>


                                    <tbody>

                                        {lodash.map(ageGrops, a => (

                                            <tr key={a.Id}>
                                                <td>{lodash.indexOf(ageGrops, a) + 1}</td>
                                                <td>{a.Name}</td>

                                                {lodash.map(foodWeightType, weigthType => (

                                                    <td key={weigthType.Id}>
                                                        <EditValueComponent contentType={ContentType.Float} action={(newValue) => {
                                                            const standart: IStandardSanpinGetModel | undefined = lodash.find(group.StandardSanpinGetModels, function (o) {
                                                                return o.AgeGroup.Id == a.Id && o.FoodWeightType.Id == weigthType.Id;
                                                            });

                                                            if (standart !== undefined) {
                                                                console.log(standart);
                                                                EditNutritionStandards(Number(newValue), weigthType.Id, a.Id, group.Id, standart.Id);
                                                            } else {
                                                                CreateNutritionStandards(Number(newValue), weigthType.Id, a.Id, group.Id);
                                                            }


                                                        }} value={lodash.find(group.StandardSanpinGetModels, function (o) {
                                                            return o.AgeGroup.Id == a.Id && o.FoodWeightType.Id == weigthType.Id;
                                                        })?.Value ?? 0}></EditValueComponent></td>

                                                ))}

                                            </tr>

                                        ))}

                                    </tbody>

                                </table>


                                <AccordionComponent topic='Список продуктов' counter={group.Count}>

                                    <FoodGroupItem idFoodGroup={group.Id} source={RequestSource.SanPin} />
                                </AccordionComponent>

                                <small className="text-muted">
                                    {
                                        !lodash.isNull(group.Description)?
                                            <EditValueComponent contentType={ContentType.Textarea}
                                                action={(newValue) => EditDescriptionInFoodGroup(group.Id, String(newValue))}
                                                value={group.Description} />
                                            : 

                                            <EditValueComponent contentType={ContentType.Textarea}
                                                action={(newValue) => EditDescriptionInFoodGroup(group.Id, String(newValue))}
                                                value='' role={Role.AddValue}  style={{marginTop:"5px"}} titleAdd='Добавить описание'/>                                            
                                    }

                                </small>

                                <div className="d-flex justify-content-between align-items-start">
                                    <div></div>
                                    <small className="text-muted">{format(new Date(group.StartDate), 'yyyy-MM-dd')}</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

                <Col>
                    <Card style={{ margin: '10px', padding: '10px' }}>
                        <YupValidationStringComponent
                            buttonText='Создать'
                            label='Создайте новую группу в этой форме'
                            isTextarea={false}
                            placeholder="Укажите наименование вашей группы"
                            initial_value=''
                            postAction={(a) => {
                                const model: FoodGroupPostModel = {
                                    Name: a
                                };
                                AddNewFoodGroup(model);
                            }} />
                    </Card>
                </Col>


            </Row>

        }
        </React.Fragment>
    );
};

export default SanPinGroupAllView;