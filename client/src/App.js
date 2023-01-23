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
  Location,
  Im_new,
  About_HOH,
  Leadership,
  Aurora,
  Denver,
  Lafayette,
  Longmont,
  West,
  Groups,
  Ministries,
  Outreach,
  Kids,
  Students,
  Prayer,
  Young_adults,
  Parents,
  Care,
  Messages,
  Registration,
  NotFound,
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
        
      <Route path="/location" element={<Location />} />

      <Route path="/About_HOH" element={<About_HOH />} />
      <Route path="/Im_new" element={<Im_new />} />

      <Route path="/Leadership" element={<Leadership />} />

      <Route path="/Aurora" element={<Aurora />} />

      <Route path="/Denver" element={<Denver />} />

      <Route path="/Lafayette" element={<Lafayette />} />

      <Route path="/Longmont" element={<Longmont />} />

      <Route path="/West" element={<West />} />

      <Route path="/Groups" element={<Groups />} />

      <Route path="/Ministries" element={<Ministries />} />

      <Route path="/Outreach" element={<Outreach />} />

      <Route path="/Kids" element={<Kids />} />

      <Route path="/Students" element={<Students />} />

      <Route path="/Prayer" element={<Prayer />} />

      <Route path="/Young_adults" element={<Young_adults />} />

      <Route path="/Parents" element={<Parents />} />

      <Route path="/Care" element={<Care />} />
      
       <Route path="/Messages" element={<Messages />} />

    </Route>

    <Route path="/give" element = {<GiveLayout />}>
    <Route path="/give" element= {<Give />} />
    <Route path="give/register" element= {<Registration />} />
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
