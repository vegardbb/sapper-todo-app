<script>
  import Form from '../components/FormModal.svelte'
  import SubmitButton from '../components/SubmitFormButton.svelte'
  import Input from '../components/FormInput.svelte'
  let error

  async function signup(event) {
    const { username, psw, firstname, lastname } = event.target
    const response = await fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username: username.value, password: psw.value, firstName: firstname.value, lastName: lastname.value }),
    })
	const { error, loginRequired } = await response.json()
	if (loginRequired) {
      error = response.error
    } else this.redirect(301, 'todos') // redirect to the todo page
  }
</script>

<style>
/* body {font-family: Arial, Helvetica, sans-serif;} */
* {box-sizing: border-box;}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
</style>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<Form handleSubmit={signup}>
  <h1>Sign Up</h1>
  <p>Please fill in this form to create an account</p>
  <p>Do you have an existing account? <a href="login" style="color:dodgerblue">log in</a></p>
  <hr>
  <Input inputID="username" boldText="Username" inField="Enter your user name" required />
  <Input inputID="firstname" boldText="First name" inField="Enter your first name" required />
  <Input inputID="lastname" boldText="Last name" inField="Enter your last name" required />
  <Input inputID="psw" boldText="Password" inField="Enter your password" required isPasswd />
  <Input inputID="psw-repeat" boldText="Repeat Password" inField="Repeat Password" required isPasswd />
  <!-- <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me -->
  <!-- </label> -->
  <!-- <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p> -->
  <SubmitButton innerText="Create new account" />
</Form>
