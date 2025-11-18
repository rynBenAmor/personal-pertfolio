<template>

  <div class="currency-container">
    <h2 class="currency-title">Our lovely Currency Exchange Rate
      <img src="@/assets/Smadge.png" width="60px" alt="Smadge">
    </h2>

    <div class="currency-display">
      <div class="from-currency currency-card">
        <div class="currency-flag eur-flag"></div>
        <div class="currency-code">EUR</div>
        <div class="currency-amount">1.00</div>
      </div>

      <div class="exchange-icon">
        <font-awesome-icon icon="fa-solid fa-arrow-right-arrow-left" />
      </div>

      <div class="to-currency currency-card">
        <div class="currency-flag tn-flag">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#d52e23"></rect>
            <path
              d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
              opacity=".15"></path>
            <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
              fill="#fff" opacity=".2"></path>
            <path
              d="M16,10c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm3.384,7.587l-1.865-.606-1.153,1.587v-1.962l-1.866-.606,1.866-.606v-1.962l1.153,1.587,1.865-.606-1.153,1.587,1.153,1.587Zm-2.184-5.187c-1.988,0-3.6,1.612-3.6,3.6s1.612,3.6,3.6,3.6c.941,0,1.797-.361,2.438-.951-.818,1.122-2.143,1.851-3.638,1.851-2.485,0-4.5-2.015-4.5-4.5s2.015-4.5,4.5-4.5c1.495,0,2.82,.729,3.638,1.851-.641-.591-1.497-.951-2.438-.951Z"
              fill="#fff"></path>
          </svg>
        </div>
        <div class="currency-code">TND</div>
        <div class="currency-amount">3.41</div>
      </div>
    </div>


  </div>
</template>


<script>

export default {
  name: 'CurrencyComponent'
}
</script>


<style scoped>
.currency-container {
  width: 100%;
  max-width: 700px;
  background: white;
  border-radius: 16px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.currency-title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 10px;
}

.currency-title img {
  display: inline-block;
  vertical-align: middle;
  /* prevents baseline gap inside the H2 */
}

.currency-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.currency-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  background: #fafafa;
  transition: all 0.3s ease;
}

.currency-flag {
  width: 40px;
  height: 30px;
  border-radius: 3px;
  margin-bottom: 12px;
  margin-inline: auto;

}

.currency-flag svg,
.currency-flag img {
  display: block;
  /* prevents extra inline bottom whitespace from SVG */
}

.eur-flag {
  background: linear-gradient(to bottom,
      black 0%,
      black 33%,
      #ff0000 33%,
      #ff0000 66%,
      #ffcc00 66%,
      #ffcc00 100%);
}



.currency-code {
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 5px;
}

.currency-amount {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
}

.exchange-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: var(--teal-500);
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
  line-height: 1;
  /* avoid extra line-height spacing */
}

.currency-summary {
  text-align: center;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 10px;
  font-size: 1.1rem;
  color: #2c3e50;
  font-weight: 500;
  margin-top: 10px;
}

@media (max-width: 600px) {
  .currency-card {
    width: 100%;
  }

  .currency-display {
    flex-direction: column;
  }

  .exchange-icon {
    transform: rotate(90deg);
    margin: 10px 0;
  }

  .currency-amount {
    font-size: 1.5rem;
  }
}
</style>
