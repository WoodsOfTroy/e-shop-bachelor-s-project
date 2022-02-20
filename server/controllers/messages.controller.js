const messagesModule = require('../modules/messages.modules');

module.exports.getMessages = async function (req, res) {
  const messages = await messagesModule.getMessages().catch(()=>{
    res.status(500).json(console.error);
  });
  res.status(200).json(messages);
}
