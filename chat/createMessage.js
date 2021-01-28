const creteMessage = async (body, controller, clients, admin) => {
  const data = await controller.createMessage(body).then(res => res)
  if (data) {
    clients.forEach(item => {
      if (item.id === '' + data._id) {
        item.client.send(JSON.stringify(data))
        admin.client.send(JSON.stringify(data))
      }
    })
  }
}

module.exports = creteMessage
