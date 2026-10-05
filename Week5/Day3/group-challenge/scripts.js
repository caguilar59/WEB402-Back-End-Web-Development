const PricingCard = {
  props: {
    title: { type: String, required: true },
    features: { type: Array, required: true },
    price: { type: String, required: true },
    billingPeriod: { type: String, required: true },
    buttonLabel: { type: String, required: true },
  },
  template: `
    <article class="card">
      <ul class="card-info card-shadow">
        <li class="card-header">{{ title }}</li>
        <li v-for="feature in features" :key="feature.label" class="card-item">
          <span>{{ feature.amount }}</span> {{ feature.label }}
        </li>
        <li class="card-item">
          <h2 class="card-wide">$ {{ price }}</h2>
          <span class="card-opacity">{{ billingPeriod }}</span>
        </li>
        <li class="card-btn">
          <button class="button">{{ buttonLabel }}</button>
        </li>
      </ul>
    </article>
  `,
};

Vue.createApp({
  components: { PricingCard },
  data() {
    return {
      premiumCard: {
        title: 'Premium',
        features: [
          { amount: '50GB', label: 'Storage' },
          { amount: '50', label: 'Emails' },
          { amount: '50', label: 'Domains' },
          { amount: 'Endless', label: 'Support' },
        ],
        price: '50',
        billingPeriod: 'per month',
        buttonLabel: 'Sign Up',
      },
    };
  },
}).mount('#app');
