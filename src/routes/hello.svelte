<script context="module">
  export async function preload(page, session) {
    return session;
  }
</script>

<style>
  h1, figure, p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Hello world!</h1>

<figure>
  <!--- Try changing the src value to successkid.jpg while running lol --->
  <img alt='Applejack' src='applejack.png'>
  <figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading. Fun, right?</strong></p>

<h2><a aria-current="Home" href="/">Back to index</a></h2>
