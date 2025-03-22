import app from "./server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"

import 'dotenv/config'

const MongoClient = mongodb.MongoClient
const mongo_username = process.env.MONGODB_USER
const mongo_password = process.env.MONGODB_PASS
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.zh9z3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const port = 8000
MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        writeConcern: 2500,     
    }
).catch(error => {console.error(error.stack)
    process.exit(1)
}).then(
    async client =>{
    await ReviewsDAO.injectDB(client)
    app.listen(port, ()=> {console.log(`listening on port ${port}`);
    })
})

