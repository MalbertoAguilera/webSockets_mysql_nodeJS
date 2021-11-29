const mariaDB = require("../db/config/mariaDB");

class Contenedor {
  constructor() {
    this.products =[];
  }

  async save(item) {
    const property = await mariaDB("products").insert(item);
    console.log(property);
    console.log( typeof property);
  }

  async getById(id) {
    let data = [];
    await mariaDB
      .from("products")
      .where({ id: id })
      .then((res) => {
        data = res;
      });
    return data;
  }

  async getAll() {
    let data = [];
    await mariaDB
      .select("name", "description", "code", "thumbnail", "price", "stock")
      .from("products")
      .then((res) => {
        data = res;
      });
    return data;
  }
}

module.exports = Contenedor;