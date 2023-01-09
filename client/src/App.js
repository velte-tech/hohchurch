import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
// pages
import {
  Home,
  Contact,
  About,
  Service,
  Jobs,
  Give,
  NotFound
} from "./pages/index";

//Layouts
import Layout from "./Layouts/Layout";
import GiveLayout from "./Layouts/GiveLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
    <Route path="/" element={<Layout />}>
      <Route index exact element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="*" element={<NotFound />} />
    </Route>

    <Route path="/give" element = {<GiveLayout />}>
      <Route path="give" element= {<Give />} />
    </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
