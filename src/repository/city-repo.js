const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) { // here you are destructing the name object so you are using curley braces;
    try { // for creating the new row in database table
      const city = await City.create({ name }); // thats why i am passing name argumet direclty.
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {// for deleting the row of one city from the city databases.
      await City.destroy({
        where: {
          id: cityId
        },
      });
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = {CityRepository};