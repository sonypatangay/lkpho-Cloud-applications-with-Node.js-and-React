let myPromise1 = new Promise((resolve, reject)=>
{
    setTimeout(()=> {
    resolve("Promise 1 resolved");
    }, 6000
    );
}
);

let myPromise2 = new Promise((resolve, reject) =>
{
    setTimeout(()=>
    {
        resolve("Promise2 resolved");
    }, 3000)
}
)

myPromise1.then((successMessage) => {
    console.log("From callback "+ successMessage);
});

myPromise2.then((successMessage) =>
{
    console.log("From callback2 "+ successMessage);
}
);