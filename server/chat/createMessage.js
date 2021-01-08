const creteMessage = (body, controller, clients, admin) => {
  controller.createMessage(body).then(res => {
    clients.forEach(item => {
      if (res) {
        if (item.id === '' + res._id) {
          item.client.send(JSON.stringify(res))
          admin.client.send(JSON.stringify(res))
        }
      }
    })
  })
}

module.exports = creteMessage
