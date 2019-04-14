const person = {
    name: "Nicholas"
};

person.name = "Greg";

console.log( person.name );

//	A const declaration prevents modification of the binding, not of the value.
/*
  person = {
      name: "Rahegar"
  };
*/