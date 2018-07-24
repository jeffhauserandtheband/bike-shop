const User = require('./user')
const {Bike,BikeImage,CategoryKey,CategoryValue} = require('./bike')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Bike.hasMany(BikeImage);
BikeImage.belongsTo(Bike)

CategoryKey.hasMany(CategoryValue);
CategoryValue.belongsTo(CategoryKey);

Bike.belongsToMany(CategoryValue, {through: 'bikeCategoryValue'})
CategoryValue.belongsToMany(Bike, {through: 'bikeCategoryValue'})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,Bike,BikeImage,CategoryKey,CategoryValue
}
