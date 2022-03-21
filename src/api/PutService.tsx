import axios from "axios";
import { FoodGroupPutModel, FoodGroupSanpinPutModel, StandardSanpinPutModel } from "./models/PutModel";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJiY2JiYmM3Ny01OTZmLTQ4ZjgtOWI4ZS02YTIzZDRhMWE3MmMiLCJnaXZlbl9uYW1lIjoibWFrZWV2Iiwic2lkIjoiYmZjMWU0N2UtYjQxZC00MWIzLTlkYjAtZjVjN2JmNGZmODM2IiwibmJmIjoxNjQ3MDA0MzU0LCJleHAiOjE2NTIxODgzNTQsImlzcyI6IkFsdGFpVGVhbSIsImF1ZCI6IkFsdGFpVGVhbSJ9.aGk2CUEBzAbFtxaZDPohF8h8U7cA1jKkSG4-YTX1bWI';

const config = {
    headers: { 'Content-Type':'application/json', 
    Authorization: `Bearer ${token}` }
};

export default class PutService {

    static async PutFoodGroup(id: string, model: FoodGroupPutModel){
        const response = await axios.put('https://localhost:44334/api/2/foodgroup/'+ id, model, config);
        return response;
    }

    static async PutFoodGroupSanpin(id: string, model: FoodGroupSanpinPutModel){
        const response = await axios.put('https://localhost:44334/api/2/foodgroupsanpin/'+ id, model, config);
        return response;
    }

    static async PutFoodGroupSanpin_StandardSanpin(id: string, model: StandardSanpinPutModel){

        const response = await axios.put(`https://localhost:44334/api/2/foodgroupsanpin/${id}/standardsanpin`, model, config);
        return response;
    }
}



