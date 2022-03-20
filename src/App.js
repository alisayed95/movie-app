import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { Header } from "./components";
import { useDispatch } from "react-redux";
import axios from "axios";
import { AllMovies, MyMovies } from "./screens";
import "antd/dist/antd.css";

function App() {
  const [activeSection, setActiveSection] = useState("All Movies");
  const { Content } = Layout;
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(process.env.REACT_APP_MOVIE_URL).then((res) => {
      dispatch({ type: "SET_MOVIES", payload: res.data.items });
    });
  }, [dispatch]);

  return (
    <Layout className="site-layout">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Content
        className="site-layout-background"
        style={{
          margin: "50px 0",
          padding: 20,
          minHeight: "85vh",
          marginTop: 65,
        }}
      >
        {activeSection === "All Movies" && <AllMovies />}
        {activeSection === "My Movies" && <MyMovies />}
      </Content>
    </Layout>
  );
}

export default App;
