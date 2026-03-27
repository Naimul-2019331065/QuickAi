import { Route, Routes } from "react-router-dom";
import BlogTitles from "./pages/BlogTitles";
import Community from "./pages/Community";
import DashBoard from "./pages/DashBoard";
import GenerateImages from "./pages/GenerateImages";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import RemoveBackground from "./pages/RemoveBackground";
import RemoveObject from "./pages/RemoveObject";
import ReviewResume from "./pages/ReviewResume";
import WriteArticle from "./pages/WriteArticle";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ai" element={<Layout />}>
                    <Route index element={<DashBoard />}></Route>
                    <Route path="blog-titles" element={<BlogTitles />}></Route>
                    <Route path="community" element={<Community />}></Route>
                    <Route
                        path="generate-images"
                        element={<GenerateImages />}
                    />
                    <Route
                        path="remove-background"
                        element={<RemoveBackground />}
                    />
                    <Route path="remove-object" element={<RemoveObject />} />
                    <Route path="review-resume" element={<ReviewResume />} />
                    <Route path="write-article" element={<WriteArticle />} />
                </Route>
            </Routes>
            <></>
        </div>
    );
};

export default App;
