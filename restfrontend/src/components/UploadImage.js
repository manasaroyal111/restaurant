import { useState } from "react";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select a file");

    const formData = new FormData();
    formData.append("image", selectedFile);

    const response = await fetch("http://localhost:8000/api/upload-image/", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      setImageUrl(`http://localhost:3000${data.image_url}`);
      console.log('Image uploaded')
    } else {
      alert("Upload failed");
    }
  };

  return (
    <div style={{ paddingTop: "160px" }}>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
};

export default UploadImage;
