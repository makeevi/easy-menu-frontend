import React, { useEffect, useState } from 'react';
import lodash from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useIsLoading } from '../../../hook/useIsLoading';
import YupValidationStringComponent from '../../common/YupValidationStringComponent';
import TabTemplate from './TabTemplate';
import LinkPrimaryButton, { Role } from '../../common/button/LinkPrimaryButton';
import ModalComponent, { Size } from '../../common/ModalComponent';
import { useGlobalContext } from '../../../hook/GlobalContext';
import { GetSanPinGroupAllModel } from '../../../api/get/models/sanPin/group/GetSanPinGroupAllModel';
import { FoodGroupPostModel } from '../../../api/post/models/food/group/FoodGroupPostModel';
import { FoodGroupPutModel } from '../../../api/put/models/food/group/FoodGroupPutModel';

const SanPinGroupView: React.FunctionComponent = () => {
    const { service } = useGlobalContext();
    const [foodGroups, setFoodGroups] = useState<GetSanPinGroupAllModel[]>();
    const [loadingFoodGroupAll, isLoadingFoodGroupAll, error] = useIsLoading(async () => {

        const response = await service?.GetService.SanPinService.GetSanPinGroupAll();
        setFoodGroups(response);
    });

    useEffect(() => {

        loadingFoodGroupAll();

    }, []);

    async function AddNewFoodGroup(model: FoodGroupPostModel) {

        const response = await service?.PostService.SanPinServer.PostFoodGroupSanPin(model);
        loadingFoodGroupAll();
    }

    async function DeleteFoodGroup(id: string) {

        const response = await service?.DeleteService.SanPinService.DeleteSanPinGroup(id);
        loadingFoodGroupAll();
    }

    async function PutFoodGroup(id: string, value: string) {

        const model: FoodGroupPutModel = {
            Name: value
        };

        const response = await service?.PutService.SanPinServer.PutFoodGroupSanpin(id, model);
        loadingFoodGroupAll();
    }

    function GetCardNewGroupView() {

        return <YupValidationStringComponent
            buttonText='Создать'
            placeholder="Укажите наименование вашей группы"
            isTextarea={false}
            initial_value=''
            postAction={(a) => {
                const model: FoodGroupPostModel = {
                    Name: a
                };
                AddNewFoodGroup(model);
            }} style={{ margin: '10px', padding: '10px' }} />

    }

    return (
        <React.Fragment> {isLoadingFoodGroupAll
            ? <div>Загрузка</div> :


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" >
                            <ModalComponent size={Size.lg} bodyModal={GetCardNewGroupView} headerTitle={"Новая группа продуктов"}>
                                <LinkPrimaryButton role={Role.add} />
                            </ModalComponent>
                        </th>
                        <th scope="col">Наименование группы СапПин</th>
                        <th scope="col">Продукты</th>
                        <th scope="col" style={{ width: "100px" }} ></th>
                    </tr>
                </thead>
                <tbody>

                    {lodash.map(foodGroups?.sort((a, b) => a.StartDate < b.StartDate ? 1 : -1), function (item, index) {
                        return <TabTemplate
                            key={item.Id}
                            id={item.Id}
                            index={index}
                            name={item.Name}
                            count={item.Count}
                            startDate={item.StartDate}
                            delete={DeleteFoodGroup}
                            editNameGroup={PutFoodGroup} />
                    })}

                </tbody>
            </table>
        }
        </React.Fragment>
    );
};

export default SanPinGroupView;