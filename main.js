var hour=new Date().getHours();
if(hour >=4 && hour <=11){
    document.getElementById("message").innerHTML="good morning";
    document.body.style.backgroundColor="pink";
    document.getElementById("image").src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
}
else if(hour >=12 && hour <=18){
    document.getElementById("message").innerHTML="good afternoon";
    document.body.style.backgroundColor="orange";
    document.getElementById("image").src="https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
}
else if(hour>=19 && hour<=22){
    document.getElementById("message").innerHTML="good evening";
    document.body.style.backgroundColor="blue";
    document.getElementById("image").src="https://images.unsplash.com/photo-1608454591555-bff4fb5f5b84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80";
    
}

else{
    document.getElementById("message").innerHTML="******good night *****";
    document.body.style.backgroundColor="green";
    document.getElementById("image").src="https://images.unsplash.com/photo-1563689977643-72168040d352?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80";
}