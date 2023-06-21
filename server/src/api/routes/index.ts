import { IncomingMessage, ServerResponse } from "node:http"
import { buildRoutePath } from "../../utils/buildRoutePath"


const database = [
  {id:"0", title: "title", description: "description"},
  {id:"1", title: "Other", description: "description"},
  {id:"2", title: "Other2", description: "description"},
  {id:"3", title: "Other3", description: "description"},
  {id:"4", title: "Other4", description: "description"},
  {id:"5", title: "Other5", description: "description"},
]

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath("/list"),
        handler: (req: any, res: any) => {
            const list = database

            return res.end(JSON.stringify(list))

        }
    },
 
]

export type Route = {
  method: string;
  path: RegExp;
  handler: (req: IncomingMessage, res: ServerResponse) => void;
};