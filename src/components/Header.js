import React from "react";

export const Header = () => {
  const userName = {
    firstName: "Shann",
    lastName: null,
  };
  return (
    <h1>
      {userName.firstName} {userName.lastName}'s Expense Dashboard
    </h1>
  );
};
