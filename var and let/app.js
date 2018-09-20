function varvslet() {
    console.log(i); // i is undefined due to hoisting
    // console.log(j); // ReferenceError: j is not defined
   
    for( var i = 0; i < 3; i++ ) {
      console.log("i inside ", i); // 0, 1, 2
    };
   
    console.log("i outside ", i); // 3
    // console.log(j); // ReferenceError: j is not defined
   
    for( let j = 0; j < 3; j++ ) {
      console.log("j inside ", j); // 0, 1, 2
    };
   
    console.log("i outside ", i); // 3
    // console.log("j outside ", j); // ReferenceError: j is not defined
  }

  varvslet();

  /**
   * var được sử dụng như biến toàn cục
   * let được sử dụng như biến cục bộ
   */