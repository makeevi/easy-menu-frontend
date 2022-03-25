import BaseService from "../../../common/service/BaseService";
import { StandardSanpinPostModel } from "../../models/sanPin/standard/StandardSanpinPostModel";
import axios from "axios";
import { FoodGroupPostModel } from "../../models/food/group/FoodGroupPostModel";

export default class SanPinServer extends BaseService {

    async PostStandardSanpin(id: string, model: StandardSanpinPostModel) {
        const response = await axios.post(`${this.GetHost()}foodgroupsanpin/${id}/standardsanpin`, model, this.GetConfig());
        return response;
    }

    async PostFoodGroupSanPin(model: FoodGroupPostModel) {
        const response = await axios.post(`${this.GetHost()}foodgroupsanpin/`, model, this.GetConfig());
        return response;
    }

}