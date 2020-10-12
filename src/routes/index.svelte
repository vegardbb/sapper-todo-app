<script context="module">
  export async function preload(page, session) {
    console.log(arguments)
    return session
  }
</script>

<script>
  export let loginRequired
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Todo App</title>
</svelte:head>

<h1>Index</h1>

<h2><a aria-current="Check out page" href="hello">Browse Hello World page</a></h2>

{#if loginRequired}
  Insert login links here
  <a aria-current="Sign up" href="signup">Sign up</a>
  <a aria-current="Log in" href="login">Log in</a>
{:else}
  Link to todos page
  <a aria-current="Check your todos" href="todos">Load your todos</a>
{/if}
