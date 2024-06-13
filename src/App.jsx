import { MainLayout } from "./layout/main-layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
