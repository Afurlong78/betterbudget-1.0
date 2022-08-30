import React, { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { useSignIn } from "../../Providers/SignInProvider";
import { useNavigate } from "react-router-dom";
import { useBudget } from "../../Providers/BudgetProvider";
import { useExpense } from "../../Providers/ExpenseProvider";
import {
  Nav,
  NavBtnRow,
  NavBtn,
  NavLogo,
  MobileIcon,
  MobileMenu,
  MobileMenuIcon,
  MobileMenuLinkContainer,
  MobileMenuLink,
} from "./Styles";

function NavBar() {
  const { setBudget } = useBudget();

  const {
    expenses,
    expensesInput,
    expenseCategory,
    sum,
    expenseHandler,
    setExpensesInput,
    setExpenses,
    setExpenseCategory,
    setSum,
    deleteHandler,
    submitExpenseError,
  } = useExpense();

  const { loginStatus, setLoginStatus } = useSignIn();
  const navigate = useNavigate();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    let access = localStorage.getItem("token");

    if (access) {
      setLoginStatus(true);
    }
  }, []);

  const mobileHandler = (e) => {
    e.preventDefault();

    setOpenMobileMenu(!openMobileMenu);
  };

  const logOutHandler = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setBudget(0);

    setLoginStatus(false);

    navigate("/login");
  };

  return (
    <Nav className="shadow">
      <NavLogo className="">
        <FaBalanceScaleLeft className="me-2" />
        <strong>Better</strong>Budget
      </NavLogo>

      <NavBtnRow className="">
        {!loginStatus ? (
          <div to="/login"></div>
        ) : (
          <NavBtn to="/update" className="me-4">
            Update
          </NavBtn>
        )}
        <NavBtn to="/" className="me-4">
          Home
        </NavBtn>
        <NavBtn to="/protected" className="me-4">
          Budgets
        </NavBtn>
        <NavBtn to="/register" className="me-4">
          Register
        </NavBtn>
        {!loginStatus ? (
          <NavBtn to="/login" className="">
            Log in
          </NavBtn>
        ) : (
          <NavBtn to="/login" className="" onClick={logOutHandler}>
            Log out
          </NavBtn>
        )}
      </NavBtnRow>

      <MobileIcon onClick={mobileHandler} className="">
        <MdOutlineMenu />
      </MobileIcon>

      <MobileMenu status={openMobileMenu} className="">
        <MobileMenuIcon className="mt-3 mb-5">
          <FaBalanceScaleLeft
            style={{
              height: "75px",
              width: "75px",
            }}
          />
        </MobileMenuIcon>
        <MobileMenuLinkContainer className="">
          <MobileMenuLink to="/" className="">
            Home
          </MobileMenuLink>
          <MobileMenuLink to="/protected" className="">
            Budgets
          </MobileMenuLink>
          <MobileMenuLink to="/register" className="">
            Register
          </MobileMenuLink>

          {!loginStatus ? (
            <MobileMenuLink to="/login" className="">
              Log in
            </MobileMenuLink>
          ) : (
            <MobileMenuLink to="/login" className="" onClick={logOutHandler}>
              Log out
            </MobileMenuLink>
          )}
          {!loginStatus ? (
            <div to="/login"></div>
          ) : (
            <MobileMenuLink to="/update">Update</MobileMenuLink>
          )}
        </MobileMenuLinkContainer>
      </MobileMenu>
    </Nav>
  );
}

export default NavBar;
