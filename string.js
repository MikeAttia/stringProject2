/*this require to enter the passowrd to see your e-mail, if failed then the code will use the string method replaceAll to encript
the e-mail "the variable messaGe".*/
let passowrd = 'MichaelAt';
let enteredPass = 'Michaelat';
var messaGe = '   Congratulation, you have accessed your e-mail succefully.   '



for (let i = 0; i < 3; i++) {
    //using toUppercase and trim methods
        if (enteredPass == passowrd) {
            console.log('signed in');
            console.log(messaGe.toUpperCase(messaGe.trim));
            break;
        }
//using stringLength method
        else if (enteredPass.length < passowrd.length) {
            console.log('passowrd is too short,try again');
            break;
        }
      //using replaceAll method
        else  {
                console.log('wrong password, your email has encrypted!');
                console.log(messaGe.replaceAll('Congratulation, you have accessed your e-mail succefully.',
                    '$%###$$%*^&^$#%#$%#$%#%%#@%#$'))
            break;
            }
        };

    


