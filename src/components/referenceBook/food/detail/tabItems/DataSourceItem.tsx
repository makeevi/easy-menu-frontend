import React, { useEffect, useState } from 'react';
import { GetFoodBasicInfoModel } from '../../../../../api/common/models/GetFoodBasicInfoModel';
import { GetFoodDetailModel } from '../../../../../api/get/models/food/food/GetFoodDetailModel';
import LinkPrimaryButton, { Role } from '../../../../common/button/LinkPrimaryButton';
import ModalComponent, { Size } from '../../../../common/ModalComponent';
import YupValidationStringComponent from '../../../../common/YupValidationStringComponent';
type Props = {
    model: GetFoodDetailModel;
    loadingFood?: () => void;
}

const DataSourceItem: React.FC<Props> = (props) => {

    function GetEditSourceView(model: GetFoodBasicInfoModel) {

        <div></div>
    }

    return (
        <div className="vstack gap-3">
            <small className="text-muted">
                {props.model?.Source.Name}
            </small>

            <div className='d-flex justify-content-between align-items-start'>
                <div></div>

                <ModalComponent size={Size.lg} headerTitle={`Изменение описания группы ${props.model.Name}`}
                    bodyModal={() => GetEditSourceView(props.model?.Source)}>
                    <LinkPrimaryButton role={Role.edit} />
                </ModalComponent>

            </div>
        </div>
    )

};

export default DataSourceItem;


