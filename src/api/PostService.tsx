import axios from "axios";
import { FoodGroupPostModel, StandardSanpinPostModel } from "./models/PostModel";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJiY2JiYmM3Ny01OTZmLTQ4ZjgtOWI4ZS02YTIzZDRhMWE3MmMiLCJnaXZlbl9uYW1lIjoibWFrZWV2Iiwic2lkIjoiYmZjMWU0N2UtYjQxZC00MWIzLTlkYjAtZjVjN2JmNGZmODM2IiwibmJmIjoxNjQ3MDA0MzU0LCJleHAiOjE2NTIxODgzNTQsImlzcyI6IkFsdGFpVGVhbSIsImF1ZCI6IkFsdGFpVGVhbSJ9.aGk2CUEBzAbFtxaZDPohF8h8U7cA1jKkSG4-YTX1bWI';

const config = {
    headers: { 'Content-Type':'application/json', 
    Authorization: `Bearer ${token}` }
};

export default class PostService {

    static async PostFoodGroup(model: FoodGroupPostModel){
        const response = await axios.post('https://localhost:44334/api/2/foodgroup/', model, config);
        return response;
    }

    static async PostFoodGroupSanPin(model: FoodGroupPostModel){
        const response = await axios.post('https://localhost:44334/api/2/foodgroupsanpin/', model, config);
        return response;
    }

    static async PostFoodGroupSanPin_StandardSanpin(id: string, model: StandardSanpinPostModel){
        const response = await axios.post(`https://localhost:44334/api/2/foodgroupsanpin/${id}/standardsanpin`, model, config);
        return response;
    }
}