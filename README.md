Instrucion for running the project

<!-- CLIENT RUN -->

cd server/

> .env

// Save this data in .env from server

//PORT='5002'
//DB_NAME=''
//DB_USER_NAME=''
//DB_PASSWORD=''

cd client/

// Save this data in .env from client

//REACT_APP_URL='http://localhost:PORT' PORT = server/.env/PORT

// run project

cd server/

npm ci

npm run sereverDev

cd client/ 

npm ci 

npm start

