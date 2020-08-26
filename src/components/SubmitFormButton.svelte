<script>
  export let innerText = 'Submit';
</script>

<style>
/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Set a style for all buttons */
.signupbtn {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 25%;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
}

.signupbtn:hover {
  opacity: 1;
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

<div class="clearfix">
  <button type="submit" class="signupbtn">{innerText}</button>
</div>
