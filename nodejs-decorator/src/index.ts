import 'reflect-metadata'

const Route = (route: string): ClassDecorator => {
  return function (cls: object) {
    Reflect.defineMetadata('route', route, cls);
  }
}


@Route('/something')
export class Controller {
  name: string = 'aaa';
}

const route = Reflect.getMetadata('route', Controller);
console.log(route)
