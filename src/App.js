import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Card from "./components/Card";
import Form from "./components/Form";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [date, setDate] = useState("");
  const [cotacao, setCotacao] = useState(0);
  const [clock, setClock] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      // console.log(clock);
      clearInterval(interval);
    };
  }, [clock]);

  useEffect(() => {
    const getCotacao = async () => {
      const response = await fetch(
        `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`
      );

      const quoteData = await response.json();
      //console.log(JSON.stringify(quoteData));

      let quote = parseFloat(quoteData["USDBRL"]["bid"]).toFixed(3);
      setCotacao(`R$ ${quote}`);
      // console.log(`Cotação do Dolar: ${quote}`);

      let date = new Date(quoteData["USDBRL"]["create_date"]);
      date = date.toLocaleDateString("pt-br", { dateStyle: "medium" });
      setDate(date);
      console.log(`Cotação do Dolar: ${quote} Data da Cotação: ${date}`);
    };
    getCotacao();
  }, []);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    //setDate(`${date}`);
    //getCotacao();
    //setCotacao(`R$ ${cotacao}`);
    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };
  return (
    <>
      <Header clock={clock} />
      <Card
        cotacao={cotacao}
        income={income}
        expense={expense}
        total={total}
        Date={date}
      />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
