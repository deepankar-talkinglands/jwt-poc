// importing packing
var jwt = require('jsonwebtoken');
// defining the JWT Secret KEY
let secret_key = "SOMETHING_SECRET";
// Encrypted data payload
let payload = {
    name: 'Deepankar',
    email: 'deepankar.mondal@p360.com',
    phone: '9832500105'
}
// encrypte the data
var token = jwt.sign(payload, secret_key);
console.log(token);