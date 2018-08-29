console.log("Sanity check!");

function dashToSpace(){
    console.log('d2s click');
    var textarea = document.getElementById("intext");
    var intext = textarea.value;
    var outtext = [];
    for (var i = 0; i < intext.length; i++){
        if (intext[i] == '-') {
            outtext.push(" ");
        }
        else {
            outtext.push(intext[i]);
        }
    }
    textarea.value = outtext.join('');
}