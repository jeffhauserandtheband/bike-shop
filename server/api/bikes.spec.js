/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Bike = db.model('bike')

describe('Bike routes', () => {

  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/bikes/', () => {

    const newBike = {
      name: 'fred',
      description: 'cool bike!!!!!!!',
      price: 200.00,
      inventory: 20,
      availability: 'available',
    }

    // beforeEach(() => {
    //   return Bike.create(newBike)
    // })

    it('POST new bike', async () => {
      const res = await request(app).post('/api/bikes')
        .send(newBike)
        .expect(201)
        const createdBike = await Bike.findById(res.body.id)
        expect(createdBike.name).to.be.equal(newBike.name)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
