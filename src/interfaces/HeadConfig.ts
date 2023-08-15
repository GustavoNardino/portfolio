export interface IHeadConfig {
    method: string;
    body: string | null;
    headers: {
        "Content-Type": string;
        "accept": string;
    };
    withCredentials: boolean;
}
