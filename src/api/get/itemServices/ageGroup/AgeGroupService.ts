import BaseService from "../../../common/service/BaseService";
import axios from "axios";
import { IAgeGroupGetModel } from "../../models/ageGroup/IAgeGroupGetModel";
import { IBaseTypeWhithStartDateIdName } from "../../../common/models/IBaseTypeWhithStartDateIdName";

export default class AgeGroupService extends BaseService {

    async GetAgeGroupAll() {

        const response = await axios.get(`${this.GetHost()}agegroup`, this.GetConfig());
        return response.data as IBaseTypeWhithStartDateIdName[];
    }

}