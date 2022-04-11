import "./App.css";
import QuoteCard from "./components/QuoteCard";
import React from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = React.useState("");

  const getQuote = () => {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setQuote(data[0]);
      });
  };

  return (
    <div>
      <QuoteCard quote={quote} />
      <button type="button" onClick={getQuote}>
        Get random quote
      </button>
    </div>
  );
}

export default App;
