import axios from "axios";
import BaseService from "../../../common/service/BaseService";
import { FoodGroupPostModel } from "../../models/food/group/FoodGroupPostModel";


export default class FoodGroupService extends BaseService {

    async PostFoodGroup(model: FoodGroupPostModel) {
        const response = await axios.post(`${this.GetHost()}foodgroup/`, model, this.GetConfig());
        return response;
    }

}