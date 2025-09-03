import React, { useEffect, useState } from "react";

export default function MultiImageUpload({id , productInfo , setProductInfo}) {
  const [images, setImages] = useState([]);
  const formData = new FormData();

  // File select and add to state
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // Image remove 
  const handleRemove = (indexToRemove) => {
    const updated = images.filter((_, index) => index !== indexToRemove);
    setImages(updated);
  };


  useEffect(() => {
    formData.delete("images"); // remove old and add new
    images.forEach((img) => {
      formData.append("images", img);
    });

    setProductInfo({...productInfo , allVeriant: productInfo.allVeriant.map((item) => item.id === id ? {...item , productImages: formData} : item)})

    return () => {
      images.forEach((img) => URL.revokeObjectURL(img));
    };
  }, [images]);
 
  

 

  return (
    <form
       
      className="w-full mx-auto p-5 rounded-lg shadow-md"
    >
      <label className="block mb-2 text-sm font-medium text-tertary">
        Upload Images
      </label>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="mb-4 px-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
      />

      {/* preview */}
      <div className="flex flex-wrap gap-3 mb-4">
        {images.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(img)}
              alt="preview"
              className="w-20 h-20 object-cover rounded border"
            />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full"
            >
              ×
            </button>
          </div>
        ))}
      </div>
 
    </form>
  );
}
