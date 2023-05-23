import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";
import Productscreen from "./screens/Productscreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<Homescreen/>} exact/>
            <Route path='/product/:id' element={<Productscreen/>}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from './components/Register';
// <Router>
//   <Routes>
//     <Route path="/register" component={Register} />
//     {/* Other routes */}
//   </Routes>
// </Router>
