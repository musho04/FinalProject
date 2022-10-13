# FinalProject

## Instrucion for running the project

<!-- SERVER RUN -->
# run server

### Install mysql

To install mysql on your machine please follow the instructions from the following source

https://hevodata.com/learn/installing-mysql-on-ubuntu-20-04/ 

### Create .env file
```
 cd server/  

> .env

// Save this data in .env  

// PORT="5002"

// DB_NAME=""

// DB_USER_NAME=""

// DB_PASSWORD=""
```

### Install server dependencies

```
npm ci
```
### Start server
```
npm run serverDev
```

<!-- CLIENT RUN -->
# run client
```
cd client/

# Save this data in .env

Create a variable with this name (REACT_AP_URL), the value of which is equal to the URL of the server

> .env

// REACT_AP_URL=""

```

### Install client dependencies

```
npm ci 
```

### Start client

```
npm start
```
