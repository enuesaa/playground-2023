import 'reflect-metadata'

const Route = (route: string): ClassDecorator => {
  return function (cls: object) {
    let values: string[] = []
    if (Reflect.hasOwnMetadata('route', cls)) {
      values = Reflect.getMetadata('route', cls)
    }
    values.push(route)
    Reflect.defineMetadata('route', values, cls);
  }
}


@Route('/something')
@Route('/bb') // こっちが先
export class Controller {
  name: string = 'aaa';
}

const route = Reflect.getMetadata('route', Controller);
console.log(route)
