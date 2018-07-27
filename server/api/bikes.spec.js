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
      console.log('my bike res',  bikeRes.body);
      const res = await request(app).post(`/api/bikes/${bikeRes.body.id}/image`)
        .send({
          imageUrl: imgUrl,
          bikeId: bikeRes.body.id,
        })
        .expect(201)
        const createdImage = await BikeImage.findById(res.body.id)
        console.log('my image that I just queried', createdImage)
      //   expect(createdImage.imageUrl).to.be.equal(imgUrl)
    })


  }) // end describe('/api/users')
}) // end describe('User routes')
