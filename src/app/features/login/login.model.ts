export interface LoginRequest {
    username: string,
    password: string,
    expiresInMins: number
}

export interface LoginResponse {
    id?: number,
    username?: string,
    email?: string,
    firstName?: string,
    lastName?: string,
    gender?: string,
    image?: string,
    accessToken?: string,
    refreshToken?: string
}
export interface UserDataModel { 
    email: string;
     exp: number;
      firstName: string;
      gender: string;
      iat: number;
      id: number;
      image: string;
      lastName: string;
      username: string; 
    }