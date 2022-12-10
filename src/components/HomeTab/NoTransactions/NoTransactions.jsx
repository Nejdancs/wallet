import React from "react";
import { NoTrContainer, NoTrMessage } from "./NoTransactions.styled"

const NoTransactions = () => {
  return (
    <NoTrContainer>
      <NoTrMessage>No Transactions</NoTrMessage>
    </NoTrContainer>
  );
};

export default NoTransactions;