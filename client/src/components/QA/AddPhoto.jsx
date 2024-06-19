import React, { useState,useEffect } from 'react';

export default function AddPhoto(props) {
    const {setAddPhoto, setGetPhotos} = props;
    const [selectFiles, setSelectFiles] = useState([]);
    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);
        // Check the number of files
        if (selectFiles + newFiles > 5) {
            alert('You can only upload up to 5 files.');
            return;
        }

        const filesWithPrevies = newFiles.map(file => ({
            data:file,
            preview: URL.createObjectURL(file)
        }));
        setSelectFiles(prevFiles => [...prevFiles, ...filesWithPrevies]);
    };
    const handleUpload = () => {
        if (selectFiles.length === 0) {
            alert('Please select some files first!');
            return;
        }

        const formData = new FormData();
        selectFiles.forEach(file => formData.append('files[]', file.data));
        setGetPhotos(selectFiles);
    };

    useEffect(() => {
        return () => {
            selectFiles.forEach(file => URL.revokeObjectURL(file.preview));
        };
    }, [selectFiles]);


    return (<>
        <div >
            <input type="file" multiple onChange={handleFileChange} data-testid = 'photo_test'/>
            <button onClick={handleUpload} type='button'>Upload</button>
            {selectFiles.length > 0 && (
                <div className='QA_photo'>
                    {selectFiles.map((file, index) => (
                        <div key={index}>
                            {file.data.type.startsWith("image/") && (
                                <img src={file.preview} alt="Preview" style={{width: "100px", height: "100px"}} />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    </>)
}