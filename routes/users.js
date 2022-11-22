import express from 'express';
import {getMain} from '../control/users.js';
import {createUser} from '../control/users.js';
import {getUser} from '../control/users.js';
import {deleteUser} from '../control/users.js';
import {updateSpecific} from '../control/users.js';

const router = express.Router();

//All routes her are already starting with '/users'
router.get('/', getMain);

//To post new users.
router.post('/', createUser);

//Create a route to search user by id.
router.get('/:id', getUser);

//To delete exisiting user  by id.
router.delete('/:id', deleteUser);

//To update specific data for the exisiting user by id.
router.patch('/:id', updateSpecific);


export default router;