export async function getLabListData() {
    try {
        const res = await fetch(`https://api.github.com/users/GustavoNardino/repos`, {
            cache: 'no-cache',
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
    try {
        const res = await fetch(`https://api.github.com/repos/gustavonardino/${name}`, {
            cache: 'no-cache',
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
    try {
        const res = await fetch(`https://raw.githubusercontent.com/GustavoNardino/${name}/main/README.md`, {
            cache: 'no-cache',
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