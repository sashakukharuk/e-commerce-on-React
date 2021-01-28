const firstConnection = (ws, body, controller, clients) => {
  const client = clients.find(client => client.clientId === body.recipientId)
  if (client) {
    const idx = clients.findIndex(item => item.clientId === client)
    clients.splice(idx, 1)
    controller.findChart(body.recipientId).then(res => {
      clients.push({id: '' + res[0]._id, clientId: body.recipientId, client: ws})
      ws.send(JSON.stringify(res[0]))
    })
  } else {
    controller.findChart(body.recipientId).then(res => {
      if (res.length === 0) {
        controller.createChart(body).then(res => {
          clients.push({id: '' + res._id, clientId: body.recipientId, client: ws})
          ws.send(JSON.stringify(res))
        })
      } else {
        clients.push({id: '' + res[0]._id, clientId: body.recipientId, client: ws})
        ws.send(JSON.stringify(res[0]))
      }
    })
  }
}

module.exports = firstConnection
