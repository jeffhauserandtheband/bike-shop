/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Bike = db.model('bike')
const BikeImage = db.model('bike')

describe('Bike routes', () => {

  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/bikes/', () => {

    const newBike = {
      name: 'johnny',
      description: 'another cooler bike!!!!!!!',
      price: 100.00,
      inventory: 11,
      availability: 'available',
    }

    // beforeEach(() => {
    //   return Bike.create(newBike)
    // })

    it('POST new bike', async () => {
      const res = await request(app).post('/api/bikes')
        .send({
          name: 'fred',
          description: 'cool bike!!!!!!!',
          price: 200.00,
          inventory: 20,
          availability: 'available',
        })
        .expect(201)
        const createdBike = await Bike.findById(res.body.id)
        expect(createdBike.name).to.be.equal('fred')
    })

    it('POST new bike image', async () => {
      const imgUrl = 'http://learndotresources.s3.amazonaws.com/workshop/55e5c92fe859dc0300619bc8/sloth.jpg'
      // create a new bike
      const bikeRes = await request(app).post('/api/bikes')
        .send(newBike)
        .expect(201)
      // add an image to that bike
      const res = await request(app).post(`/api/bikes/${bikeRes.body.id}/image`)
        .send({
          imageUrl: imgUrl,
          bikeId: bikeRes.body.id,
        })
        .expect(201)
        const createdImage = await BikeImage.findById(res.body.id)
      //   expect(createdImage.imageUrl).to.be.equal(imgUrl)
    })
  }) // end describe('/api/bikes')

  describe('/api/bikes/:id', () => {
    it('PUT updates an existing bike', async () => {
      // create a new bike
      const res = await request(app).post('/api/bikes')
        .send({
          name: 'My cool new bike!',
          description: 'A very very cool bike!!!!!!!',
          price: 200.00,
          inventory: 20,
          availability: 'available',
        })
        .expect(201)
        // update the bike
        const update = await request(app).put(`/api/bikes/${res.body.id}`)
          .send({
              name: 'A cooler, more updated name'
          })
          .expect(201)
        // find the newly updated bike
        const {dataValues} = await Bike.findById(res.body.id)
        expect(update.body[1].name).to.be.equal(dataValues.name)
    })
  }) // end describe('/api/bikes/:id')

  describe('/api/bikes/query', () => {

    beforeEach(async () => {
      // create a new bike
      const res = await request(app).post('/api/bikes')
        .send({
          name: 'My cool new bike!',
          description: 'A very very cool bike!!!!!!!',
          price: 200.00,
          inventory: 20,
          availability: 'available',
        })
        .expect(201)
        const res2 = await request(app).post('/api/bikes')
          .send({
            name: 'Your cooler newer bike!',
            description: 'A very very cool bike!!!!!!!',
            price: 200.00,
            inventory: 20,
            availability: 'available',
          })
          .expect(201)
    })

    it('filters results', async () => {
      // find the bikes in the db
      const bikes = await Bike.findAll()
      // get the first one
      const bike = bikes[0].dataValues
      // make our api search query call
      const search = await request(app).get('/api/bikes/query?search=My')
      expect(bike.name).to.be.equal(search.body[0].name)
    })
  }) // end describe('/api/bikes/filter')
}) // end describe('User routes')
