import { Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/create-post" element={<CreatePost/>}></Route>
        <Route path="/posts" element={<Feed/>}></Route>
      </Routes>
    </div>
  )
}

export default App
