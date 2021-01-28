const firstConnection = require("./firstConnection");
const creteMessage = require("./createMessage");
const controller = require('../controlles/chart')

let admin = {}
const clients = []

const logicChat = async (ws) => {
  ws.on('message', (message) => {
    const body = JSON.parse(message)
    if (body.admin) {
      admin = {recipientId: body.recipientId, client: ws}
    }
    if (body.first) {
      firstConnection(ws, body, controller, clients)
    }
    if (!body.first) {
      if (body) {
        creteMessage(body, controller, clients, admin)
      }
    }
  })
}

module.exports = logicChat
