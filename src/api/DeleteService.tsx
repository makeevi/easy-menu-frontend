import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJiY2JiYmM3Ny01OTZmLTQ4ZjgtOWI4ZS02YTIzZDRhMWE3MmMiLCJnaXZlbl9uYW1lIjoibWFrZWV2Iiwic2lkIjoiYmZjMWU0N2UtYjQxZC00MWIzLTlkYjAtZjVjN2JmNGZmODM2IiwibmJmIjoxNjQ3MDA0MzU0LCJleHAiOjE2NTIxODgzNTQsImlzcyI6IkFsdGFpVGVhbSIsImF1ZCI6IkFsdGFpVGVhbSJ9.aGk2CUEBzAbFtxaZDPohF8h8U7cA1jKkSG4-YTX1bWI';

const config = {
    headers: { 'Content-Type':'application/json', 
    Authorization: `Bearer ${token}` }
};

export default class DeleteService {

    static async DeleteFoodGroup(id: string){
        const response = await axios.delete('https://localhost:44334/api/2/foodgroup/'+ id, config);
        return response;

    }

    static async DeleteFoodInFoodGroup(id: string, foodId: string){
        const response = await axios.delete('https://localhost:44334/api/2/foodgroup/'+ id +'/food/' + foodId, config);
        return response;
    }

    static async DeleteSanPinGroup(id: string){
        const response = await axios.delete('https://localhost:44334/api/2/foodgroupsanpin/'+ id, config);
        return response;

    }

}