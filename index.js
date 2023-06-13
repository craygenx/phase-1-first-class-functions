function receivesAFunction(callback){
  return callback();
}

function returnsANamedFunction(){
  function namedFuction() {
    return " ";
  }
  return namedFuction
}

function returnsAnAnonymousFunction(){
  return function(){
    return " ";
  }
}
