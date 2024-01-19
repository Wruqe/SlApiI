// Create a router for user arrangement
const router = express.Router();

router.get('/', (req, res) => res.send('User routes'));
router.get('/:id' , (req, res) => res.send('User ID'));

// Mount the User router on the '/users' path
app.use('/user', router);

// Access user routes: https://localhost:3000/users

// Parse JSON data : BUILT-INS
app.use(express.json());

// Authentication middleware (basic example): CUSTOM
app.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401) .send(' Unauthorized') ;
  }
  // vaildate authorization token and call next() if vaild next();
});
// Get all users
app.get('/ users' , (req, res) => {
  res.json({users: [ id: 1, name: 'John' } , ... ] });
});
// Get a specific user by ID
app.get( '/users/:id' , (req, res) => {
  const userID = req.params.id;
  res.json({ id: userId, name: "User ${userId} ' });
  });
  // Create a new user
        app.post( ' / users' , (req, res) => {
          const newUser = req.body; // get data from request body
                 // Save user to database and send response
                 res.json({ mssage: "User created successfully!' })
  });
  const express = require(' express');
  const app = express();
  constant port = 3000;

  // SIAPI! route
   app.get('/' , (req, res) => res.send(' Express running!));
// start server
 app.listen(port, () => console.log('Server on port ${port} '));

app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.status) {
    res.status(err.status). send('Internal Server Error');
  }
});
