import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { GetFoodDetailModel } from '../../../api/get/models/food/food/GetFoodDetailModel';
import { GetFoodShortModel } from '../../../api/get/models/food/food/GetFoodShortModel';
import { useGlobalContext } from '../../../hook/GlobalContext';
import { useIsLoading } from '../../../hook/useIsLoading';
import LinkPrimaryButton, { Role } from '../../common/button/LinkPrimaryButton';
import ModalComponent, { Size } from '../../common/ModalComponent';
import lodash from 'lodash';
import TabTemplate from './TabTemplate';


const FoodsView: React.FunctionComponent = () => {

    const { service } = useGlobalContext();
    const [foods, setFoods] = useState<GetFoodShortModel[]>();
    const [loadingFoodAll, isLoadingFoodAll, error] = useIsLoading(async () => {

        const response = await service?.GetService.FoodService.GetFoodAll();
        setFoods(response);
    });

    useEffect(() => {

        loadingFoodAll();
    }, []);

    function GetCardNewGroupView() {
        return <div></div>
    }

    return (
        <React.Fragment>{isLoadingFoodAll
            ? <div>Загрузка</div> :


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" >
                            <ModalComponent size={Size.lg} bodyModal={GetCardNewGroupView} headerTitle={"Новый продукт"}>
                                <LinkPrimaryButton role={Role.add} />
                            </ModalComponent>
                        </th>
                        <th scope="col">Наименование продукта</th>
                        <th scope="col">Источник</th>
                        <th scope="col" style={{ width: "100px" }} ></th>
                    </tr>
                </thead>
                <tbody>

                    {lodash.map(foods?.sort((a, b) => a.StartDate < b.StartDate ? 1 : -1), function (item, index) {
                        return <TabTemplate
                            key={item.Id}
                            id={item.Id}
                            index={index}
                            name={item.Name}
                            startDate={item.StartDate}
                            source={item.Source.Name}
                            delete={(arg) => { }}
                            editName={(id, value) => { }} />
                    })}

                </tbody>
            </table>
        }

        </React.Fragment>
    )


}

export default FoodsView;