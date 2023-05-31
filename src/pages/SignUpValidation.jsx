function Validation(values) {
    let error = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{8,}$/;
  
    if (!values.username.trim()) {
      error.username = "Username should not be empty";
    } else {
      error.username = "";
    }
  
    if (!values.email.trim()) {
      error.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
      error.email = "Email is not valid";
    } else {
      error.email = "";
    }
  
    if (!values.password.trim()) {
      error.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
      error.password = "Password does not meet the requirements";
    } else {
      error.password = "";
    }
  
    return error;
  }
  
  export default Validation;  