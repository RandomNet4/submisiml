const { preHandler, getPredictHandler } = require("../server/handler");

const routes = [
  {
    path: "/predict",
    method: "POST",
    handler: preHandler,
    options: {
      payload: {
        allow: "multipart/form-data",
        multipart: true,
        maxBytes: 1000000,
      },
    },
  },
  {
    path: "/predict/histories",
    method: "GET",
    handler: getPredictHandler,
  },
];

module.exports = routes;
