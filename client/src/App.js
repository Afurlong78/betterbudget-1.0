import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./components/Pages/Pages";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Protected from "./components/Protected/Protected";
import PasswordRecovery from "./components/ForgotPassword.js/PasswordRecovery";
import UpdatePassword from "./components/UpdatePassword/UpdatePassword";
import "bootstrap/dist/css/bootstrap.min.css";
import { BudgetProvider } from "./Providers/BudgetProvider";
import { ExpenseProvider } from "./Providers/ExpenseProvider";
import { MonthProvider } from "./Providers/MonthProvider";
import { SignInProvider } from "./Providers/SignInProvider";
import { PasswordProvider } from "./Providers/PasswordProvider";

function App() {
  return (
    <BudgetProvider>
      <ExpenseProvider>
        <MonthProvider>
          <SignInProvider>
            <PasswordProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<Pages />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/protected" element={<Protected />} />
                    <Route
                      path="/password-recovery"
                      element={<PasswordRecovery />}
                    />
                    <Route path="/update" element={<UpdatePassword />} />
                  </Route>
                </Routes>
              </Router>
            </PasswordProvider>
          </SignInProvider>
        </MonthProvider>
      </ExpenseProvider>
    </BudgetProvider>
  );
}

export default App;
