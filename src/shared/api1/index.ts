const SERVER = "http://192.168.14.141:8400";
const API_SERVER = `${SERVER}/api`;

export const root = async () => {
    return await fetch(SERVER);
};

export const load = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    return await fetch(`${API_SERVER}/load`, {
        body: formData,
        headers: new Headers({ "Content-Type": "multipart/form-data" }),
    }).then(async (res) => await res.json());
};
