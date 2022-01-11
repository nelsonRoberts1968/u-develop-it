const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');


router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));
