export interface SignInRequest {
    email: string;
    password: string
}

export interface SignInResponse {
    email: string;
    accessToken: string;
    roles: string[];
}