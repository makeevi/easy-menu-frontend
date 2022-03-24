import React, { useEffect, useState } from 'react';
import GetService from '../../../../../api/GetService';
import lodash from 'lodash';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteButton from '../../../../common/button/DeleteButton';
import { useIsLoading } from '../../../../../hook/useIsLoading';
import EditValueComponent from '../../../../common/EditValueComponent';
import DeleteService from '../../../../../api/DeleteService';
import { GetFoodGroupModel } from '../../../../../api/models/GetModel';

type Props = {
    idFoodGroup: string;
    ShowHideView?: () => void;
}

const FoodsTabItem: React.FC<Props> = (props) => {

    const [foodGroup, setFoodGroup] = useState<GetFoodGroupModel>();

    const [loadingFoodGroup, isLoadingFoodGroup, error] = useIsLoading(async () => {

        const response = await GetService.GetSanPinGroup(props.idFoodGroup);

        setFoodGroup(response.data);
    });

    useEffect(() => {

        loadingFoodGroup();

    }, []);

    async function DeleteFoodInGroup(idFood: string) {

        await DeleteService.DeleteFoodInFoodGroup(props.idFoodGroup, idFood);

        loadingFoodGroup();
    }

    return (
        <React.Fragment>
            {isLoadingFoodGroup ?
                <div>Загрузка</div>

                : <ListGroup variant="flush" as="ol" numbered >
                    {
                        lodash.map(foodGroup?.Food, a => (
                            <ListGroup.Item key={a.Id} as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">{a.Name}</div>
                                <DeleteButton onClick={() => DeleteFoodInGroup(a.Id)} />
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            }
        </React.Fragment>
    )

};

export default FoodsTabItem;