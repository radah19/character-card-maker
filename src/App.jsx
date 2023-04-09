import { useState } from 'react'
import { Link, useRoutes, BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './components/HomePage';
import ReadPosts from './components/ReadPosts';
import Layout from './components/Layout';
import CreatePostForm from './components/CreatePosts';
import EditPostForm from './components/EditPosts';
import DetailedView from './components/DetailedView';

function App() {
    return (
        <div className='app-container'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index={true} element={<HomePage />} />
                    <Route path="/gallery" element={<ReadPosts />} />
                    <Route path="/new" element={<CreatePostForm />} />
                    <Route path="/gallery/edit/:id" element={<EditPostForm />} />
                    <Route path="/gallery/info/:id" element={<DetailedView />} />
                    <Route path="*" element={<div><p>Nothin Found!!!!!</p></div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
