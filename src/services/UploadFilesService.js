import axios from 'axios';

class UploadFilesService {
    upload(file, onUploadProgress) {
        let formData = new FormData();

        formData.append("file", file);

        for (var value of formData.values()) {
            console.log(value);
        }

        // try {
        //     return axios.post('', {
        //         query: `
        //         mutation photo($file: Upload) {
        //             photoCommercialEstablishment(file: $file) {
        //                 filelocation
        //             }
        //         }
        //         `,
        //         variables: {
        //             file: formData
        //         }
        //     }, onUploadProgress);

        //     // console.log(result.data);
        //     // return onUploadProgress;
        // } catch (err) {
        //     console.log(err);
        // }

        return axios.post("/photoCommercialEstablishment", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress
        });
    }

    getFiles() {
        return axios.get("/files");
    }
}

export default new UploadFilesService();