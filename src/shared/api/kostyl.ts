export const sendFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return await fetch("http://192.168.14.141:8400/api/load", {
        method: "POST",
        body: formData,
        headers: new Headers({ "Content-Type": "multipart/form-data" }),
    }).then(async (res) => await res.json());
};
