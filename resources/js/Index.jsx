import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ShowNoteComponent from './components/Notes/ShowNoteComponent'
import EditNoteComponent from './components/Notes/EditNoteComponent'
import CreateNoteComponent from './components/Notes/CreateNoteComponent'

import CreateCategoryComponent from './components/Categories/CreateCategoryComponent'
import EditCategoryComponent from './components/Category/EditCategoryComponent'
import ShowAllCategoriesComponent from './components/Categories/ShowAllCategoriesComponent'
import ShowCategoryComponent from './components/Categories/ShowCategoryComponent'

import Header from './components/Header';
import MainTable from './components/MainTable';

ReactDOM.render(
        <Router>

            <Header/>

            <Routes>

                <Route path="/" element={<MainTable />}/>

                <Route path="/:id" element={<ShowNoteComponent />} /> //change this.

                <Route path="/notes/:id" element={<ShowNoteComponent />} />
                <Route path='/notes/edit/:id' element={<EditNoteComponent />} />
                <Route path='/notes/create' element={<CreateNoteComponent />} />

                <Route path="/categories" element={<ShowAllCategoriesComponent/>} />
                <Route path='/categories/edit/:id' element={<EditCategoryComponent/>}/>
                <Route path='/categories/:id' element={<ShowCategoryComponent />} />
                <Route path='/categories/create' element={<CreateCategoryComponent />} />

                <Route path='/notes/history' element={<HistoryNoteComponent/>} />

            </Routes>

        </Router>,
        document.getElementById('root')
  );
