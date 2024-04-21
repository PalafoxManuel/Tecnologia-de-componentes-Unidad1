var express = require('express');
var router = express.Router();

var users = [
  {
    id:1,
    name: 'Jhon',
    email: 'jhon@gmail.com'
  },
  {
    id:2,
    name: 'Jane',
    email: 'jne@hotmail.com'
  }
]


router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next){
  var user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.status(201).json(user);
});

router.put('/:id', function(req, res, next) {
  var userId = parseInt(req.params.id, 10);
  var updatedData = req.body;

  var index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    users[index] = { ...users[index], ...updatedData }; // Reemplazar el usuario
    res.json(users[index]); 
  } else {
    res.status(404).json({ error: `Usuario con ID ${userId} no encontrado` });
  }
});

router.patch('/:id', function(req, res, next) {
  var userId = parseInt(req.params.id, 10);
  var updatedFields = req.body;

  var index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    users[index] = { ...users[index], ...updatedFields }; 
    res.json(users[index]); 
  } else {
    res.status(404).json({ error: `Usuario con ID ${userId} no encontrado` });
  }
});

router.delete('/:id', function(req, res, next) {
  var userId = parseInt(req.params.id, 10);
  var index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    users.splice(index, 1); 
    res.json({ message: `Usuario con ID ${userId} ha sido eliminado` });
  } else {
    res.status(404).json({ error: `Usuario con ID ${userId} no encontrado` });
  }
});

module.exports = router;
