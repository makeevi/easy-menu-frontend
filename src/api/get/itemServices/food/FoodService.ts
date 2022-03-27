import BaseService from "../../../common/service/BaseService";
import axios from "axios";
import { GetFoodDetailModel } from "../../models/food/food/GetFoodDetailModel";
import { GetFoodShortModel } from "../../models/food/food/GetFoodShortModel";

export default class FoodService extends BaseService {

    async GetFoodAll() {

        const response = await axios.get(`${this.GetHost()}food`, this.GetConfig());
        return response.data as GetFoodShortModel[];
    }

    async GetFoodDetail(id: string) {

        const response = await axios.get(`${this.GetHost()}food/${id}`, this.GetConfig());
        return response.data as GetFoodDetailModel;
    }

}