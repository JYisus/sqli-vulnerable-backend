import UserLogin from "../news/application/UserLogin.js"

export default class LoginController {
    constructor(repository) {
        this.UserLogin = new UserLogin(repository)
    }

    async run(req, res) {
        try {

            const {email, password} = req.body
            
            const emailRegExp = new RegExp(/^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/)
            const isEmail = emailRegExp.test(email)

            if (!isEmail) throw new Error("Invalid input")

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