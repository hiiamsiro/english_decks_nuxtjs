<template>
  <section>
    <div class="r">
      <div class="ct text-center">
        <h3>Deck #{{ $route.params.id }}: Learn English By Siro</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary">Create a card</button>
        </div>
        <hr class="divide" />
        <div class="r">
          <div class="c_3">
            <div class="card">
              <div class="front-card">
                <img
                  src="https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2014/05/Apps-for-Learning-English-1024x683.jpg"
                  alt="Thumbnail card"
                />
              </div>
              <div class="back-card"></div>
            </div>
          </div>
          <div class="c_3">
            <div class="card">
              <div class="front-card">
                <img
                  src="https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2014/05/Apps-for-Learning-English-1024x683.jpg"
                  alt="Thumbnail card"
                />
              </div>
              <div class="back-card"></div>
            </div>
          </div>
          <div class="c_3">
            <div class="card">
              <div class="front-card">
                <img
                  src="https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2014/05/Apps-for-Learning-English-1024x683.jpg"
                  alt="Thumbnail card"
                />
              </div>
              <div class="back-card"></div>
            </div>
          </div>
          <div class="c_3">
            <div class="card">
              <div class="front-card">
                <img
                  src="https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2014/05/Apps-for-Learning-English-1024x683.jpg"
                  alt="Thumbnail card"
                />
              </div>
              <div class="back-card"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  validate({ params }) {
    return /^[0-9]$/.test(params.id)
  },
}
</script>

<style lang="scss">
section {
  padding-top: 3rem;
  .card {
    padding: 1rem;
    img {
      width: 60%;
    }
  }
  .divide {
    margin: 2rem 0;
  }
}
</style>
