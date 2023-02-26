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
  Service,
  Jobs,
  Give,
  Location,
  Im_new,
  About_HOH,
  Leadership,
  EasterService,
  YouthRetreat,
  AdultsRetreat,
  WeeklyRetreat,
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
  Newsletter,
  Serve,
  MessageDetailPage,
  Sermon,
  PrivacyPolicy,
  TermsAndConditions,
  NotFound,
} from "./pages/index";

//Layouts
import Layout from "./Layouts/Layout";
import SlideContent from "./Layouts/SlideContent";
import MessageDetail from "./Layouts/MessageDetail";

// import { SermonDetailLoader } from "./pages/sermons/Sermon";
// import Sliders, { SermonLoder } from "./components/msgSlider/Slider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index exact element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/serve" element={<Serve />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/location" element={<Location />} />

      <Route path="/About_HOH" element={<About_HOH />} />
      <Route path="/Im_new" element={<Im_new />} />

      <Route path="/Leadership" element={<Leadership />} />

      <Route path="/Easter_service" element={<EasterService />} />

      <Route path="/Youth_retreat" element={<YouthRetreat />} />

      <Route path="/Adult_retreat" element={<AdultsRetreat />} />

      <Route path="/Weekly_programmes" element={<WeeklyRetreat />} />

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

      <Route path="/Terms" element={<TermsAndConditions />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

      <Route path="/message" element={<MessageDetail />}>
        <Route path="/message/:id" element={<MessageDetailPage />} />
      </Route>

      <Route path="/sermon" element={<SlideContent />}>
        <Route path="/sermon/:id" element={<Sermon />} />
      </Route>

      <Route path="/give" element={<Give />} />
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
