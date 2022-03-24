import BaseService from "../../../common/service/BaseService";
import { FoodGroupSanpinPutModel } from "../../models/sanPin/group/FoodGroupSanpinPutModel";
import { StandardSanpinPutModel } from "../../models/sanPin/standard/StandardSanpinPutModel";
import axios from "axios";

export default class SanPinServer extends BaseService {

    async PutFoodGroupSanpin(id: string, model: FoodGroupSanpinPutModel) {
        const response = await axios.put(`${this.GetHost()}foodgroupsanpin/` + id, model, this.GetConfig());
        return response;
    }

    async PutStandardSanpin(id: string, model: StandardSanpinPutModel) {

        const response = await axios.put(`${this.GetHost()}foodgroupsanpin/${id}/standardsanpin`, model, this.GetConfig());
        return response;
    }

}