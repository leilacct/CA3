        function passwordValidator(){
            //This is to access the value inside the text box with id="staffPassword"
            var staffPassword = document.getElementById("staffPassword").value;
            alert(staffPassword);

           /*Creating a regx object to check if the staff password meets its requirements
            The password must have at least:
            One lowercase letter; 
            One uppercase letter; 
            One digit;
            One special character; 
            Eight characters long.*/

            var passwordRequirements = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[@#$%!.';:/,~*&+=])).{8,})$/;
            
            if (staffPassword.match(passwordRequirements)) {
                document.getElementById("Valid").style.display = "block";
                document.getElementById("inValid").style.display = "none";
                
                

            } else {
                document.getElementById("inValid").style.display = "block";
                document.getElementById("Valid").style.display = "none";
                
            }
        }
