const getCurrentDate = () => {
  const date = new Date();
  return date.toLocaleDateString("pt-br");
};

module.exports = {
  getCurrentDate,
};
