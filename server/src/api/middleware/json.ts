import {  ServerResponse } from "http"

export async function json(req: any, res: ServerResponse){
  const buffers = []

  for await (const chunk of req) {
      buffers.push(chunk)
  }

  try {
      req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {
      req.body = null
  }
  
  res.setHeader('Content-type', 'application/json')
}