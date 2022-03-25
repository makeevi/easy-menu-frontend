import React, { useEffect, useState } from 'react';
import lodash from 'lodash';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteButton from '../../../../common/button/DeleteButton';
import { useIsLoading } from '../../../../../hook/useIsLoading';
import { useGlobalContext } from '../../../../../hook/GlobalContext';
import { GetSanPinGroupModel } from '../../../../../api/get/models/sanPin/group/GetSanPinGroupModel';

type Props = {
    idFoodGroup: string;
    ShowHideView?: () => void;
}

const FoodsTabItem: React.FC<Props> = (props) => {

    const { service } = useGlobalContext();

    const [foodGroup, setFoodGroup] = useState<GetSanPinGroupModel>();

    const [loadingFoodGroup, isLoadingFoodGroup, error] = useIsLoading(async () => {

        const response = await service?.GetService.SanPinService.GetSanPinGroup(props.idFoodGroup);

        setFoodGroup(response);
    });

    useEffect(() => {

        loadingFoodGroup();

    }, []);

    async function DeleteFoodInGroup(idFood: string) {

        await service?.DeleteService.SanPinService.DeleteFoodInGroup(props.idFoodGroup, idFood);

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