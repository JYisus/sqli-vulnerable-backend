import  {createPool}  from "mysql2/promise"

export default class MySQLRespository {
    constructor(config) {
        const { host, user, password, database } = config
        this.connection = createPool({
            host: host,
            user: user,
            password: password,
            database: database,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        })
    }

    async search(id) {
        const result = await this.connection.query(`select * from news where Id=?;`,id)
        if(result[0].length < 1) {
            throw new Error(`New with id ${id} was not found`)
        }
        return result[0][0]
    }

    async checkEmailAndPassword(email, password) {
        const result = await this.connection.query(`select * from users where Email=? and Password=?`, [email, password])
        if(result[0].length < 1) return false
        return result[0][0]
    }
}
