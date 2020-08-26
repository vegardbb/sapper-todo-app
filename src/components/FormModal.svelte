<script>
  export let handleSubmit = () => null
</script>

<style>
/* Add padding to container elements */
.container {
  padding: 16px;
}

/* The Modal (background) */
.modal {
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
</style>

<div class="modal">
  <form class="modal-content" on:submit|preventDefault="{handleSubmit}">
    <div class="container">
	  <slot>
	    <p>An empty form without a submit function</p>
	  </slot>
	</div>
  </form>
</div>
