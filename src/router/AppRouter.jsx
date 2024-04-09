import { Routes, Route } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import AppRoutes from "../app/routes/AppRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
};

export default AppRouter;
