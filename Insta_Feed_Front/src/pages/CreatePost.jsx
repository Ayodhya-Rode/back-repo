import axios from "axios"
import { useNavigate } from "react-router-dom";
const CreatePost = () => {

    
  const Navigate =useNavigate()    

  function handleSubmit(e){
    e.preventDefault()


    const formData = new FormData(e.target)
    console.log(formData);
    axios.post("http://localhost:3000/create-post",formData)
    .then((res)=>{
      Navigate("/posts")
    })
    
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-700">
      <div className="bg-gray-400 shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-black mb-6 text-center">
          Create Post
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-wrap flex-col gap-4">
          <input
            type="file"
            name="image"
            accept="image/*"
            className="border-2 border-gray-600 rounded-lg p-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="caption"
            placeholder="Your Beautiful Caption goes here"
            required
            className="border-2 border-gray-600 rounded-lg p-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
