<template>
  <div>
    <form id="payment-form">

    <div id="card-container"></div>

    <button id="card-button" type="button">Pay</button>

  </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: null
    }
  },
  async mounted() {
    const payments = window.Square.payments(
      "sandbox-sq0idb-g6p7YnBAcgbAYNCGNcvr_g"
    );
    this.card = await payments.card();
    await this.card.attach('#card-container');
    const cardButton = document.getElementById('card-button');
    cardButton.addEventListener('click', this.tokenizeCard);
    console.log(this.card)
  },
  methods: {
    async tokenizeCard(evt) {
      evt.preventDefault()
      try {
        const result = await this.card.tokenize();
        if (result.status === 'OK') {
          console.log(`Payment token is ${result.token}`);
          console.log(result)
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>

<style>

</style>