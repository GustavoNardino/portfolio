import { api, requestConfig } from "@/utils/config";
import { headers } from "next/dist/client/components/headers";

export async function getLabListData() {
    // const config: any = requestConfig("GET");
    try {
        const res = await fetch(`https://api.github.com/users/GustavoNardino/repos`, {
            cache: 'no-cache'
        })
            .then((res) => res.json())
            .catch((err) => err);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export async function getLabData(name: string) {
    const config: any = requestConfig("GET");
    try {
        const res = await fetch(`https://api.github.com/repos/gustavonardino/${name}`, config)
            .then((res) => res.json())
            .catch((err) => err);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export async function getLabReadme(name: string) {
    const config: any = requestConfig("GET");
    try {
        const res = await fetch(`https://api.github.com/repos/gustavonardino/${name}/contents/README.md`, config)
            .then((res) => res.json())
            .catch((err) => err);
        return res;
    } catch (error) {
        console.log(error);
    }
}