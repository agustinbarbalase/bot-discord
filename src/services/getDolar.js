const axios = require('axios');

const getDolar = async () => {
  const URI = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
  const values = ['Dolar Soja', 'Dolar', 'Bitcoin', 'Argentina'];

  const { data } = await axios.get(URI);

  return data
    .filter((item) => !values.includes(item.casa.nombre))
    .map((item) => {
      return {
        name: item.casa.nombre,
        value: `Compra: ${item.casa.compra}\nVenta: ${item.casa.venta}`
      };
    });
};

module.exports = getDolar;
