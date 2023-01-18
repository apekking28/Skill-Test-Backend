# DOCUMENTATION OF SKILL TEST BACEND

# A. Technology
To build this project i used some technology, here below list of technology i used :
- Visual Studio Code (VSC)
- Node js v19.3.0
- MongoDB 1.34.2
- Express 4.18.2
- Cors 2.8.5
- Body-parser 5.1.0
- Jsonwebtoken 9.0.0 
- Bcrypt 5.1.0
- Nodemailer 6.9.0
- Mongoose 6.8.3
- NPM 9.2.0
- Postman 10.6.7

# B. STORY
This application is created by creating an authentication and authorization API to log into the application, after that creating User details, and creating Product.
This application is based on CRUD Create, Read, Update, Deleted.

# C. TABLE DESIGN
<img width="300" alt="Screen Shot 2023-01-18 at 14 44 32" src="https://user-images.githubusercontent.com/106460262/213112995-1b04ecb2-75fb-4467-b19d-0c75d024e3c9.png">

# D. API 
<img width="260" alt="Screen Shot 2023-01-18 at 16 17 30" src="https://user-images.githubusercontent.com/106460262/213131852-2e73739f-8113-46a6-a22b-ee219ae889c7.png">


# E. ROUTE
<img width="400" alt="Screen Shot 2023-01-18 at 14 53 31" src="https://user-images.githubusercontent.com/106460262/213114782-956497c7-9736-494c-9467-caf6dfe5c995.png">

# F. DATABASE

For the database I use MongoDB :

<img width="250" alt="Screen Shot 2023-01-18 at 14 57 09" src="https://user-images.githubusercontent.com/106460262/213115485-2e9ee5e6-5ac4-4849-9365-499ae16b7e31.png">


1. User Document

<img width="350" alt="Screen Shot 2023-01-18 at 15 02 14" src="https://user-images.githubusercontent.com/106460262/213116130-25a970e3-dbea-4637-bc70-a742c0652817.png">

2. User-detail Document

<img width="350" alt="Screen Shot 2023-01-18 at 15 07 31" src="https://user-images.githubusercontent.com/106460262/213117149-ee3f8e5b-b10f-4c30-88cb-ae15f2d83cca.png">

3. Product Document

<img width="250" alt="Screen Shot 2023-01-18 at 15 08 34" src="https://user-images.githubusercontent.com/106460262/213117358-0fefa5bd-ffe1-4242-88aa-b5b92e2826bb.png">

# G. HOW TO USE
 
I use a postman to use the API that I have created to see the response given when using the API.

1. Add user

- Route for Create account API "http://localhost:5000/signUp"
- Method : POST
- This API is used to create an account 
- Response API

<img width="250" alt="Screen Shot 2023-01-18 at 15 29 59" src="https://user-images.githubusercontent.com/106460262/213121668-630fca84-f291-46df-8d2f-e8874e4f6e61.png">

2. Login user 

- Route for login API "http://localhost:5000/signIn"
- Method : POST
- APIs used when logging in
- Response API

<img width="300" alt="Screen Shot 2023-01-18 at 15 37 21" src="https://user-images.githubusercontent.com/106460262/213123073-e9fce725-0dca-4a16-b244-36fb2f47399b.png">

3. Forgot-password

- Route forgot password for API "http://localhost:5000/forgot-password"
- Method : POST
- API is used when forgetting email password
- <img width="299" alt="Screen Shot 2023-01-18 at 15 43 06" src="https://user-images.githubusercontent.com/106460262/213124516-d68ccd01-6cab-4682-aa90-2d47a1ca110d.png">

4. Add user-detail

- Route Add user detail for API "http://localhost:5000/user"
- Method : POST
- API is used to add user detail
- Response API

<img width="300" alt="Screen Shot 2023-01-18 at 15 48 44" src="https://user-images.githubusercontent.com/106460262/213125666-5f12e313-3bf9-421d-9355-120d7a936cd4.png">

