import React, { } from 'react';
import lodash from 'lodash';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteButton from '../../../../common/button/DeleteButton';
import { GetFoodGroupModel } from '../../../../../api/get/models/food/group/GetFoodGroupModel';

type Props = {
    model: GetFoodGroupModel;
    deleteFoodInGroup: (idFood: string) => void;
}

const FoodsTabItem: React.FC<Props> = (props) => {

    return (
        <ListGroup variant="flush" as="ol" numbered >
            {
                lodash.map(props.model.Food, a => (
                    <ListGroup.Item key={a.Id} as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">{a.Name}</div>
                        <DeleteButton onClick={() => props.deleteFoodInGroup(a.Id)} />
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    )

};

export default FoodsTabItem;


