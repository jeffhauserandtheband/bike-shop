'use strict'
/*eslint-disable max-statements*/

const db = require('../server/db')
const {User} = require('../server/db/models')
const {
  Bike,
  BikeImage,
  CategoryKey,
  CategoryValue,
  Order,
  OrderEntries
} = require('../server/db/models')

// library to generate fake data
const faker = require('faker')

const orders = require('./data/orders')
const users = require('./data/users')

// Some bike brands
const bikeBrands = [
  'Schwinn',
  'Trek',
  'All City',
  'Giant',
  'Specialized',
  'Bianchi',
  'Cannondale',
  'Merida'
]
// some colors
const bikeColors = ['red', 'blue', 'green', 'turquoise', 'black', 'white']
// Some use cases
const useCaseList = [
  'road',
  'mountain',
  'off road',
  'cycle cross',
  'racing',
  'touring',
  'commuter'
]

const imageUrls = [
  'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=51a9aa4dd828bf5d50fcd8154dc405b8&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b104c850fee7b7c4035e1477b1c13704&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1505705694340-019e1e335916?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c153251d0a63e31e85c6c818f7874dd2&auto=format&fit=crop&w=1189&q=80',
  'https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=735dff7662fcaf93e202d7a1aa76c313&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1501236570302-906143a7c9f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=560e0a540d582b6127db8b21b1363df2&auto=format&fit=crop&w=967&q=80',
  'https://images.unsplash.com/photo-1506567859980-33c9c423649f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a3b98896ec1850fefd1fad9c763a935d&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1470855590377-4363884be8a3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a249adf93e39a03b3fd9b27d3705e185&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1463780924135-dc9b4d15fb87?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd18c25e45f96364dfdd503fbd78bb52&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1466838931486-92f3b5ff31a6?ixlib=rb-0.3.5&s=beda27df1dcebf394db8df029c7b6322&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1484144709249-a643e3720d13?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09a47f6cde9a3102a94b4e7d5b90b420&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1508772382388-0b8fc7f7edb5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b270517beb964c3e6817ba19f565406&auto=format&fit=crop&w=500&q=60'
]


// random num helper for inventory and to grab a brand name
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

async function seed() {

  try {
    await db.sync({force: true})
    console.log('db synced!')

    // const users = await Promise.all([
    //   // make some users
    //   User.create({email: 'cody@email.com', password: '123'}),
    //   User.create({email: 'murphy@email.com', password: '123'}),
    //   User.create({email: 'matt@gmail.com', password: 'test', userType: 'admin'})
    // ])

    // create some users
    await Promise.all(users.map(user => {
      User.create(user)
    }))
    // set up the CategoryKey's
    const brand = await CategoryKey.create({name: 'brand'}) // id: 1
    const color = await CategoryKey.create({name: 'color'}) // id: 2
    const useCase = await CategoryKey.create({name: 'use-case'}) // id: 3

    // link brands to categoryValue
    const brands = []
    for (let i = 0; i < bikeBrands.length; i++) {
      const {dataValues} = await CategoryValue.create({
        name: bikeBrands[i],
        categorykeyId: brand.id
      })
      brands.push(dataValues)
      // console.log(dataValues);
    }

    // link colors to categoryValue
    const colors = []
    for (let i = 0; i < bikeColors.length; i++) {
      const {dataValues} = await CategoryValue.create({
        name: bikeColors[i],
        categorykeyId: color.id
      })
      colors.push(dataValues)
    }

    // link use cases to categoryValue
    const useCases = []
    for (let i = 0; i < useCaseList.length; i++) {
      const {dataValues} = await CategoryValue.create({
        name: useCaseList[i],
        categorykeyId: useCase.id
      })
      useCases.push(dataValues)
    }

    // console.log('magic methods for brand: ', Object.keys(brand.__proto__))
    // console.log('magic methods for color: ',Object.keys( color.__proto__))
    // console.log('magic methods for useCase: ', Object.keys( useCase.__proto__))

    // add some bikes
    for (let i = 0; i < 51; i++) {
      const bike = await Bike.create({
        name: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: faker.commerce.price(),
        inventory: getRandomInt(200),
        availability: 'available' // enum: 'available', 'discontinued'
      })

      // add a brand to the bike
      const addedBrand = await bike.addCategoryvalue(
        brands[getRandomInt(brands.length - 1)].id
      )
      // add a color to the bike
      const addedColors = await bike.addCategoryvalue(
        colors[getRandomInt(colors.length - 1)].id
      )
      // add a use case to the bike
      const addedUseCases = await bike.addCategoryvalue(
        useCases[getRandomInt(useCases.length - 1)].id
      )

      // create some images for the bike
      for (let j = 0; j < getRandomInt(7); j++) {
        await BikeImage.create({
          bikeId: bike.id,
          imageUrl: imageUrls[getRandomInt(imageUrls.length-1)],
        })
      }
    }

    // Create orders
    await Promise.all(orders.map(order => {
      Order.create(order)
    }))
    const bikes = await Bike.findAll()
    const createdOrders = await Order.findAll()

    // add a bike to each order
    await Promise.all(
      createdOrders.map(order => {
        const bike = bikes[getRandomInt(bikes.length - 1)]
        return order.addBike(bike)
      })
    )

    // make order entries
    const orderEntries = await OrderEntries.findAll()
    await Promise.all(
      orderEntries.map(orderEntry => {
        // console.log('word',orderEntry)
        return OrderEntries.update(
          {price: 99, quantity: 5},
          {where: {bikeId: orderEntry.bikeId, orderId:orderEntry.orderId}}
        )
      })
    )

    console.log(`seeded ${users.length} users`)
    console.log(`seeded successfully`)
  } catch (err) {
    console.log(`oh no, it's an error!${err}`)
  }
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
