```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->


2. Answer the following with reason:

- `user == newUser;` // true , Since we assign value of user to newUser 
- `user === newUser;` // true 
- `user.name === newUser.name;`  // true since both have the same values and tehie data types  .
- `user.name == newUser.name;` // true , both have the same values
- `user.sibling == newUser.sibling;` // true , both having same values 
- `user.sibling === newUser.sibling;` // true , since both have the same values and tehie data types  .
- `user.sibling == allBrothers;` // false , address must be different.
- `user.sibling === allBrothers;` // false , same as above.
- `brothersCopy === allBrothers;` // false, 
- `brothersCopy == allBrothers;` // false 
- `brothersCopy == user.sibling;` // true // same address assigned .
- `brothersCopy === user.sibling;` // true 
- `brothersCopy[0] === user.sibling[0];` // true
- `brothersCopy[1] === user.sibling[1];` // true
- `user.sibling[1] === newUser.sibling[1];` //  true 
