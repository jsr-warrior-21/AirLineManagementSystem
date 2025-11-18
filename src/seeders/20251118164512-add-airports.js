"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Airports", [
      {name:'Kempegowda International Airport',cityId:23,CreatedAt:new Date(),updatedAt:new Date()}
      ,{name:'Goa International Airport',cityId:24,CreatedAt:new Date(),updatedAt:new Date()}
      , {name:'Varanasi International Airport',cityId:25,CreatedAt:new Date(),updatedAt:new Date()}
      , {name:'DDU International Airport',cityId:26,CreatedAt:new Date(),updatedAt:new Date()}
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
