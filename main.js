
document.addEventListener("DOMContentLoaded", () => {
    


    ShowList();
  
});

async function  ShowList()
{
    var req = await fetch ("https://reqres.in/api/users/");
    var json=await req.json();
    var data=json.data;

    console.log(data);

    var divMain=document.getElementById("content");
      
    for(var k in data) {
        
        var div=document.createElement("div");
        div.className="divClass";

        var h=document.createElement("h6");
        h.innerHTML=data[k].first_name+' '+data[k].last_name;

        
        var p=document.createElement("p");
        p.innerHTML=data[k].email;

        

        var img=document.createElement("img");
        img.src=data[k].avatar;

        div.appendChild(h);
        div.appendChild(img);
        div.appendChild(p);


        divMain.appendChild(div);

     }

}
