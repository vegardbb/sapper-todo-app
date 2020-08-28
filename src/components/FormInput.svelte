<script>
  export let inputID = form-input
  export let boldText = 'Form Input'
  export let inField = 'Write text'
  export let required = false
  export let isPasswd = false
</script>

<style>
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
</style>

<label for="{inputID}"><b>{boldText}</b></label>
<input type={isPasswd ? 'password' : 'text'} placeholder="{inField}" name="{inputID}" {required}>
