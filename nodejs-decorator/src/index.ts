const Something = (message: string) => {
  return function (constructor: Function) {
    console.log(message);
  };
};


@Something('bb')
export class C {
  a = 'aa';
}

const c = new C()
