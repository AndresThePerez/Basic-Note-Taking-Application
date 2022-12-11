import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowNoteComponent from './components/ShowNoteComponent'
import Header from './components/Header';
import MainTable from './components/MainTable';

ReactDOM.render(
        <Router>

            <Header/>

            <Routes>
                <Route path="/" element={<MainTable />}/>
                <Route path="/:id" element={<ShowNoteComponent />}/>
                <Route path="/categories" />
                <Route path="/deleted" />
            </Routes>

        </Router>,
        document.getElementById('root')
  );
