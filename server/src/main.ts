import express from "express";
const app = express();

import { json } from './api/middleware/json';
import { Route, routes } from './api/routes';
import { extractQueryParams } from '../src/utils/extractQueryParams';

app.get("/list",async function (req, res) {
  const {method, url} = req
  await json(req, res)

  const route = routes.find(route =>{
      return route.method == method && route.path.test(url)
  })

  if (route){
      const routeParams = req.url.match(route.path)

      const {query, ...params} = routeParams?.groups!

      req.params = params
      req.query = query ? extractQueryParams(query) : {}

      return route.handler(req, res)
  }

});
 
app.listen(3000);