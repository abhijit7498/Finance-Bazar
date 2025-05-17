// routes/privateRoutes.js
import { Route, Navigate } from "react-router-dom";

import Dashboard from "@/components/dashboard/Dashboard";
import Profile from "@/components/dashboard/Profile";
import CreditScore from "@/components/dashboard/CreditScore";
import FAQs from "@/components/dashboard/support/FAQs";
import Preferences from "@/components/dashboard/support/Preferences";

export const getPrivateRoutes = () => (
    <Route path="/myaccount" element={<Dashboard />}>
        <Route path="dashboard" element={<CreditScore />} />
        <Route path="profile" element={<Profile />} />
        <Route path="support" element={<FAQs />} />
        <Route path="support/preferences" element={<Preferences />} />
        <Route index element={<Navigate to="/myaccount/dashboard" />} />
    </Route>
);
