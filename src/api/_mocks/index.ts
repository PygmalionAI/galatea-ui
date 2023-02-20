import charactersGetMockResponse from "./characters/get/mock";
import charactersIdGetMockResponse from "./characters/id/get/mock";
import usersGetMockResponse from "./users/login/get/mock";

export default function bootstrapMocks(): void {
  if (process.env.USE_MOCK !== 'true') return;

  charactersGetMockResponse();
  charactersIdGetMockResponse();
  usersGetMockResponse();
}