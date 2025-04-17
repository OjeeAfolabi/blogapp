import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  return (
    <form>
        <div className="flex justify-center  items-center bg-[#f0f0f0] h-dvh">
      <div className="bg-white shadow-md rounded-lg p-8 w-[40%] mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Create a Post</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              rows="4"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#829079] text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-[#b9925e] transition duration-200"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
    </form>
  );
};

export default CreatePost;
