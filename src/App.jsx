import { Routes, Route, Outlet } from "react-router";

import Home from "./routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the nav bar!</h1>
      </div>
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  )
}

export default App
