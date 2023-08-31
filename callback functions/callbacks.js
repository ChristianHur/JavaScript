onload = ()=>{
    const btn = document.getElementById("click-me");
    btn.addEventListener("click", ev => {
        console.log("You clicked me!")
        fetch("data.json")
            .then( response => response.json() )
            .then( data => console.log("Success:", data))
            .catch( err => console.log("Error: ",err))
        
        console.log("Done!");
    })
}
