import UserLogin from "../news/application/UserLogin.js"

export default class LoginController {
    constructor(repository) {
        this.UserLogin = new UserLogin(repository)
    }

    async run(req, res) {
        try {
            console.log(req.body)
            console.log("akjsdhf")
            const {email, password} = req.body
            const validCredentials = await this.UserLogin.run(email, password)

            return validCredentials 
                ? res.status(200).send("Valid credentials")
                : res.status(401).send("Invalid credentials")
        } catch(err) {
            console.log(err)
            res.status(401).send("Invalid credentials")
        }
    }
}