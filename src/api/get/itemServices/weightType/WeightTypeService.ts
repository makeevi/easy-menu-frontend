import BaseService from "../../../common/service/BaseService";
import axios from "axios";
import { IBaseTypeWhithStartDateIdName } from "../../../common/models/IBaseTypeWhithStartDateIdName";

export default class WeightTypeService extends BaseService {

    async GetFoodWeightTypeAll() {

        const response = await axios.get(`${this.GetHost()}foodweighttype`, this.GetConfig());
        return response.data as IBaseTypeWhithStartDateIdName[];
    }

}