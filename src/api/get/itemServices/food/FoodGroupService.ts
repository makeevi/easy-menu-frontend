import axios from "axios";
import BaseService from "../../../common/service/BaseService";
import { GetFoodGroupAllModel } from "../../models/food/group/GetFoodGroupAllModel";
import { GetFoodGroupModel } from "../../models/food/group/GetFoodGroupModel";

export default class FoodGroupService extends BaseService {

    async GetFoodGroup(id: string) {
        const response = await axios.get(`${this.GetHost()}foodgroup/` + id, this.GetConfig());
        return response.data as GetFoodGroupModel;

    }

    async GetFoodGroupAll() {

        const response = await axios.get(`${this.GetHost()}foodgroup`, this.GetConfig());
        return response.data as GetFoodGroupAllModel[];
    }
}