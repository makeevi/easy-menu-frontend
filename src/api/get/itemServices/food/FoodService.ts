import BaseService from "../../../common/service/BaseService";
import axios from "axios";
import { GetFoodModel } from "../../models/food/food/GetFoodModel";

export default class FoodService extends BaseService {

    async GetFoodAll() {

        const response = await axios.get(`${this.GetHost()}food`, this.GetConfig());
        return response.data as GetFoodModel[];
    }

}