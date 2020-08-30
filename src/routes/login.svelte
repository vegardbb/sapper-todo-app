<script>
  import goto from '../goto'
  import Form from '../components/FormModal.svelte'
  import SubmitButton from '../components/SubmitFormButton.svelte'
  import Input from '../components/FormInput.svelte'
  let error

  async function handleLogin(event) {
    const { username, psw } = event.target
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username: username.value, password: psw.value }),
    })
	const { error, loginRequired } = await response.json()
	if (loginRequired) {
      error = response.error
    } else goto('todos') // redirect to the todo page
  }
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<Form handleSubmit={handleLogin}>
  <h1>Login</h1>
  <p>No existing account? <a href="signup" style="color:dodgerblue">log in</a></p>
  <hr>
  <Input inputID="username" boldText="Username" inField="Enter your user name" required />
  <Input inputID="psw" boldText="Password" inField="Enter your password" required isPasswd />
  <SubmitButton innerText="Login" />
</Form>
