function collect(a,b){
return console.log("collection " + a+b);
}
function subs(a,b){
return console.log("substruction " + a-b);
 }
function divise(a,b){
return console.log("division " + a/b);
}

function mult(a,b){
return console.log("multiplition " + a*b);
 }
                        
module.exports={
    collect:collect,
    subs:subs,
    divise:divise,
    mult:mult
}