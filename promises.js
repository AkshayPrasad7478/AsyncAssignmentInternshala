var p_Promise = document.getElementById("p_Promise");
var button2 = document.getElementById("button2");
var para2="";
let data2=[];
let timeOutSession;

// Creating click event................
button2.addEventListener("click" ,fetchDataPromises );

// Creating function for the event........
function fetchDataPromises(){
    p_Promise.innerHTML= "Loading...."

    // Creating new promise.........
 const promise = new Promise((res, rej)=>{
    timeOutSession = setTimeout(()=>{
        rej("operation took more then 5 sec")
    },5000);
// fetcjing the API...............
    const api= fetch("https://dummyjson.com/posts")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        res (data);
    })
    .catch((error)=>{
        p_Promise.innerHTML=error;
        para2="";
    })

})

// consuming the promise............
promise
.then((data) => {
  clearTimeout(timeOutSession);
  data2=data.posts;
  setData();
})
.catch((error) => {
  clearTimeout(timeOutSession);
  p_Promise.innerHTML= error;
});
}


// setdata function to set the data to the para tag...........
function setData(){
for(let i=0; i<data2.length;i++){
    para2=para2 + data2[i].title+ " ";
}
p_Promise.innerHTML=para2;
para2="";
}