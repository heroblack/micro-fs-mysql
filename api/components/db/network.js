const express = require("express");
const router = express.Router();
const response = require("../../../network/response");
const store = require("../../../store/mysql");
router.get("/:table", list);
router.get("/:table/:id", get);
router.post("/:table", insert);
router.put("/:table", upsert);

async function list(req, res, next) {
  try {
    let users = await store.list(req.params.table);
    response.success(req, res, users);
  } catch (err) {
    next(err);
  }
}

async function get(req, res, next) {
  try {
    let user = await store.get(req.params.table, req.params.id);
    response.success(req, res, user);
  } catch (err) {
    next(err);
  }
}

async function insert(req, res, next) {
  try {
    let data = req.body;
    let user = await store.insert(req.params.table, data);
    response.success(req, res, user);
  } catch (err) {
    next(err);
  }
}

async function upsert(req, res, next) {
  try {
    let data = req.body;
    let user = await store.upsert(req.params.table, data);
    response.success(req, res, user);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
