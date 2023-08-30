/// <reference types="cypress"/>

describe ('Deletar dispositivos', () => {

    it('Deletar um dispositivo específico', () => {

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
            url: 'https://api.restful-api.dev/objects',
            failOnStatusCode: false,
            body: body
        }).as('postDeviceResult')

        cy.get('@postDeviceResult')
            .then((response_post) => {
                expect(response_post.status).equal(200)

            cy.request({
                method: 'DELETE',
                url: `/objects/${response_post.body.id}`,
                failOnStatusCode: false,
            }).as('deleteDeviceResult')  
            
            cy.get('@deleteDeviceResult')
                .then((response_del) => {
                    expect(response_del.status).equal(200)
                    expect(response_del.body.message).equal(`Object with id = ${response_post.body.id} has been deleted.`)
                })
    })
})

    it('Deletar um dispositivo não existente', () => {

        const id_inexistente = 'alisson'

        cy.request({
            method: 'DELETE',
            url: `https://api.restful-api.dev/objects/${id_inexistente}`,
            failOnStatusCode: false,
        }).as('deleteDeviceResult')  
        
        cy.get('@deleteDeviceResult')
            .then((response_del) => {
                expect(response_del.status).equal(404)
                expect(response_del.body.error).equal(`Object with id = ${id_inexistente} doesn't exist.`)
            })
})
})

