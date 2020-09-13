import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route } from "react-router-dom";
import MainNav from './components/MainNav';
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import FileUpload from "./pages/FileUpload";


class App extends Component {

  render() {
    return (
      <Container>
        <MainNav />
        <BrowserRouter>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/file-upload" component={FileUpload} />
        </BrowserRouter>
      </Container>

    );
  }
}

export default App;
