import { NextStudio } from "next-sanity/studio";

import config from "../../sanity.config";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const navigate = useNavigate();

  if (window.location.pathname.startsWith("/admin/desk/")) {
    navigate("/admin");
  }
  return (
    <>
      <NextStudio config={config} />
    </>
  );
}
