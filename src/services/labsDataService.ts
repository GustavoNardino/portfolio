import { requestConfig } from "@/utils/config";

export async function getLabListData() {
    // const config: any = requestConfig("GET");
    try {
        const res = await fetch(`https://api.github.com/users/GustavoNardino/repos`, {
            next:{
                revalidate: 60
            },
            headers: {
                "Content-Type": "application/json",
                "accept": "application/vnd.github+json",
            }
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
        const res = await fetch(`https://api.github.com/repos/gustavonardino/${name}`, {
            next:{
                revalidate: 60
            },
            headers: {
                "Content-Type": "application/json",
                "accept": "application/vnd.github+json",
            }
        })
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
        const res = await fetch(`https://raw.githubusercontent.com/GustavoNardino/${name}/main/README.md`, {
            next:{
                revalidate: 60
            },
            headers: {
                "Content-Type": "application/json",
                "accept": "application/vnd.github+json",
            }
        })
            .then((res) => res.text())
            .catch((err) => err);
        return res;
    } catch (error) {
        console.log(error);
    }
}