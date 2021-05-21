# custom-goodies-shop
Custom Goodies for everyone - part of COMP584

Portal on: https://www.getyourgoodie.games/

## Architecture of the App Deployment
![image](https://user-images.githubusercontent.com/26809819/119202839-84989000-ba46-11eb-9e37-4a964aa450f1.png)

## How to Use
1. Go to Signup page and add your user - https://www.getyourgoodie.games/Signup
2. Try to Login using the user you created in the above form - https://www.getyourgoodie.games/Login
   - This will essentially match your `email` and `password` combination from the database, via API
3. Browser here https://www.getyourgoodie.games/ to see all the products.
    - The products are again fetched from the database via the API layer.
4. Add any product to cart, with customizations.
    - ( Cart to checkout functionality broke and we couldnt fix it because of time constraints, but we have a backend API for it [here](https://github.com/pachchigarsnehi/custom-goodies-shop/blob/main/backend/index.js#L63). )
    - Essentially we are making the cart entry ID - as ordered on the backend.
5. Go to this page - https://www.getyourgoodie.games/OrderHistory to check the order history. It is coming from the database again. (This API endpint  - https://github.com/pachchigarsnehi/custom-goodies-shop/blob/main/backend/index.js#L64 to get orders by customer ID)
    - On clicking the order history item, we can see the item details.
    - Note: Since we broke checkout function while some tests, we are showing the order history of a an existing user by default, whose orders are being fetched on this page.


Project has 3 components:
1. Frontend - React APP in `frontend/my-app` folder
2. Backend - Node Express API, to fetch data from database. Checkout [README](https://github.com/pachchigarsnehi/custom-goodies-shop/blob/main/backend/README.md) for more details.
3. Database - Postgress database on RDS


To run locally, run frontend and backend on same machine by this
Run Frontend by
```
cd frontend/src
npm run start
```

Run Backend by
```
cd backend
npm run dev
```

Follow instructions in backend folder to make the `.env` file
