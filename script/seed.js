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

//order entries
const orders = [
  {
    userId: 1,
    state: 'completed',
    shippingEmail: 'cody@email.com',
    shippingName: 'cody jones',
    shippingAddress: '123 Meadow Lane',
    shippingCity: 'Chicago',
    shippingState: 'IL',
    shippingZip: 60606,
    orderCost: 200
  },
  {
    userId: 2,
    state: 'processing',
    shippingEmail: 'murphy@email.com',
    shippingName: 'murphy jones',
    shippingAddress: '125453 Butter Lane',
    shippingCity: 'Chicago',
    shippingState: 'IL',
    shippingZip: 60601,
    orderCost: 200
  }
]


// random num helper for inventory and to grab a brand name
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

async function seed() {
  // await db.sync({force: true})
  // console.log('db synced!')

  // const users = await Promise.all([
  //   // make some users
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'greg@email.com', password: '123'}),
  //   User.create({email: 'matt@gmail.com', password: 'test', userType: 'admin'})
  // ])

  try {
    await db.sync({force: true})
    console.log('db synced!')

    const users = await Promise.all([
      // make some users
      User.create({email: 'cody@email.com', password: '123'}),
      User.create({email: 'murphy@email.com', password: '123'}),
      User.create({email: 'matt@gmail.com', password: 'test', userType: 'admin'})
    ])
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

      // add a brand
      const addedBrand = await bike.addCategoryvalue(
        brands[getRandomInt(brands.length - 1)].id
      )
      const addedColors = await bike.addCategoryvalue(
        colors[getRandomInt(colors.length - 1)].id
      )
      const addedUseCases = await bike.addCategoryvalue(
        useCases[getRandomInt(useCases.length - 1)].id
      )

      // create some images for the bike
      for (let j = 0; j < getRandomInt(7); j++) {
        await BikeImage.create({
          bikeId: bike.id,
          imageUrl: 'http://learndotresources.s3.amazonaws.com/workshop/55e5c92fe859dc0300619bc8/sloth.jpg'
            
        })
      }
    }

    await Promise.all(orders.map(order => Order.create(order)))
    const bikes = await Bike.findAll()
    const createdOrders = await Order.findAll()

    await Promise.all(
      createdOrders.map(order => {
        const bike = bikes[getRandomInt(bikes.length - 1)]
        return order.addBike(bike)
      })
    )

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
