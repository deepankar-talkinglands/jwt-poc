// importing packing
var jwt = require('jsonwebtoken');
// defining the JWT Secret KEY
let secret_key = "SOMETHING_SECRET";
//  encypted data
let encrypted_data = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVlcGFua2FyIiwiZW1haWwiOiJkZWVwYW5rYXIubW9uZGFsQHAzNjAuY29tIiwicGhvbmUiOiI5ODMyNTAwMTA1IiwiaWF0IjoxNjYyMzc4MDA1fQ.u8Sh4S1wVfgsufyGvsf-YIqq6ebLQJoWoBQwrjxGO_g'
//  decrypte the encrypted data
var decryped_data = jwt.verify(encrypted_data, secret_key);
console.log(decryped_data);