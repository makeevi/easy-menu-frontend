import { useEffect, useState } from "react";
import { Tab, Tabs } from 'react-bootstrap';
import { GetFoodGroupModel } from "../../../../api/get/models/food/group/GetFoodGroupModel";
import { useGlobalContext } from "../../../../hook/GlobalContext";
import { useIsLoading } from '../../../../hook/useIsLoading';
import FoodsTabItem from "./tabItems/FoodsTabItem";

type Props = {
    id: string;
}

const DetailTemplate: React.FunctionComponent<Props> = (props) => {

    const { service } = useGlobalContext();

    const [group, setGroup] = useState<GetFoodGroupModel>();

    const [loadingGroup, isLoadingGroup, error] = useIsLoading(async () => {

        const responseFoodGroups = await service?.GetService.FoodGroupService.GetFoodGroup(props.id);
        setGroup(responseFoodGroups);
    });

    useEffect(() => {

        loadingGroup();
        // Service.DeleteService

    }, []);

    async function DeleteFoodInGroup(idFood: string) {

        await service?.DeleteService.FoodGroupService.DeleteFoodInFoodGroup(props.id, idFood);

        loadingGroup();
    }


    function GetView(group: GetFoodGroupModel) {
        return (
            <Tabs defaultActiveKey="products" className="mb-3">
                <Tab eventKey="products" title="Продукты">
                    <FoodsTabItem model={group} deleteFoodInGroup={DeleteFoodInGroup} />
                </Tab>
            </Tabs>

        )
    }

    return <div>
        {isLoadingGroup ? <div>Загрузка</div> : group && GetView(group)}
    </div>
};

export default DetailTemplate;