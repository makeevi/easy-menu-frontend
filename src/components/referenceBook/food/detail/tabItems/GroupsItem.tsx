import React, { useEffect, useState } from 'react';
import lodash from 'lodash';
import { ListGroup } from 'react-bootstrap';
import { GetFoodDetailModel } from '../../../../../api/get/models/food/food/GetFoodDetailModel';
import LinkPrimaryButton, { Role } from '../../../../common/button/LinkPrimaryButton';
type Props = {
    model: GetFoodDetailModel;
    loadingFood?: () => void;
}

const GroupsItem: React.FC<Props> = (props) => {


    function GetSanPinGroup() {

        return (
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">СанПин</div>
                    {props.model.FoodGroupSanpin?.Name}
                </div>
                <LinkPrimaryButton role={Role.delete} />
            </li>
        )
    }

    function GetFoodGroup() {

        return (
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Группа продуктов</div>
                    {props.model.FoodGroup?.Name}
                </div>

                <LinkPrimaryButton role={Role.delete} />

            </li>
        )
    }



    function GetView() {
        return (

            <ol className="list-group list-group-numbered">
                {props.model.FoodGroupSanpin && GetSanPinGroup()}
                {props.model.FoodGroup && GetFoodGroup()}
            </ol>
        )
    }

    return (
        <React.Fragment>{GetView()}</React.Fragment>
    )

};

export default GroupsItem;