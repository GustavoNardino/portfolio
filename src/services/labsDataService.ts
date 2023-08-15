import { api, requestConfig } from "@/utils/config";

export async function getLabListData() {
    const config: any = requestConfig("GET");
    try {
        const res = await fetch(api + '', {
            cache: 'no-cache'
        })
            .then((res) => res.json())
            .catch((err) => err);
        return res;
    } catch (error) {
        console.log(error);
    }
}