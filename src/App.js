import React from "react";
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {
    AlbumsPage,
    CommentsPage,
    HomePage, LoginPage,
    NotFoundPage,
    PhotosPage,
    PostsPage,
    UserDetailsPage, UserDetailsPostsPage,
    UsersPage
} from "./pages";
import {RequireAuth} from "./components/hoc";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>

                    <Route index element={<HomePage/>}/>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':userId'} element={<UserDetailsPage/>}>
                            <Route path={'postsByUserId'} element={<UserDetailsPostsPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'login'} element={<LoginPage/>}/>

                    <Route path={'posts'} element={
                        <RequireAuth>
                            <PostsPage/>
                        </RequireAuth>
                    }>
                        <Route path={':postId'} element={<CommentsPage/>}/>
                    </Route>

                    <Route path={'albums'} element={<AlbumsPage/>}>
                        <Route path={':albumId'} element={<PhotosPage/>}/>
                    </Route>

                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export {App};
