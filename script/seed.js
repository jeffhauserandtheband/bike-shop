'use strict'

const db = require('../server/db')
const { User } = require('../server/db/models')
const { Bike, BikeImage, CategoryKey, CategoryValue } = require('../server/db/models/bike')


// library to generate fake data
const faker = require('faker')


// Some bike brands
const bikeBrands = ['Schwinn', 'Trek', 'All City', 'Giant', 'Specialized', 'Bianchi', 'Cannondale', 'Merida']
// some colors
const colors = ['red', 'blue', 'green', 'turquoise', 'black', 'white']
// Some use cases
const useCaseList = ['road', 'mountain', 'off road', 'cycle cross', 'racing', 'touring', 'commuter']

// random num helper for inventory and to grab a brand name
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    // make some users
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  try {
    // set up the CategoryKey's
    const brand = await CategoryKey.create({ name: 'brand' })  // id: 1
    const color = await CategoryKey.create({ name: 'color' })  // id: 2
    const useCase = await CategoryKey.create({ name: 'use-case' })   // id: 3

    // console.log(Object.keys('magic methods for brand: ', CategoryKey.__proto__))
    // console.log(Object.keys('magic methods for color: ', color.__proto__))
    // console.log(Object.keys('magic methods for useCase: ', useCase.__proto__))


    // link brands to categoryValue
    for (let i=0; i<bikeBrands.length; i++) {
      await CategoryValue.create({
        name: bikeBrands[i],
        categoryKeyId: 1
      })
    }

    // link colors to categoryValue
    for (let i=0; i<colors.length; i++) {
      await CategoryValue.create({
        name: colors[i],
        categoryKeyId: 2
      })
    }

    // link use cases to categoryValue
    for (let i=0; i<useCaseList.length; i++) {
      await CategoryValue.create({
        name: useCaseList[i],
        categoryKeyId: 3
      })
    }

    // add some bikes
    for (let i=0; i<51; i++) {
      let bike = await Bike.create({
        name: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: faker.commerce.price(),
        inventory: getRandomInt(200),
        availability: 'available', // enum: 'available', 'discontinued'
      })

      // give each bike a brand, a color and a useCase
      await brand.addBike(bike)
      await color.addBike(bike)
      await useCase.addBike(bike)


      // create some images for the bike
      for (let j=0; j<getRandomInt(7); j++) {
        await BikeImage.create({
          bikeId: bike.id,
          imageUrl: faker.image.imageUrl(),
        })
      }
    }

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
