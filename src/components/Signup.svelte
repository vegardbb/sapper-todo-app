<script>
  // let error_boolean = false;

  async function handleSubmit(event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.username.value);
    console.log(event.target.password.value);
  }

  function validateName(event) {
    const textbox = event.target;
    // error_boolean = false;
    if (textbox.value === '') {
      textbox.setCustomValidity('A user name with at least one letter is required');
    } else {
      textbox.setCustomValidity('');
    }
    return true;
  }
</script>

<form
  on:submit|preventDefault="{handleSubmit}"
  on:invalid={validateName}
  on:changed={validateName}
  on:input={validateName}
>
  <label for="username">User name</label>
  <input required id="username" />
  {#if error_boolean}
    <h1> OH NOES, AN ERRROR OCCURRED!</h1>
  {/if}
  <label for="password">Your Password</label>
  <input required type="password" id="password" />

  <button type="submit">Create account</button>
</form>
