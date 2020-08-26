<script>
  let password = "";
  let email = "";
  let error;

  const handleLogin = async () => {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  };
</script>

<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

/* Add a background color when the inputs get focus */
input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

.signupbtn {
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* The Modal (background) */
.modal {
  /* display: none; Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 4; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
 
/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for the signup button on extra small screens */
@media screen and (max-width: 300px) {
  .signupbtn {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<div class="modal">
  <form class="modal-content" on:submit|preventDefault="{handleSubmit}" method="post" >
    <div class="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account</p>
      <p>Do you have an existing account? <a href="login" style="color:dodgerblue">log in</a></p>
      <hr>
      <label for="username"><b>Username</b></label>
      <input type="text" placeholder="Enter username" name="username" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
      
      <!-- <label> -->
      <!-- <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me -->
      <!-- </label> -->

      <!-- <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p> -->

      <div class="clearfix">
	    // todo: onsubmit function here
        <button type="submit" class="signupbtn">Sign Up</button>
      </div>
    </div>
  </form>
</div>
