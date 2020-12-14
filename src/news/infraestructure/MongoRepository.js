import  { default as mongodb }  from "mongodb"
const MongoClient = mongodb.MongoClient

export default class MongoRespository {
    constructor(config) {
        const { database } = config
        const url = "mongodb://localhost:27017/"
        MongoClient.connect(url, (error, db) => {
            if (error) {
                console.error("Error connecting with MongoDB")
                throw error
            }
            this.dbo = db.db(database)
        })
    }

    async search(id) {
        try {
            const query = {Id: parseInt(id)}
            const result = await this.dbo.collection("news").findOne(query)
            return result
        } catch(error) {
            console.error("Error searching new")
            console.error(error)
        }
    }

    async checkEmailAndPassword(email, password) {
        try {

            if (typeof email !== 'string' || typeof password !== 'string') {
                return false
            }

            const query = {Email: email, Password: password}
            const result = await this.dbo.collection("users").findOne(query)
            if (result == null) {
                return false
            }
            return true
        } catch(error) {
            console.error("Error searching new")
            console.error(error)
            return false
        }
    }
}