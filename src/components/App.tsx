import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import Layout from "../layouts/Layout";
import Home from "./pages/home";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./pages/login";
import CreateAccount from "./pages/create_account";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/create_account" element={<CreateAccount />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}
