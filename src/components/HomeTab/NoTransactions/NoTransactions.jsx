import React from "react";
import { NoTrContainer, NoTrMessage } from "./NoTransactions.styled"

const NoTransactions = () => {
  return (
    <NoTrContainer>
      <NoTrMessage>Транзакций не найдено</NoTrMessage>
    </NoTrContainer>
  );
};

export default NoTransactions;