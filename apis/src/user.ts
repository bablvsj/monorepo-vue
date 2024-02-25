import api from "./api";

interface loginParams {
  username: string;
  password: string;
}

export const userApi = {
  login: (params: loginParams) => api.post("/api/login", params),
};
