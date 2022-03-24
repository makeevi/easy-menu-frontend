import BaseService from "../../../common/service/BaseService";
import { StandardSanpinPostModel } from "../../models/sanPin/standard/StandardSanpinPostModel";
import axios from "axios";

export default class SanPinServer extends BaseService {

    async PostStandardSanpin(id: string, model: StandardSanpinPostModel) {
        const response = await axios.post(`${this.GetHost()}foodgroupsanpin/${id}/standardsanpin`, model, this.GetConfig());
        return response;
    }

}