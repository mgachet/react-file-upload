import axios from 'axios';
import React, { useState } from 'react';


const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const onFileChange = event => {
        // Update the state 
        setSelectedFile(event.target.files[0]);
    };

    // On file upload (click the upload button) 
    const onFileUpload = (event) => {

        // Create an object of formData 
        const formData = new FormData();
        // Update the formData object 
        formData.append("file", selectedFile);

        // Details of the uploaded file 
        //console.log(selectedFile);

        // Request made to the backend api 
        // Send formData object 
        axios.post("api/upload", formData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };


    return (
        <div>
            <h1>
                Uploading files
            </h1>
            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>
                    Upload!
                </button>
            </div>

        </div>
    );
}

export default FileUpload; 