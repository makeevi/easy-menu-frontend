import axios from "axios";
import BaseService from "../../common/service/BaseService";
export default class FoodGroupService extends BaseService {

    async DeleteFoodGroup(id: string) {
        const response = await axios.delete(`${this.GetHost()}foodgroup/` + id, this.GetConfig());
        return response;

    }

    async DeleteFoodInFoodGroup(id: string, foodId: string) {
        const response = await axios.delete(`${this.GetHost()}foodgroup/${id}/food/${foodId}`, this.GetConfig());
        return response;
    }
}