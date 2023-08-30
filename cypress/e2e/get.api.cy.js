/// <reference types="cypress"/>

describe ('Buscar dispositivos', () => {

    it('Buscar um dispositivo específico', () => {

        const device_id = '7'

cy.BuscarDeviceEspecífico(device_id)
            .then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).equal('7')
            expect(response.body.name).equal('Apple MacBook Pro 16')
            expect(response.body).not.empty
            expect(response.body.data).not.empty
        })
    })
})