const express = require('express');
const router = express.Router();

// route  GET api/contacts
// description Get all users contacts
// access Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});
// route  POST api/contacts
// description Get all users contacts
// access Private
router.post('/', (req, res) => {
  res.send('Add contact');
});
// route  PUT/ api/contacts
// description update contacts
// access Private
router.put('/', (req, res) => {
  res.send('Update contact');
});
// route  DELETE / api/contacts
// description delete contacts
// access Private
router.delete('/', (req, res) => {
  res.send('delete contact');
});

module.exports = router;
