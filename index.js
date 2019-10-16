const user = {
  name: 'Daenerys Stormborn',
  balance: 200,

}

function showBalance() {
  window.alert(`Your balance is €${user.balance}`)
  return menu()
}

function withdrawMoney(amount) {
  amount = parseFloat(window.prompt('Type in the amount € you wish to WITHDRAW:'))

  if (amount > user.balance){
        alert('You have insufficient funds for this transaction.');
    return menu() 
    
}   else	if (amount <= user.balance){
    user.balance -= amount 
    window.confirm(`Do you confirm the withdraw of €${amount}?`);
    window.alert(`SUCCESSFUL TRANSACTION. Your new balance is €${user.balance}`);
    return menu() 
    
}
}

function makeDeposit(amount) {
  amount = parseFloat(window.prompt('Type in the amount € you wish to DEPOSIT:'))

  if (amount > user.balance){
        alert('You have insufficient funds for this transaction.');
    return menu() 
    
}   else	{
    user.balance += amount 
    window.confirm(`Do you confirm the deposit of €${amount}?`);
    window.alert(`SUCCESSFUL TRANSACTION. Your new balance is €${user.balance}`);
    return menu() 
    
}
}

function menu(){
  const choice = window.prompt(
      `
      How can we help you today?
      Please enter a number:
      1.) Show balance
      2.) Withdraw
      3.) Deposit
      4.) Exit
   `
  )

  switch(choice){

    case '1': {
      return showBalance()
    }
    case '2': {
      return withdrawMoney()
    }
    case '3': {
      return makeDeposit()
    }
    case '4': {
      return window.close()
    }

    default: {
      alert('I do not recognize that number, please try again.')
      return menu()
    }
  }
}

function start(){
  window.alert('Welcome to My BankApp!')
  
  return menu()
}

// start()

const button = document.getElementById("loginButton");

        button.addEventListener("click", function(){
        document.location.href = "login-page.html";
})
