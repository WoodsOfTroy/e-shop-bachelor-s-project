const authModule = require('../modules/auth.modules');

module.exports.login = function (req, res) {
  res.status(200).json({
    email: req.body.email,
    password: req.body.password,
    test: 'test auth'
  })
}

module.exports.register = async function (req, res) {
  const some = await authModule.main().catch(()=>{
    res.status(500).json(console.error);
  });
  res.status(200).json(some);
}
