export function buildRoutePath(path: string){
  const routeParametersRegex = /:([a-zA-Z]+)/g
  // @ts-ignore
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')
  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

  return pathRegex
}