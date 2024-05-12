import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Button, ConfigProvider, Space } from "antd";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

// layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          borderRadius: 2,
          fontFamily: "Poppins",
        },
        components: {
          Menu: {
            borderBottom: "none",
            activeBarHeight: 3,
            colorText: "white",
            groupTitleColor: "green",
            horizontalItemSelectedColor: "yellow",
            colorBgContainer: "#00264d",
            fontFamily: "Poppins",
            fontSize: 16,
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
