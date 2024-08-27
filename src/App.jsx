
import { useState } from 'react';
import './App.css'
import Button from './components/Button'
import Features from './components/Feature';
import Fooder from './components/Fooder';
import Header from './components/Header';
import Hero from './components/Hero';
import Testemonial from './components/Testemonial';
import landingPageData from './constant/webData'
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  const { header, hero, features, footer, testimonials } = landingPageData
  const user = {
    isLogin: true,
  }

  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('income');
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = () => {
    console.log("Amount", amount);
    console.log('type', type);
    setTransactions([...transactions, { amount, type }])
    setAmount("")
    setType("income")
  }



  return (
    <div>

      <Header header={header} user={user} />
      <ExpenseTracker 
      setAmount={setAmount}
      setType={setType}
      handleAddTransaction={handleAddTransaction}
      transactions={transactions}
      amount={amount}
      type={type}
       />

      <Hero hero={hero} />

      <Features features={features} />

      <Testemonial testimonials={testimonials} />

      <Fooder foot er={footer} />

    </div>

  )
}

export default App
