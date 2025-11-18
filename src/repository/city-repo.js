const { where } = require("sequelize");
const { City } = require("../models/index");
const {Op}  = require('sequelize');

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({
        // here City is the name  of the db while setting up sequelize
        name,
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        // inside the destroy we are using an object then where keyWord because
        // it does filterartion by which contraints you are deleting the this repo or thing thing from the db;
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something is wrong in the repository.");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      // const city = await City.update(data,{
      //   where:{
      //     id:cityId  // filteration via cityId
      //   }

      // });
      // return city;

      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something is wrong in the repository.");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something is wrong in the repository.");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      if(filter.name){
          const cities = await City.findAll({
            where:{
              name:{
                  [Op.startsWith]:filter.name // for filter the cities via a specific name
              }
            }
          });
          return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something is wrong in the repository.");
      throw { error };
    }
  }
};

// for finding all this method you can open sequelize model Querying

module.exports = CityRepository;
