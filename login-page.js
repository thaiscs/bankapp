const user = {
    name: 'Daenerys Stormborn',
    age: '24',
    credentials: {
      username: 'BreakerOfChains',
      password: 'MotherOfDragons',
    },
   
  }

 
  let remainingLoginAttempts = 3


function validateForm() {

    const usernameInput = document.getElementById("username")
    const username = usernameInput.value
    const correctUsername = user.credentials.username === username

    const passwordInput = document.getElementById("password")
    const password = passwordInput.value
    const correctPassword = user.credentials.password === password

    const unsuccessfulLogin = !correctPassword || !correctUsername
 
        
        if (correctUsername && correctPassword) {
            alert(`Welcome to your Bank Account, ${user.name}!`)
            window.location = "index.html"
            return false
            
        } 
      
            else { 
               remainingLoginAttempts--
               
              
                         
        }
        
        if (unsuccessfulLogin && remainingLoginAttempts >= 2) {
            alert(`Wrong username and/or password. You have ${remainingLoginAttempts} more attempt(s).`);
        }
            else if (unsuccessfulLogin && remainingLoginAttempts == 1) {
                alert('This is your final login attempt, focus now!')

            } else {
                alert('Account`s been blocked! Contact customer service.');
            }
            
              
            

       
return false

}

validateForm(user)