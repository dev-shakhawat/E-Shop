import React, { useState } from "react";

export default function ProductColor({ title, onChange }) {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === " " && inputValue.trim() !== "") {
      e.preventDefault(); // remove space
      const newTags = [...tags, inputValue.trim()];
      setTags(newTags);
      onChange && onChange(newTags); // send array to parent
      setInputValue(""); // clear input
    }
  };

  const removeTag = (indexToRemove) => {
    const newTags = tags.filter((_, i) => i !== indexToRemove);
    setTags(newTags);
    onChange && onChange(newTags);
  };
 
  

  return (
    <div className="w-full mb-5">
      <label className="block mb-1 text-sm text-gray-500">{title}</label>

      <div className="flex flex-wrap items-center gap-2 p-2 border-b-2 border-gray-300 focus-within:border-tertary">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-lg"
          >
            {tag}
            <button
              type="button"
              className="text-black"
              onClick={() => removeTag(index)}
            >
              ×
            </button>
          </span>
        ))}

        <input
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 border-none focus:ring-0 text-sm bg-transparent outline-none"
          placeholder="Add colors"
        />
      </div>
    </div>
  );
}
