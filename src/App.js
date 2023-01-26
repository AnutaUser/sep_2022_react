import React from "react";
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AlbumsPage, CommentsPage, CommentsPostPage, HomePage, NotFoundPage, TodosPage} from "./pages";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>

                    <Route index element={<HomePage/>}/>

                    <Route path={'todos'} element={<TodosPage/>}/>

                    <Route path={'albums'} element={<AlbumsPage/>}/>

                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<CommentsPostPage/>}/>
                    </Route>

                </Route>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
};

export {App};
