import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';

import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <Router>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}

        />
        <Navbar />
        <Routes>
          {/* <News setProgress = {setProgress} pageSize={this.pageSize} country='in' category='science' /> */}
          <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country='in' category="general" />} />
          {/* <Route exact path='/about' element={<About />} /> */}
          <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country='in' category="general" />} />
          <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country='in' category="business" />} />
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country='in' category="entertainment" />} />
          <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country='in' category="health" />} />
          <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country='in' category="science" />} />
          <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country='in' category="sports" />} />
          <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country='in' category="technology" />} />
        </Routes>
      </Router>
    )
  }
}