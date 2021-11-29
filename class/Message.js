const sqlite3 = require("../db/config/sqlite3");

class Message {
  constructor() {
    this.messages = [];
  }

  async save(message) {
    const property = await sqlite3("messages").insert(message);
    console.log(property);
  }

  async getAllMessages() {
    let data = [];
    await sqlite3
      .select("user", "date", "content")
      .from("messages")
      .then((res) => {
        data = res;
      });
    console.log(data);
    return data;
  }
  
}

module.exports = Message;
