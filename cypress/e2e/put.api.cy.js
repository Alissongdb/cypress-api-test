/// <reference types="cypress"/>

describe ('Alterar dispositivos', () => {

    it('Alterar um dispositivo específico', () => {

        const body_cadastro = {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2019,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
         }

         const body_update = {
            "name": "Apple MacBook Pro 20",
            "data": {
               "year": 2023,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
         }

        cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: body_cadastro
        }).as('postDeviceResult')

        cy.get('@postDeviceResult')
            .then((response_post) => {
                expect(response_post.status).equal(200)
                expect(response_post.body.name).equal('Apple MacBook Pro 16')

            cy.request({
                method: 'PUT',
                url: `https://api.restful-api.dev/objects/${response_post.body.id}`,
                failOnStatusCode: false,
                body: body_update
            }).as('putDeviceResult')  
            
            cy.get('@putDeviceResult')
                .then((response_put) => {
                    expect(response_put.status).equal(200)
                    expect(response_put.body.name).equal('Apple MacBook Pro 20')
                })
    })
})
})