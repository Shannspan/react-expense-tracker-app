import React from "react";

export const Header = () => {
  const userName = {
    firstName: "Shann",
    lastName: "Roberts",
  };
  return (
    <h1>
      {userName.firstName} {userName.lastName}' Expense Dashboard
    </h1>
  );
};
