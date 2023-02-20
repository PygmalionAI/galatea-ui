import fetchMock from 'fetch-mock';
import { BASE_CORE_API_URL } from "../../..";
import data from "../data" 

export default function mockResponse(): void {
    fetchMock.get(`${BASE_CORE_API_URL}/characters`, {
        status: 200,
        body: JSON.stringify(data)
    });
}