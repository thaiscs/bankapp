let balance = 200

function showBalance() {
    window.alert(`Your balance is €${balance}`)
    return menu()
}


function withdrawMoney(amount) {
  amount = parseFloat(window.prompt('Type in the amount € you wish to withdraw:'))

  if (amount > balance){
		alert('You have insufficient funds for this transaction.');
    return menu() 
    
}   else	if (amount <= balance){
    window.confirm(`Do you confirm the withdraw of €${amount}?`);
    window.alert(`SUCCESSFUL TRANSACTION. Your new balance is €${balance - amount}`);
    return menu() 
    
}
return balance = balance - amount
}

// it`s changing the balance ONLY when I console.log on the browser (WHY? Find solution!)


function makeDeposit (amount) {
  amount = parseFloat(window.prompt('Type in the amount € you wish to deposit:'))

  if (amount > balance) {
    alert('You have insufficient funds for this transaction.');


  } else	if (amount <= balance) {
    window.confirm(`Do you confirm the Deposit of €${amount}?`);
    window.alert(`SUCCESSFUL TRANSACTION. Your new balance is €${balance - amount}`);
    return menu();
}

return balance = balance - amount

}


function menu(){
  const choice = window.prompt(
      `
      How can we help you today?
      Please enter a number
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
      alert('I do not recognize that number, try again')
      return menu()
    }
  }
}

function start(){
  window.alert('Welcome to My BankApp!')
  
  return menu()
}

start()

var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function(){
     // forEach is not supported in IE11
  // activeElements.forEach(function(e){
  //     e.classList.toggle("active");
  // });
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
})