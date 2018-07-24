'use strict'

const db = require('../server/db')
const { User, Bike, BikeImage, CategoryKey, CategoryValue } = require('../server/db/models')
// library to generate fake data
const faker = require('faker')

// Some bike brands
const bikeBrands = ['Schwinn', 'Trek', 'All City', 'Giant', 'Specialized', 'Bianchi', 'Cannondale', 'Merida']
// Some use cases
const useCaseList = ['road', 'mountain', 'off road', 'cycle cross', 'racing', 'touring', 'commuter']
// random num helper for inventory and to grab a brand name
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(faker.lorem.paragraph())


async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  // make some users
  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  // set up the CategoryKey's
  const brand = CategoryKey.create({ name: 'brand' })
  const useCase = CategoryKey.create({ name: 'use-case' })

  // add a brand from category key
  for (let i=0; i<bikeBrands.length; i++) {
    await CategoryValue.create({
      name: bikeBrands[i],
      categoryKeyId: brand.id
    })
  }

  // add a use case from category key
  for (let i=0; i<useCaseList.length; i++) {
    await CategoryValue.create({
      name: useCaseList[i],
      categoryKeyId: useCase.id
    })
  }



  // add some bikes
  for (let i=0; i<51; i++) {
    let bike = await Bike.Create({
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      price: faker.commerce.price(),
      inventory: getRandomInt(200),
      availability: 'available', // enum: 'available', 'discontinued'
    })
    // will this work?
    // create some images for the bikes
    for (let j=0; j<getRandomInt(7); j++) {
      BikeImage.create({
        bikeId: bike.id,
        imageUrl: faker.image.imageUrl(),
      })
    }

  }

  // // add some images for each bike
  // const getBikes = Bike.findAll() // delete this block in the above works
  //
  // getBikes.forEach(bike => {
  //   BikeImage.create({
  //     bikeId: bike.id,
  //     imageUrl: faker.image.imageUrl(),
  //   })
  // })



  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
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
