<template>
    <div>
        <div v-if="currentFile" class="progress">
            <div
            class="progress-bar progress-bar-info progress-bar-striped"
            role="progressbar"
            :aria-valuenow="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="{ width: progress + '%' }"
            >
                {{ progress }}%
            </div>
        </div>

        <div class="alert alert-light" role="alert">{{ message }}</div>
        <div>
            <label for="file" class="btn btn-default">
                <input type="file" id="file" ref="file" @change="onFileChanged">
            </label>
            <button class="btn btn-success" :disabled="!selectedFile" @click="onUpload">Upload!</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import UploadService from '../services/UploadFilesService';
import FormData from 'form-data';
import fs from 'fs';

export default {
    name: "upload-files",

    data() {
        return {
            selectedFile: null,
            currentFile: null,
            progress: 0,
            message: "",

            fileInfos: []
        }
    },

    methods: {
        onFileChanged () {
            // this.selectedFile = event.target.files[0];
            this.selectedFile = this.$refs.file.files[0];
        },
        async onUpload() {

            let o = {
                query: `
                    mutation ($file: Upload!) {
                        singleImageEstablishment(file: $file, commercialID: "5ee3a47c297f7f2fb0e63f76") {
                            logo
                        }
                    }
                `,
                variables: {
                    file: null
                }
            }
            
            let map = {
                '0': ['variables.file']
            }

            let fd = new FormData()
            fd.append('operations', JSON.stringify(o));
            fd.append('map', JSON.stringify(map));
            fd.append(0, this.selectedFile);

            let res = await axios.post('', fd, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            console.log(res.data.data.singleImageEstablishment);

            this.message = "Uploaded File!";
            this.selectedFile = null;

        }
    }
}
</script>

<style>

</style>