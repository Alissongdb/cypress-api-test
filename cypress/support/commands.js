Cypress.Commands.add('BuscarDeviceEspecífico', (device_id) => {
    cy.request({
        method: 'GET',
        url: '/objects/7',
        failOnStatusCode: false

    }).then((response) => {
        return response
    })
})