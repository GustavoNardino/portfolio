import { requestConfig } from "@/utils/config";

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
        const res = await fetch(`https://raw.githubusercontent.com/GustavoNardino/${name}/main/README.md`, config)
            .then((res) => res.text())
            .catch((err) => err);
        return res;
    } catch (error) {
        console.log(error);
    }
}