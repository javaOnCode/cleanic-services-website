import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Plans from "./components/Plans";
import Services from "./components/Services";
import About from "./components/About";
import NoPage from "./components/NoPage";
import LastPart from "./components/LastPart";
import { Provider } from "react-redux";
import { store } from "./components/redux/Store";
import { ItemChosen } from "./components/ItemChosen";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:id" element={<ItemChosen />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <LastPart />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
