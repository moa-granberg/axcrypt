export const getPricing = async (product, period) => {
  const resp = await fetch(
    `https://account.axcrypt.net/api/global/pricelist/${product}/${period}/1`,
    { mode: 'no-cors' }
  );
  formatPrice(resp, period);
};

const formatPrice = (response, period) => {
  const currency = response.default_currency;

  const priceItem = response.pricinglist.filter(
    item => item.currency === currency
  )[0];

  if (period === 'year') {
    return {
      currency,
      price: Number(priceItem.rounded_amount / 12).toFixed(2),
    };
  } else if (period === 'month') {
    return { currency, price: Number(priceItem.rounded_amount).toFixed(2) };
  }

  return null;
};
