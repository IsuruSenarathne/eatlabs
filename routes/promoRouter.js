var express = require('express');
var promoRouter  = express.Router();
const Promos = require("../models/promo");
const bodyParser = require("body-parser");

promoRouter.use(bodyParser.json());


promoRouter
  .route("/")

  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get(async (req, res, next) => {
        Promos.findById
      .then(
        promos => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(promos);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })

  .post((req, res, next) => {
    Promos.create(req.body)
      .then(
        promo => {
          res.statusCode = 201;
          res.setHeader("Content-Type", "application/json");
          res.json(promo);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promos");
  })

  .delete((req, res, next) => {
    Promos.remove({})
      .then(
        res => {
          res.statusCode = 204;
          res.setHeader("Content-Type", "application/json");
          res.json(res);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

promoRouter
  .route("/:promoId")

  .get(function(req, res, next) {
   Promos.findById(req.params.promoId)
      .then(
        promo => {
          res.statusCode = 204;
          res.setHeader("Content-Type", "application/json");
          res.json(promo);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })

  .put(function(req, res, next) {
   Promos.findByIdAndUpdate(
      req.params.promoId,
      {
        $set: req.body
      },
      { new: true }
    )
      .then(
        promo => {
          res.statusCode = 204;
          res.setHeader("Content-Type", "application/json");
          res.json(promo);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })

  .delete(function(req, res, next) {
   Promos.findByIdAndRemove(req.params.promoId)
      .then(
        promo => {
          res.statusCode = 204;
          res.setHeader("Content-Type", "application/json");
          res.json(promo);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

module.exports = promoRouter;