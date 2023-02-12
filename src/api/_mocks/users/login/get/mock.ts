/* eslint-disable import/no-extraneous-dependencies */
import fetchMock from 'fetch-mock';
/* eslint-disable import/prefer-default-export */
import { BASE_CORE_API_URL } from "../../../..";

export default function mockResponse(): void {
    fetchMock.mock(`${BASE_CORE_API_URL}/users/login`, {
        status: 200,
        body: JSON.stringify({
            "id": "707b556c-3de9-488a-8f2f-0cd82b65a30e",
            "email": "mock@example.com",
            "display_name": "Mock User",
            "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcwN2I1NTZjLTNkZTktNDg4YS04ZjJmLTBjZDgyYjY1YTMwZSIsImVtYWlsIjoibW9ja0BleGFtcGxlLmNvbSIsImRpc3BsYXlfbmFtZSI6Ik1vY2sgVXNlciIsImlhdCI6MTExMTExMTExMTF9.4pUq0VNbMBJepmXkIdn97WRW9Je5_a6vKNXBwXHPJDo"
        })
    });
}