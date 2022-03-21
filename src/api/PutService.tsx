import axios from "axios";
import { FoodGroupPutModel, FoodGroupSanpoinPutModel, StandardSanpinPutModel } from "./models/PutModel";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJiY2JiYmM3Ny01OTZmLTQ4ZjgtOWI4ZS02YTIzZDRhMWE3MmMiLCJnaXZlbl9uYW1lIjoibWFrZWV2Iiwic2lkIjoiYmZjMWU0N2UtYjQxZC00MWIzLTlkYjAtZjVjN2JmNGZmODM2IiwibmJmIjoxNjQwNzY3OTM1LCJleHAiOjE2NDU5NTE5MzUsImlzcyI6IkFsdGFpVGVhbSIsImF1ZCI6IkFsdGFpVGVhbSJ9.gy_MMXizXTRtQpnFPpisMIJGPh6e8i-h4rEsBadc35g';

const config = {
    headers: { 'Content-Type':'application/json', 
    Authorization: `Bearer ${token}` }
};

export default class PutService {

    static async PutFoodGroup(id: string, model: FoodGroupPutModel){
        const response = await axios.put('https://localhost:44334/api/2/foodgroup/'+ id, model, config);
        return response;
    }

    static async PutFoodGroupSanpin(id: string, model: FoodGroupSanpoinPutModel){
        const response = await axios.put('https://localhost:44334/api/2/foodgroupsanpin/'+ id, model, config);
        return response;
    }

    static async PutFoodGroupSanpin_StandardSanpin(id: string, model: StandardSanpinPutModel){

        const response = await axios.put(`https://localhost:44334/api/2/foodgroupsanpin/${id}/standardsanpin`, model, config);
        return response;
    }
}



