// const createEntity = (entity) => {
//   defineRoute('POST', '/users', (req, res) => {
//     let condition;
//     let statusCode;
//     let resMessage;
let req = {
  body: {
    name: 'q',
    email: 'w',
    // password: 't',
  },
};
let condition =
  !req.body || !req.body.name || !req.body.email || !req.body.password;

console.log(condition);
//     switch (entity) {
//       case 'users':
//         condition =
//           !req.body || !req.body.name || !req.body.email || !req.body.password;
//         break;
//       case 'posts':
//         condition = !req.body || !req.body.user_id || !req.body.content;
//         break;
//     }

//     if (condition) {
//       statusCode = 400;
//       resMessage = "{ message: 'Not enough info to create new entity' }";
//     } else {
//       const newEntityId = ++db[entity][0].idCounter;
//       const newEntity = { ...{ id: newEntityId }, ...req.body };
//       db[entity].push(newEntity);
//       statusCode = 201;
//       resMessage = db[entity][db[entity].length - 1];
//       updateEntityDb(entity);
//     }

//     res.setHeader('Content-Type', 'application/json');
//     res.statusCode = statusCode;
//     res.end(JSON.stringify(resMessage));
//   });
// };
