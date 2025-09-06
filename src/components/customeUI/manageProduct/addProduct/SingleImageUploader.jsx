import React, { useEffect, useState } from "react";

export default function SingleImageUpload({setProductInfo , productInfo}) {
  const [image, setImage] = useState(null); 

  // File select and add to state
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // recive one file only
    if (file) {
      setImage(file);
      setProductInfo({...productInfo , thumbnail:file })
    }
  }; 


  useEffect(() => {
    if(!productInfo.thumbnail){
      setImage(null) 
    } 
  }, [productInfo]);
 
 
  return (
    <form 
      className="w-full mx-auto py-5    "
    >
      <label className="block mb-2 text-sm font-medium text-tertary">
        Upload thumbnail
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 px-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
      />

      {/* preview */}
      {image && (
        <div className="relative mb-4 w-32 h-32">
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            className="w-32 h-32 object-cover rounded border"
          />
          <button
            type="button"
            onClick={()=> setImage(null)}
            className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full"
          >
            ×
          </button>
        </div>
      )}
 
    </form>
  );
}
