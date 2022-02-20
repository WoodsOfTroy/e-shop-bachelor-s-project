const paymentModule = require('../modules/payment.modules');

module.exports.payment = function (req, res) {
  res.status(200).json({
    "cardAmount": 1000,
    "amount": 200,
    "bookLessons": 8,
    "confirmed": 5,
    "paymentGrid": [
      {
        "date": "15.10.21",
        "operation": "Пополнение счета",
        "summ": 500,
        "remainder": 1000
      },
      {
        "date": "17.10.21",
        "operation": "Списание за урок",
        "summ": -250,
        "remainder": 500
      },
      {
        "date": "21.10.21",
        "operation": "Списание за урок",
        "summ": -250,
        "remainder": 750
      },
      {
        "date": "22.10.21",
        "operation": "Пополнение счета",
        "summ": 1000,
        "remainder": 1000
      },
      {
        "date": "27.10.21",
        "operation": "Списание за урок",
        "summ": -250,
        "remainder": 0
      },
      {
        "date": "1.11.21",
        "operation": "Списание за урок",
        "summ": -250,
        "remainder": 250
      },
      {
        "date": "8.11.21",
        "operation": "Списание за урок",
        "summ": -250,
        "remainder": 500
      }
    ]
  })
}

module.exports.getPayment = async function (req, res) {
  const payments = await paymentModule.getPayment().catch(()=>{
    res.status(500).json(console.error);
  });
  res.status(200).json(payments);
}
