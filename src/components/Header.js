import React from "react";

export const Header = () => {
  const userName = {
    firstName: "Ada",
    lastName: "Lovelace",
  };
  return (
    <h1>
      {userName.firstName} {userName.lastName}'s Expense Dashboard
    </h1>
  );
};
