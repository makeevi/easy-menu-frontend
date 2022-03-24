import axios from "axios";
import BaseService from "../../../common/service/BaseService";
import { FoodGroupPutModel } from "../../models/food/group/FoodGroupPutModel";

export default class FoodGroupService extends BaseService {

    async PutFoodGroup(id: string, model: FoodGroupPutModel) {
        const response = await axios.put(`${this.GetHost()}foodgroup/` + id, model, this.GetConfig());
        return response;
    }
}