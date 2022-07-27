const usersData = {
    "alexis07" : {
        firstName: "Alexander",
        userPassword: "meether",
    },

    "amaka17" : {
        firstName: "Amaka",
        userPassword: "amygirl",

    },

    "emmanuel5" : {
        firstName: "Emmanuel",
        userPassword: "emmyboy",

    },

    "tolu25" : {
        firstName: "Toluene",
        userPassword: "tolubaby",

    },
    
}


alert("welcome to Altschool Official page");

 let username = prompt("Enter your username:");

 

function usernameFunction(){
    while(username == null){
        alert('You have succesfully aborted your registration!')
        return
    }
    
}

usernameFunction();

 while(username.length >=10){
    alert("Your Username is too long");
    username = prompt ("Enter a valid username");
 }

 if (username.length < 10){
     alert("Your Username is saved!");
 }

 

 let password = prompt("Enter your password:");

 passwordFunction();

 function passwordFunction(){
     while(password == null){
         alert('You have succesfully aborted your registration!')
         return
     }
 }

 while(password.length <= 6){
     alert("Your password is too short!");
     password = prompt ("Enter a valid password:");
 }

 if(password.length > 6){
     alert('Your password is saved!');
 }

 let confirmPassword = prompt ('Confirm your password:');

 while(password !== confirmPassword){
     alert('Incorrect Password!');
     confirmPassword= prompt('Confirm your password:');
 }

 if(password == confirmPassword){
     alert('Password is correct!');
 }

const user = usersData[username];
userFunction();

function userFunction(){

    if (user == undefined || user == null){
        alert('User not found. Please Sign-up!')
        return
    }
    else{

        alert(
            ` 
             User found with the following data:
             First Name: ${user.firstName};
             Password: ${user.userPassword};
            `
            )
        }
}




