import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
// pages
import {
  About_HOH,
  AdultsRetreat,
  Contact,
  Donate,
  EasterService,
  Give,
  Groups,
  Home,
  Im_new,
  Jobs,
  Kids,
  Leadership,
  Location,
  MessageDetailPage,
  Messages,
  Ministries,
  Newsletter,
  NotFound,
  Outreach,
  OutreachDetail,
  Prayer,
  PrivacyPolicy,
  Sermon,
  Serve,
  Service,
  TermsAndConditions,
  WeeklyRetreat,
  West,
  Young_adults,
  YouthRetreat,
} from "./pages/index";

//Layouts
import AdminLayout from "./Layouts/AdminLayout";
import Layout from "./Layouts/Layout";
import MessageDetail from "./Layouts/MessageDetail";
import SlideContent from "./Layouts/SlideContent";
import { EmailProvider } from "./contexts/EmailContext";
import AdminPage from "./pages/admin";

// import { SermonDetailLoader } from "./pages/sermons/Sermon";
// import Sliders, { SermonLoder } from "./components/msgSlider/Slider";

function App() {
  return (
    <div className="App">
      <EmailProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index exact element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
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

              <Route path="/outreach_detail" element={<OutreachDetail />} />

              <Route path="/Kids" element={<Kids />} />

              {/* <Route path="/Students" element={<Students />} /> */}

              <Route path="/Prayer" element={<Prayer />} />

              <Route path="/Young_adults" element={<Young_adults />} />

              {/* <Route path="/Parents" element={<Parents />} /> */}

              {/* <Route path="/Care" element={<Care />} /> */}

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

            <Route path="/admin/" element={<AdminLayout />}>
              <Route index element={<AdminPage />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </EmailProvider>
    </div>
  );
}

export default App;
