#Day 9 & 10: Backend server to store movie reviews using mongodb

overview- On Day 9 & 10, The goal is to build a backend server where users can create, update, retrieve, and delete movie reviews. Data is stored in mongoDB. the backend stack is node.js and express.js

#complete project idea- A movie app which displays movies and allows to create a review

1. Frontend with HTML, CSS, JS with Tmdb Api (task -4&5)
2. Backend with Nodejs, Expressjs
3. Database with mongodb

#What We Learned

- How to create an Express server to handle API requests.
- Connecting Node.js to MongoDB using Mongoose.
- CRUD operations with MongoDB (Create, Read, Update, Delete).
- establishing routes.
- Integrating frontend and backend through API endpoints.

#To run the server

1. Open a terminal and navigate to the backend directory.
2. Run the following command to start the server: node index.js/ npm run start
3. The server will start on port 8000.
4. Open the index.html


#MongoDB connection

used to connect with mongodb-> reviews = await conn.db("reviews").collection("reviews"); 

#mongodb structure

{
  "_id": --,
  "movieId": "------",
  "user": "------",
  "review": "------------"
}


#routes

1. to post review->        router.post("/", ReviewsCtrl.apiPostReview);
2. to access the review->  router.get("/:id", ReviewsCtrl.apiGetReview);
3. accessing all review->  router.get("/movie/:movieId", ReviewsCtrl.apiGetReviewsByMovieId);
4. update a review->       router.put("/:id", ReviewsCtrl.apiUpdateReview);
5. delete a review->       router.delete("/:id", ReviewsCtrl.apiDeleteReview);






