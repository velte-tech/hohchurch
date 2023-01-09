import { Outlet } from "react-router-dom";
import { Footer,GiveHeader } from "../components"

function GiveLayout() {
  return (
    <div>
      <GiveHeader />
      <Outlet />
      <Footer />
    </div>
  )
}

export default GiveLayout