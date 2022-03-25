import BaseService from "../../../common/service/BaseService";
import axios from "axios";

export default class SanPinService extends BaseService {

    async DeleteSanPinGroup(id: string) {
        const response = await axios.delete(`${this.GetHost()}foodgroupsanpin/${id}`, this.GetConfig());
        return response;

    }

    async DeleteFoodInGroup(id: string, foodId: string) {
        const response = await axios.delete(`${this.GetHost()}foodgroupsanpin/${id}/food/${foodId}`, this.GetConfig());
        return response;
    }

}