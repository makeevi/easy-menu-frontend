export default class BaseService {

  token: string  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJiY2JiYmM3Ny01OTZmLTQ4ZjgtOWI4ZS02YTIzZDRhMWE3MmMiLCJnaXZlbl9uYW1lIjoibWFrZWV2Iiwic2lkIjoiYmZjMWU0N2UtYjQxZC00MWIzLTlkYjAtZjVjN2JmNGZmODM2IiwibmJmIjoxNjQ3MDA0MzU0LCJleHAiOjE2NTIxODgzNTQsImlzcyI6IkFsdGFpVGVhbSIsImF1ZCI6IkFsdGFpVGVhbSJ9.aGk2CUEBzAbFtxaZDPohF8h8U7cA1jKkSG4-YTX1bWI';

    GetConfig(){

        return {
            headers: { 'Content-Type':'application/json', 
            Authorization: `Bearer ${this.token}` }
        };   
    }

    GetHost(){

        return "https://localhost:44334/api/2/"
    }

}