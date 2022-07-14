"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home_ctrl");

router. get("/", ctrl.hello);

router. get("/login", ctrl.login);//기능

module.exports =router;