5. Get user detail

- Route get user detail for API "http://localhost:5000/user"
- Method : GET
- API is used to get user detail
- Response API 

<img width="300" alt="Screen Shot 2023-01-18 at 15 55 19" src="https://user-images.githubusercontent.com/106460262/213126975-6fb78c1f-6add-46f2-ab31-e3527df03515.png">

6. Update user detail 

- Route update user detail for API "http://localhost:5000/user/:id"
- Method : PUT
- API is used to update user detail
- Response API
- note : to update the data you must enter the parameter _id

<img width="250" alt="Screen Shot 2023-01-18 at 16 01 59" src="https://user-images.githubusercontent.com/106460262/213128400-4d48a58e-b946-444b-8764-76017c0fe79e.png">

7. Delete user detail

- Route delete user detail for API "http://localhost:5000/user/:id"
- Method : DELETE
- API is used to delete user detail
- Response API
- note : to update the data you must enter the parameter _id
 
<img width="250" alt="Screen Shot 2023-01-18 at 16 03 35" src="https://user-images.githubusercontent.com/106460262/213128987-c06ee9bf-466a-4f2f-8bd6-6894afdade8c.png">

8. Add product 

- Route add product for API "http://localhost:5000/product"
- Method : GET
- API is used to add product
- Response API

<img width="250" alt="Screen Shot 2023-01-18 at 16 09 32" src="https://user-images.githubusercontent.com/106460262/213130024-724884bc-53d7-43df-87a9-76bd6c613794.png">

9. Get product

- Route get product for API "http://localhost:5000/product"
- Method : GET
- API is used to get product
- Response API 

<img width="250" alt="Screen Shot 2023-01-18 at 16 12 01" src="https://user-images.githubusercontent.com/106460262/213130616-554a9987-e909-4a57-82ca-4a2d692ce1c0.png">

10. Update product

- Route update product for API "http://localhost:5000/product/:id"
- Method : PUT
- API is used to update product
- Response API
- note : to update the data you must enter the parameter _id

<img width="250" alt="Screen Shot 2023-01-18 at 16 13 37" src="https://user-images.githubusercontent.com/106460262/213130944-fbe384f0-b477-46e7-a99b-19e7f7a00caf.png">

11.Delete product

- Route update product for API "http://localhost:5000/product/:id"
- Method : DELETE
- API is used to delete product
- Response API
- note : to update the data you must enter the parameter _id

<img width="250" alt="Screen Shot 2023-01-18 at 16 16 28" src="https://user-images.githubusercontent.com/106460262/213131636-4bd97d64-64ee-4031-a335-5663b0929740.png">


12. Get data user with user detail

- Route get user with user detail API "http://localhost:5000/userDetail"
- Method : GET
- API is used to get user with user detail
- Response API

<img width="450" alt="Screen Shot 2023-01-18 at 16 22 31" src="https://user-images.githubusercontent.com/106460262/213132904-c9ec2ec0-5e00-46e9-8976-e2f052d1b538.png">

12. Get data user with product

- Route get user with product detail API "http://localhost:5000/userProduct"
- Method : GET
- API is used to get user with product
- Response API 

<img width="450" alt="Screen Shot 2023-01-18 at 16 25 25" src="https://user-images.githubusercontent.com/106460262/213133588-341ab7d0-0e91-4ef2-8651-1e450d13d28d.png">

13. Get all data user 

- Route get user with product detail API "http://localhost:5000/getUser"
- Method : GET
- API is used to get all user 
- Response API 

<img width="450" alt="Screen Shot 2023-01-18 at 16 27 40" src="https://user-images.githubusercontent.com/106460262/213134058-b1f33ad9-10d4-4d1c-aca8-44127fcceddf.png">


# NOTE 
to access API
- Add user detail
- Get user detail
- Update user detail
- Delete user 
- Add product
- Get product
- Update product
- Delete Product

You need to put the token in the headers, to access the API above.






























