var p_callback = document.getElementById("p_callback");
const button1 = document.getElementById("button1");
var para="";
var data;

// created click event listner...............
button1.addEventListener("click" ,fetchdataCallback );

    

// creating a call back function for the event listner.............
    function fetchdataCallback(){ 
        p_callback.innerHTML= "Call back will be executed in 5 seconds";
        const api=fetch("https://dummyjson.com/posts");

        setTimeout(()=>{
            api.then(response => response.json())
            .then(result => { data= result.posts; 
            for(let i=0; i<data.length; i++){
                
            para = para + data[i].title +" ";
            
        }
        showData();
    } )
            .catch((error) => {
                p_SetTimeback.innerHTML=error;
              });
            
        },5000);
}

// show data function to display the data in the para tag...........
    function showData(){
        p_callback.innerHTML = para;
        para="";
    }



