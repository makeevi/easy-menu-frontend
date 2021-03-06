import React from 'react';
import { GetSanPinGroupModel } from '../../../../../api/get/models/sanPin/group/GetSanPinGroupModel';
import { FoodGroupSanpinPutModel } from '../../../../../api/put/models/sanPin/group/FoodGroupSanpinPutModel';
import { useGlobalContext } from '../../../../../hook/GlobalContext';
import LinkPrimaryButton, { Role } from '../../../../common/button/LinkPrimaryButton';
import ModalComponent, { Size } from '../../../../common/ModalComponent';
import YupValidationStringComponent from '../../../../common/YupValidationStringComponent';

type Props = {
    model: GetSanPinGroupModel;
    loadingGroup?: () => void;
};



const DescriptionTabItem: React.FunctionComponent<Props> = (props) => {

    const { service } = useGlobalContext();



    async function EditDescriptionInFoodGroup(id: string, value: string) {

        const model: FoodGroupSanpinPutModel = {
            Description: value
        };

        const response = await service?.PutService.SanPinServer.PutFoodGroupSanpin(id, model);
        props.loadingGroup && props.loadingGroup();
    }

    function GetEditDescriptionView(value: string) {

        return (

            <YupValidationStringComponent
                buttonText='Сохранить'
                isTextarea={true}
                initial_value={value}
                postAction={(newValue) => EditDescriptionInFoodGroup(props.model.Id, newValue)}
                styleBody={{ minHeight: '200px' }}
            />
        )
    }



    return (

        <React.Fragment>

            <div className="vstack gap-3">
                <small className="text-muted">
                    {props.model?.Description}
                </small>

                <div className='d-flex justify-content-between align-items-start'>
                    <div></div>

                    <ModalComponent size={Size.lg} headerTitle={`Изменение описания группы ${props.model.Name}`}
                        bodyModal={() => GetEditDescriptionView(props.model?.Description)}>
                        <LinkPrimaryButton role={Role.edit} />
                    </ModalComponent>

                </div>
            </div>





        </React.Fragment>


    );
};

export default DescriptionTabItem;