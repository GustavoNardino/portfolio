export interface IHeadConfig {
    method: string;
    body: string | null;
    headers: {
        "Content-Type": string;
        "accept": string;
        'Cache-Control': string;
    };
    withCredentials: boolean;
}
