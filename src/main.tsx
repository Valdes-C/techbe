import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import "./index.css";
import HomePage from "@/pages/home-page.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import AppLeyout from "@/leyouts/app-leyout.tsx";
import WalletsPage from "@/pages/wallets-page.tsx";
import TransationsPage from "@/pages/transations-page.tsx";
import SummaryPage from "@/pages/summary-page.tsx";
import NotFoundPage from "@/pages/not-found-page.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="" element={<AppLeyout />}>
                <Route path="*" element={<NotFoundPage />} />
                <Route index element={<HomePage />}/>
                <Route path="portfele" element={<WalletsPage />} />
                <Route path="tranzakcje" element={<TransationsPage />} />
                <Route path="Podsumowanie" element={<SummaryPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
);
