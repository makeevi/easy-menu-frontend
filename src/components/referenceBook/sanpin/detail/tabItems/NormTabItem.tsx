import { type } from '@testing-library/user-event/dist/type';
import lodash from 'lodash';
import React, { useEffect, useState } from 'react';
import { IBaseTypeWhithStartDateIdName } from '../../../../../api/common/models/IBaseTypeWhithStartDateIdName';
import { GetSanPinGroupModel } from '../../../../../api/get/models/sanPin/group/GetSanPinGroupModel';
import { IStandardSanpinGetModel } from '../../../../../api/get/models/sanPin/standard/IStandardSanpinGetModel';
import { StandardSanpinPostModel } from '../../../../../api/post/models/sanPin/standard/StandardSanpinPostModel';
import { StandardSanpinPutModel } from '../../../../../api/put/models/sanPin/standard/StandardSanpinPutModel';
import { useGlobalContext } from '../../../../../hook/GlobalContext';
import { useIsLoading } from '../../../../../hook/useIsLoading';
import LinkPrimaryButton, { Role } from '../../../../common/button/LinkPrimaryButton';
import ModalComponent, { Size } from '../../../../common/ModalComponent';
import YupValidationNumberComponent from '../../../../common/YupValidationNumberComponent';


type Props = {
    model: GetSanPinGroupModel;
    loadingGroup?: () => void;
};



const NormTabItem: React.FunctionComponent<Props> = (props) => {

    const { service } = useGlobalContext();

    const [ageGroups, setAgeGroups] = useState<IBaseTypeWhithStartDateIdName[]>();
    const [foodWeightType, setFoodWeightType] = useState<IBaseTypeWhithStartDateIdName[]>();

    const [loading, isLoading, error] = useIsLoading(async () => {

        const responseAgeGroup = await service?.GetService.AgeGroupService.GetAgeGroupAll();
        setAgeGroups(responseAgeGroup);

        const responseFoodWeightType = await service?.GetService.WeightTypeService.GetFoodWeightTypeAll();
        setFoodWeightType(responseFoodWeightType);
    });

    useEffect(() => {

        loading();

    }, []);






    type ResultStandardSanpin = {
        id?: string,
        value: number
    }

    function GetNorm2AgeGroup(ageGroupId: string, weigthTypeId: string): ResultStandardSanpin {

        const standard: IStandardSanpinGetModel | undefined = lodash.find(props.model.StandardSanpinGetModels, function (o) {
            return o.AgeGroup.Id == ageGroupId && o.FoodWeightType.Id === weigthTypeId;
        });

        return { value: standard !== undefined ? Number(standard.Value) : 0, id: standard?.Id ?? undefined }
    }

    async function EditNutritionStandards(value: number, foodWeightTypeId: string, ageGroupId: string, standardSanpinId: string) {

        const model: StandardSanpinPutModel = {
            Value: value,
            AgeGroup: ageGroupId,
            FoodWeightType: foodWeightTypeId,
            Id: standardSanpinId
        };

        const response = await service?.PutService.SanPinServer.PutStandardSanpin(props.model.Id, model);
        props.loadingGroup && props.loadingGroup();
    }

    async function CreateNutritionStandards(value: number, foodWeightTypeId: string, ageGroupId: string) {

        const model: StandardSanpinPostModel = {
            Value: value,
            AgeGroup: ageGroupId,
            FoodWeightType: foodWeightTypeId
        };

        const response = await service?.PostService.SanPinServer.PostStandardSanpin(props.model.Id, model);
        props.loadingGroup && props.loadingGroup();
    }

    function EditNorm(value: ResultStandardSanpin, foodWeightTypeId: string, ageGroupId: string) {
        return (
            <YupValidationNumberComponent
                postAction={(newValue) => {
                    if (value.id != undefined) {
                        EditNutritionStandards(newValue, foodWeightTypeId, ageGroupId, value.id)
                    }
                    else {
                        CreateNutritionStandards(newValue, foodWeightTypeId, ageGroupId)
                    }
                }}
                initial_value={value.value}
                buttonText={"Сохранить"} />)
    }

    function GetNormTabItemView() {
        return (
            <table className="table table-bordered">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Возрастная группа</th>
                        {lodash.map(foodWeightType, a => (<th key={a.Id}>{a.Name}</th>))}
                    </tr>
                </thead>

                <tbody>

                    {lodash.map(ageGroups, a => (

                        <tr key={a.Id}>
                            <td>{lodash.indexOf(ageGroups, a) + 1}</td>
                            <td>{a.Name}</td>

                            {lodash.map(foodWeightType, weigthType => (

                                <td key={weigthType.Id}>
                                    {
                                        <div className='d-flex justify-content-between align-items-start'>
                                            <div>{GetNorm2AgeGroup(a.Id, weigthType.Id).value}</div>
                                            <ModalComponent size={Size.lg} headerTitle={`Изменение нормы питания ${weigthType.Name}`}
                                                bodyModal={() => EditNorm(GetNorm2AgeGroup(a.Id, weigthType.Id), weigthType.Id, a.Id)}>
                                                <LinkPrimaryButton role={Role.edit} />
                                            </ModalComponent>
                                        </div>
                                    }

                                </td>

                            ))}

                        </tr>

                    ))}

                </tbody>

            </table>
        )
    }




    return (

        <div>
            {isLoading ? <div>Загрузка</div> : GetNormTabItemView()}
        </div>

    );
};

export default NormTabItem;


