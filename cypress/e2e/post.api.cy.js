/// <reference types="cypress"/>

describe ('Cadastrar dispositivos', () => {

    it('Cadastrar um dispositivo específico', () => {

        const body = {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2019,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
         }

        cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: body
        }).as('postDeviceResult')

        cy.get('@postDeviceResult')
        .then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).not.empty
            expect(response.body.createdAt).not.empty
            expect(response.body.name).equal('Apple MacBook Pro 16')
        })
    })
})