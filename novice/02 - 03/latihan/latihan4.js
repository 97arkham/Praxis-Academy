var coll = {a: 1, b: {d: 5, e: 7}, c: 3};

var newColl = icepick.dissocIn(coll, ["b", "d"]); // {a: 1, {b: {e: 7}}, c: 3}
console.log(newColl);

