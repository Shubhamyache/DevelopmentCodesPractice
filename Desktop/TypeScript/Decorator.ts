function f() {
  console.log("f(): evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("f(): called");
  };
}

class C {
  @f()
  method() {}
}
