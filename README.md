# README - Movie Reviews Backend

## Overview  
The goal is to build a backend server where users can create, update, retrieve, and delete movie reviews. Data is stored in MongoDB. The backend stack is **Node.js** and **Express.js**.  

## Complete Project Idea  
A movie app that displays movies and allows users to create a review.  

1. **Frontend** with HTML, CSS, JS using **TMDB API** (Tasks 4 & 5)  
2. **Backend** with Node.js, Express.js  
3. **Database** with MongoDB  

## What We Learned  

- How to create an **Express server** to handle API requests.  
- Connecting **Node.js** to **MongoDB** using **Mongoose**.  
- Performing **CRUD operations** (Create, Read, Update, Delete).  
- Establishing **routes**.  
- Integrating frontend and backend through **API endpoints**.  

## To Run the Server  

1. Open a terminal and navigate to the **backend directory**.  
2. Run the following command to start the server:  
   ```sh
   node index.js  
   # OR  
   npm run start  
   ```
3. The server will start on **port 8000**.  
4. Open `index.html`.  

## MongoDB Connection  

Used to connect with MongoDB:  

```js
reviews = await conn.db("reviews").collection("reviews");
```

## MongoDB Structure  

```json
{
  "_id": "--",
  "movieId": "------",
  "user": "------",
  "review": "------------"
}
```

## Routes  

1. **Post a review** →  
   ```js
   router.post("/", ReviewsCtrl.apiPostReview);
   ```
2. **Access a review** →  
   ```js
   router.get("/:id", ReviewsCtrl.apiGetReview);
   ```
3. **Access all reviews for a movie** →  
   ```js
   router.get("/movie/:movieId", ReviewsCtrl.apiGetReviewsByMovieId);
   ```
4. **Update a review** →  
   ```js
   router.put("/:id", ReviewsCtrl.apiUpdateReview);
   ```
5. **Delete a review** →  
   ```js
   router.delete("/:id", ReviewsCtrl.apiDeleteReview);
   
