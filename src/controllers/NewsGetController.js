import GetNew from "../news/application/GetNew.js"
export default class NewsController {
    constructor(repository) {
        
        this.NewsSearcher = new GetNew(repository)

    }
    // constructor()
    async run(req, res) {
        try {

            const { id } = req.query
            const digitRegExp = new RegExp(/^\d*$/)
            const isDigit = digitRegExp.test(id)
 
            if(!isDigit) throw new Error("Invalid input")
            
            const article = await this.NewsSearcher.run(id)
            res.status(200).send(article.json())
        } catch(err) {
            res.status(404).send({"id": "-1", "datetime": "error 404", "text": "Not found"})
        }

    }
}