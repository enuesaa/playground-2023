const Route = (route: string) => {
  return function (constructor: any) {
    return class extends constructor {
      route = route;
    }
  }
}


@Route('/something')
export class Controller {
  name: string = 'aaa';
}

const c = new Controller()
console.log(c.route)
