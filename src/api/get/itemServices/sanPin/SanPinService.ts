import axios from "axios";
import BaseService from "../../../common/service/BaseService";
import { GetSanPinGroupAllModel } from "../../models/sanPin/group/GetSanPinGroupAllModel";
import { GetSanPinGroupModel } from "../../models/sanPin/group/GetSanPinGroupModel";

export default class SanPinService extends BaseService {

    async GetSanPinGroupAll() {

        const response = await axios.get(`${this.GetHost()}foodgroupsanpin`, this.GetConfig());
        return response.data as GetSanPinGroupAllModel[];
    }

    async GetSanPinGroup(id: string) {
        const response = await axios.get(`${this.GetHost()}foodgroupsanpin/${id}`, this.GetConfig());
        return response.data as GetSanPinGroupModel;

    }

}