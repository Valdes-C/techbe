import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import "./index.css";

import Basics from "./basics.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Basics/>
  </StrictMode>,
);
