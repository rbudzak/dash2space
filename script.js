console.log("Sanity check!");

function dashToSpace(){
    console.log('d2s click');
    var textarea = document.getElementById("intext");
    textarea.value = textarea.value.replace(/-/g, " ");    
}