import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import "./index.css";
import HomePage from "@/components/pages/home-page.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import AppLeyout from "@/leyouts/app-leyout.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="" element={<AppLeyout />}>
                <Route index element={<HomePage />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
);
