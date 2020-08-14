import React,{useState} from 'react'
import {Button} from '@material-ui/core';
import {storage , db} from './firebase';



function ImageUpload({username}) {
    const [image,setImage] = useState(null);
    const [progress,setProgress] = useState(0);
    const [caption,setCaption] = useState('');

const handleChange = (e) => {
    if (e.target.files[0]) {
        setImage(e.target.files[0]);
    }
};

const handleUpload = (e) => {
    const uploadTask = storage.ref(`image/${image.name}`).put(image);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            //progress bar fn
            const progress = Math.round(
                (snapshot.bytesTransfered/snapshot.totalBytes) * 100
            );
            setProgress(progress);
        },
        (error) => {
            //error fn
            console.log(error);
            alert(error.message);
        },
        () => {
            //complete fn
            storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
                //post image inside db
                db.collection("posts").add({
                    //timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: caption,
                    imageUrl:url,
                    username:username,
                })
            })
        }
    )
    
};

    return (
        <div>
        <input type="text" placeholder="Enter a caption.... " onChange={event => setCaption(event.target.value)} value={caption}/>
        <input type="file" onChange={handleChange}/>
        <Button onClick={handleUpload}>
            Upload
        </Button>

            
        </div>
    )
}

export default ImageUpload