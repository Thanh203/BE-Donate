const aa=[
    {
        a:1,
        b:2
    },
    {
        a:3,
        b:4
    },
    {
        a:5,
        b:6
    },
]

let e ={aa};
e.aa[0].b = 11;
console.log(aa);
console.log(e);