"use client";
import axiosInstance from "@/lib/axiosInstance";
import { getImgUrl } from "@/lib/utils";
import axios from "axios";
import React, { createRef, useState } from "react";
import toast from "react-hot-toast";
import { FaTimes, FaCheck, FaSpinner } from "react-icons/fa";

const AddProduct = () => {
  const [features, setFeatures] = useState([]);
  const [featureInput, setFeatureInput] = useState("");
  const [image, setImage] = useState(null);
  const [isUploading, setUploading] = useState(false);
  const [isUploaded, setUploaded] = useState(false);
  const formRef = createRef();

  const handleAddFeature = () => {
    if (featureInput.trim() !== "") {
      setFeatures([...features, featureInput]);
      setFeatureInput("");
    }
  };

  const handleRemoveFeature = (index) => {
    const updatedFeatures = [...features];
    updatedFeatures.splice(index, 1);
    setFeatures(updatedFeatures);
  };

  const handleCancel = () => {
    formRef.current.reset();
    setFeatureInput("");
    setFeatures([]);
    setImage(null);
    setUploaded(false);
  };

  const handleUploadImage = async (e) => {
    setUploading(true);
    const file = e.target.files[0];
    if (!file) return;

    try {
      const url = await getImgUrl(file);
      setImage(url);
      setUploaded(true);
      console.log("Uploaded image URL:", url);
    } catch (error) {
      toast.error("Image upload failed. Please try again.");
      console.error("Image upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isUploading) {
      toast.error("Please wait while the image is being uploaded.");
      return;
    }

    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    if (features.length === 0) {
      toast.error("Please add at least one feature.");
      return;
    }

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.price = Number(data.price);
    data.features = features;
    data.image = image;
    console.log(data);

    // add product in database
    try {
      const res = await axios.post("/api/product", data);
      if (res.data.insertedId) {
        toast.success("Product added successfully!");
      } else {
        toast.error("Failed to add product.");
      }
    } catch (error) {
      toast.error("Unauthorized access.");
    } finally {
      form.reset();
      setFeatureInput("");
      setFeatures([]);
      setImage(null);
      setUploaded(false);
    }
  };

  const handleSaveForLater = () => {
    toast.error("This feature is not available yet.");
  };

  return (
    <div>
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Add New Product
        </h2>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Product Name */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Brand */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              placeholder="Enter brand name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter product price"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Rating */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Rating</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              placeholder="Enter rating (1-5)"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Category</label>
            <select
              name="category"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="">Select category</option>
              <option value="headphones">Headphone</option>
              <option value="smartwatches">Smart Watch</option>
              <option value="earbuds">Earbud</option>
              <option value="powerbanks">Power Bank</option>
              <option value="cameras">Camera</option>
              <option value="chargers">Charger</option>
            </select>
          </div>

          {/* Image URL */}
          <div className="flex flex-col md:col-span-2 relative">
            <label className="text-gray-600 font-medium mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleUploadImage}
              placeholder="Enter image link"
              className="file:mr-4 file:py-[5px] file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <div className="absolute top-2/3 right-8 transform -translate-y-1/2">
              {isUploading && (
                <FaSpinner className="animate-spin text-blue-500 text-xl" />
              )}
              {!isUploading && isUploaded && (
                <FaCheck className="text-green-500 text-xl" />
              )}
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-600 font-medium mb-1">Features</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                placeholder="Enter a feature"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md transition cursor-pointer"
              >
                Add
              </button>
            </div>
            {/* Show added features */}
            <ul className="mt-2 flex flex-wrap gap-2">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="bg-purple-100 text-sm rounded-lg text-purple-700 px-3 py-1">
                    {f}
                  </span>
                  <span className="cursor-pointer">
                    <FaTimes onClick={() => handleRemoveFeature(i)} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-600 font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Enter product description"
              rows="4"
              name="description"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 md:col-span-2 justify-end mt-4">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow-md transition cursor-pointer"
            >
              Add Product
            </button>
            <button
              onClick={handleSaveForLater}
              type="button"
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md transition cursor-pointer"
            >
              Save For Later (Not Live)
            </button>
            <button
              onClick={handleCancel}
              type="button"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow-md transition cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
