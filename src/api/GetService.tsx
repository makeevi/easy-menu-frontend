import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJiY2JiYmM3Ny01OTZmLTQ4ZjgtOWI4ZS02YTIzZDRhMWE3MmMiLCJnaXZlbl9uYW1lIjoibWFrZWV2Iiwic2lkIjoiYmZjMWU0N2UtYjQxZC00MWIzLTlkYjAtZjVjN2JmNGZmODM2IiwibmJmIjoxNjQ3MDA0MzU0LCJleHAiOjE2NTIxODgzNTQsImlzcyI6IkFsdGFpVGVhbSIsImF1ZCI6IkFsdGFpVGVhbSJ9.aGk2CUEBzAbFtxaZDPohF8h8U7cA1jKkSG4-YTX1bWI';

const config = {
    headers: { 'Content-Type':'application/json', 
    Authorization: `Bearer ${token}` }
};

const bodyParameters = {
   key: "value"
};

export default class GetService {

    static async GetFoodGroup(id: string){
        const response = await axios.get('https://localhost:44334/api/2/foodgroup/'+ id, config);
        return response;

    }

    static async GetSanPinGroup(id: string){
        const response = await axios.get('https://localhost:44334/api/2/foodgroupsanpin/'+ id, config);
        return response;

    }

    static async GetFoodGroupAll(){

          const response = await axios.get('https://localhost:44334/api/2/foodgroup', config);
          return response;

    }

    static async GetSanPinGroupAll(){

        const response = await axios.get('https://localhost:44334/api/2/foodgroupsanpin', config);
        return response;
    }

    static async GetFoodWeightTypeAll(){

        const response = await axios.get('https://localhost:44334/api/2/foodweighttype', config);
        return response;
    }

    static async GetAgeGroupAll(){

        const response = await axios.get('https://localhost:44334/api/2/agegroup', config);
        return response;
    }

    static async GetFoodAll(){

        const response = await axios.get('https://localhost:44334/api/2/food', config);
        return response;
    }


}