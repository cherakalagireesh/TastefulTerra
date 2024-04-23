function discountCalc(price, discountPercentage) {
  const discountAmount = Math.floor(price * (discountPercentage / 100));
  return discountAmount;
}

export default discountCalc;
