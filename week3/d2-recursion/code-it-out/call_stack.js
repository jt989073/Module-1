function foo() {
  debugger;
  return 2 + bar();
  
}

function bar() {
  debugger;
  return 6 + baz();
}

function baz() {
  debugger;
  return 3;
}

console.log(foo());

debugger;
