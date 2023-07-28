//jshint esversion:9
import React from "react";
import { Progress } from "antd";

const Analytics = ({ allTransaction }) => {
  const categories = [
    "salary",
    "tip",
    "project",
    "food",
    "movie",
    "bills",
    "medical",
    "tax",
    "fee",
    "rent",
  ];

  const totalTransaction = allTransaction.length;
  const totalIncomeTransactions = allTransaction.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpanseTransactions = allTransaction.filter(
    (transaction) => transaction.type === "expanse"
  );
  const totalIncomePercent =
    (totalIncomeTransactions.length / totalTransaction) * 100;
  const totalExpansePercent =
    (totalExpanseTransactions.length / totalTransaction) * 100;

  const totalTurnover = allTransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalIncomeTurnover = allTransaction
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpanseTurnover = allTransaction
    .filter((transaction) => transaction.type === "expanse")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomeTurnoverPercent =
    (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpanseTurnoverPercent =
    (totalExpanseTurnover / totalTurnover) * 100;

  return (
    <>
      <div className="analytics-container">
        <div className="analytics-card">
          <div className="analytics-card-header">
            Total Transaction: {totalTransaction}
          </div>
          <div className="analytics-card-body">
            <h5 className="text-success">
              Income: {totalIncomeTransactions.length}
            </h5>
            <h5 className="text-danger">
              Expense: {totalExpanseTransactions.length}
            </h5>
            <div className="analytics-progress-container">
              <Progress
                type="circle"
                strokeColor={"green"}
                percent={totalIncomePercent.toFixed(0)}
              />
              <Progress
                type="circle"
                strokeColor={"red"}
                percent={totalExpansePercent.toFixed(0)}
              />
            </div>
          </div>
        </div>

        <div className="analytics-card">
          <div className="analytics-card-header">
            Total Transaction: {totalTurnover}
          </div>
          <div className="analytics-card-body">
            <h5 className="text-success">Income: {totalIncomeTurnover}</h5>
            <h5 className="text-danger">Expense: {totalExpanseTurnover}</h5>
            <div className="analytics-progress-container">
              <Progress
                type="circle"
                strokeColor={"green"}
                percent={totalIncomeTurnoverPercent.toFixed(0)}
              />
              <Progress
                type="circle"
                strokeColor={"red"}
                percent={totalExpanseTurnoverPercent.toFixed(0)}
              />
            </div>
          </div>
        </div>

        <div className="analytics-category-container">
          <h4>Categorywise Income</h4>
          {categories.map((category) => {
            const amount = allTransaction
              .filter(
                (transaction) =>
                  transaction.type === "income" &&
                  transaction.category === category
              )
              .reduce((acc, transaction) => acc + transaction.amount, 0);
            return (
              amount > 0 && (
                <div className="analytics-category-card">
                  <div className="analytics-category-card-body">
                    <h5>{category}</h5>
                    <Progress
                      percent={((amount / totalIncomeTurnover) * 100).toFixed(
                        0
                      )}
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>

        <div className="analytics-category-container">
          <h4>Categorywise Expense</h4>
          {categories.map((category) => {
            const amount = allTransaction
              .filter(
                (transaction) =>
                  transaction.type === "expanse" &&
                  transaction.category === category
              )
              .reduce((acc, transaction) => acc + transaction.amount, 0);
            return (
              amount > 0 && (
                <div className="analytics-category-card">
                  <div className="analytics-category-card-body">
                    <h5>{category}</h5>
                    <Progress
                      percent={((amount / totalExpanseTurnover) * 100).toFixed(
                        0
                      )}
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Analytics;
/*<div className="row m-3">
<div className="col-md-4">
  <div className="card">
    <div className="card-header">
      Total Transaction: {totalTransaction}
    </div>
    <div className="card-body">
      <h5 className="text-success">
        Income:{totalIncomeTransactions.length}
      </h5>
      <h5 className="text-danger">
        Expense:{totalExpanseTransactions.length}
      </h5>
      <div>
        <Progress
          type="circle"
          strokeColor={"green"}
          className="mx-2"
          percent={totalIncomePercent.toFixed(0)}
        />
        <Progress
          type="circle"
          strokeColor={"red"}
          className="mx-2"
          percent={totalExpansePercent.toFixed(0)}
        />
      </div>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div className="card">
    <div className="card-header">
      Total Transaction: {totalTurnover}
    </div>
    <div className="card-body">
      <h5 className="text-success">Income:{totalIncomeTurnover}</h5>
      <h5 className="text-danger">Expense:{totalExpanseTurnover}</h5>
      <div>
        <Progress
          type="circle"
          strokeColor={"green"}
          className="mx-2"
          percent={totalIncomeTurnoverPercent.toFixed(0)}
        />
        <Progress
          type="circle"
          strokeColor={"red"}
          className="mx-2"
          percent={totalExpanseTurnoverPercent.toFixed(0)}
        />
      </div>
    </div>
  </div>
</div>
<div className="row m-3">
  <div className="col-md-5">
    <h4>Categorywise Income</h4>
    {categories.map((category) => {
      const amount = allTransaction
        .filter(
          (transaction) =>
            transaction.type === "income" &&
            transaction.category === category
        )
        .reduce((acc, transaction) => acc + transaction.amount, 0);
      return (
        amount > 0 && (
          <div className="card">
            <div classsName="card-body">
              <h5>{category}</h5>
              <Progress
                percent={((amount / totalIncomeTurnover) * 100).toFixed(
                  0
                )}
              />
            </div>
          </div>
        )
      );
    })}
  </div>
</div>
<div className="row m-3">
  <div className="col-md-5">
    <h4>Categorywise Expense</h4>
    {categories.map((category) => {
      const amount = allTransaction
        .filter(
          (transaction) =>
            transaction.type === "expanse" &&
            transaction.category === category
        )
        .reduce((acc, transaction) => acc + transaction.amount, 0);
      return (
        amount > 0 && (
          <div className="card">
            <div classsName="card-body">
              <h5>{category}</h5>
              <Progress
                percent={(
                  (amount / totalExpanseTurnover) *
                  100
                ).toFixed(0)}
              />
            </div>
          </div>
        )
      );
    })}
  </div>
</div>
</div>
*/
