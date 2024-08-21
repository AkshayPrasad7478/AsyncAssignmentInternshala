
var p_AsyncAwait = document.getElementById("p_AsyncAwait");
var button3 = document.getElementById("button3");
var para3="";
let data3=[];

// creating event listner .................
button3.addEventListener("click" ,fetchDataAsyncAwait );

// async cunction for event listner
 async function fetchDataAsyncAwait(){
    try{
    
        p_AsyncAwait.innerHTML="loading....";
        const resolve= await fetch("https://dummyjson.com/posts");
    const result = await resolve.json();
    data3=  result.posts;
    // console.log(data3.length);
    showData();
}
catch(error){
    console.log(error);

}

// show data function to display the data in para......
function showData(){
    for(let i=0; i<data3.length;i++){
        para3= para3+data3[i].title +" ";
    }
    p_AsyncAwait.innerHTML=para3;
    para3="";
}
   
}