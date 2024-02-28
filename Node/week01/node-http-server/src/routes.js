import { defineRoute, router } from './utils/define-route.js';

import { db, updateEntityDb } from './db.js';

const badReqNoData = (reqBody) => {
  if (!reqBody) {
    return { statusCode: 400, resMessage: "{ message: 'No data' }" };
  } else {
    return { statusCode: '', resMessage: '' };
  }
};

const badReqNotFound = (index, entity, metod) => {
  if (index === -1) {
    return { statusCode: 400, resMessage: "{ message: 'Not found' }" };
  }

  if (metod === 'DELETE') {
    return { statusCode: 204, resMessage: '' };
  }

  return { statusCode: 200, resMessage: db[entity][index] };
};

// GET all
const getAll = (entity) => {
  defineRoute('GET', `/${entity}`, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(db[entity].slice(1)));
  });
};

getAll('users');
getAll('posts');

//Get by id
const getById = (entity) => {
  defineRoute('GET', `/${entity}/:id`, (req, res) => {
    const entityId = Number(req.params.id);
    const index = db[entity].findIndex((el) => el.id === entityId);

    const { statusCode, resMessage } = badReqNotFound(index, entity, 'GET');

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = statusCode;
    res.end(JSON.stringify(resMessage));
  });
};

getById('users');
getById('posts');

// Create user
const createEntity = (entity) => {
  defineRoute('POST', '/users', (req, res) => {
    let { statusCode, resMessage } = badReqNoData(req.body);

    if (statusCode !== 400) {
      const newEntityId = ++db[entity][0].idCounter;
      const newEntity = { ...{ id: newEntityId }, ...req.body };
      db[entity].push(newEntity);
      statusCode = 201;
      resMessage = db[entity][db[entity].length - 1];
      updateEntityDb(entity);
    }

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = statusCode;
    res.end(JSON.stringify(resMessage));
  });
};

createEntity('users');
createEntity('posts');

// Update
const updateEntity = (entity) => {
  defineRoute('PATCH', `/${entity}/:id`, (req, res) => {
    let { statusCode, resMessage } = badReqNoData(req.body);

    if (statusCode !== 400) {
      const entityId = Number(req.params.id);
      const index = db[entity].findIndex((el) => el.id === entityId);

      ({ statusCode, resMessage } = badReqNotFound(index, entity, 'PATCH'));

      if (statusCode === 200) {
        db[entity][index] = { ...db[entity][index], ...req.body };
        resMessage = db[entity][index];
        updateEntityDb(entity);
      }
    }

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = statusCode;
    res.end(JSON.stringify(resMessage));
  });
};

updateEntity('users');
updateEntity('posts');

// Delete
const deleteEntity = (entity) => {
  defineRoute('DELETE', `/${entity}/:id`, (req, res) => {
    const entityId = Number(req.params.id);
    const index = db[entity].findIndex((el) => el.id === entityId);

    let { statusCode, resMessage } = badReqNotFound(index, entity, 'DELETE');

    if (statusCode === 204) {
      db[entity].splice(index, 1);
      updateEntityDb(entity);
    }

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = statusCode;
    res.end(JSON.stringify(resMessage));
  });
};

deleteEntity('users');
deleteEntity('posts');

export default router;
