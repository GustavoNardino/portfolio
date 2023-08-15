import { IHeadConfig } from "../interfaces/HeadConfig"

export const api = process.env.NEXT_PUBLIC_API_URL;

export const requestConfig = (
    method: string = 'GET',
    data: any = null,
    token: string | null = null,
) => {
    let config: IHeadConfig = {
        method,
        body: data ? JSON.stringify(data) : null,
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
        },
        withCredentials: true,
    }
    return config;
}
