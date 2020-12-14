import GetNew from "../news/application/GetNew.js"
export default class NewsController {
    constructor(repository) {
        
        this.NewsSearcher = new GetNew(repository)

    }
    // constructor()
    async run(req, res) {
        try {
            const { id } = req.query
            const article = await this.NewsSearcher.run(id)
            res.status(200).send(article.json())
        } catch(err) {
            res.status(404).send({"id": "error", "datetime": "error", "text": "Not found"})
        }

    }
}