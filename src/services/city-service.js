const { CityRepository } = require("../repository/index");

/*  methods (like createCity, deleteCity, etc.), this.CityRepository is used to call methods on the repository instance that was stored in the constructor. For example, await this.CityRepository.createCity(data); executes the createCity function of the repository instance associated with that particular service object [1, 3, 4].
 */

class CityService {
  constructor() {
    /*
    It attaches the CityRepository property to the new CityService object being initialized. Without this, CityRepository would be a local variable within the constructor function and inaccessible to other methods of the class.
    */
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.CityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("somthing went wrong at service layer.");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.CityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("somthing went wrong at service layer.");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.CityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("somthing went wrong at service layer.");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.CityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("somthing went wrong at service layer.");
      throw { error };
    }
  }
}

module.exports = CityService;


/*
 constructor() {
        if (CityRepository.instance) {
            return CityRepository.instance;
        }
        CityRepository.instance = this;
        // Initialize your repository here
    }

    --> you can use this for avoiding every time making new cityRepository object.

*/