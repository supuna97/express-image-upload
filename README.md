## express-image-upload with mysql

### description
This is a simple express server that allows you to upload images to a server. It uses multer to handle the file uploads and stores the images in a folder called uploads. It also uses the cors package to allow cross origin requests.

### dependencies
- express
- multer
- cors

### installation
1. Clone the repo
2. Run `npm install`
3. create a .env file in the root directory.
3. Run `npm start`
4. Open your browser and go to `http://localhost:3000/`

### usage
1. Open your postman and make a post request to `http://localhost:3000/v1/files/upload` with the image file attached to the body of the request.
2. You can also make a get request to `http://localhost:3000/v1/files?id` to get all the images in the uploads folder.

### author
- [github](https://github.com/supuna97)

### license
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### acknowledgements
- [express](https://expressjs.com/)
- [multer](https://www.npmjs.com/package/multer)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [morgan](https://www.npmjs.com/package/morgan)
- [mysql](https://www.npmjs.com/package/mysql)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [express-fileupload](https://www.npmjs.com/package/express-fileupload)
- [express-validator](https://www.npmjs.com/package/express-validator)

### project status
- [x] create a simple express server
- [x] add multer to handle file uploads
- [x] add cors to allow cross origin requests
- [x] add mysql to store image data
- [x] add express-fileupload to handle file uploads
- [x] add express-validator to validate file uploads
- [x] add dotenv to handle environment variables
- [x] add nodemon to restart server on file changes
- [x] add morgan to log requests
- [x] add body-parser to parse request bodies

### version
1.0.0
