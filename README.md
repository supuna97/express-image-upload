## ExpressJS image upload and view with mysql

### table of contents
- [description](#description)
- [dependencies](#dependencies)
- [dev dependencies](#dev-dependencies)
- [steps to run](#steps-to-run)
- [usage](#usage)
- [author](#author)
- [license](#license)
- [acknowledgements](#acknowledgements)
- [version](#version)

### description
This is a simple express server that allows you to upload images and view them. The images are stored in the storage folder and the image data is stored in a mysql database. The database is created using the `ejs_crud.sql` file. The server is hosted on port 3000. The server is also configured to use eslint with the airbnb style guide.

### dependencies
- express
- multer
- cors
- dotenv
- nodemon
- morgan
- mysql
- body-parser
- express-fileupload
- express-validator

### dev dependencies
- eslint
- eslint-config-airbnb-base
- eslint-plugin-import

### steps to run
1. Clone the repository.
2. Run `npm install`
3. create a .env file in the root directory.
4. Add the following to the .env file.
```
PORT=3000
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=ejs_crud
DB_PORT=3306
DB_CONNECTION_LIMIT=10
```
5. Run `npm start` or `nodemon index.js` to start the server.

### usage
1. Open your postman and make a post request to `http://localhost:3000/v1/files/upload` with the image file attached to the body of the request. The key should be `image`. You can also add a description to the image by adding a key called `description` to the body of the request. The response will be a json object with the filename and the description of the image.
- json - { "filename": "image.jpg", description: "image description}

2. You can also make a get request to `http://localhost:3000/v1/files?id` to get all the images in the storage folder.

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

### version
1.0.0

## <img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.png" width="30" /> Thanks for Visiting

### Please 🌟 this repository! It really helps others to find this!! <img src="https://user-images.githubusercontent.com/74038190/216125640-2783ebd5-e63e-4ed1-b491-627a40b24850.png" width="25" />
