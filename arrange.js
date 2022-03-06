//lecture
function get_members(){
    return ['riverman','kangin','fc5999'];
}

let member = get_members();

for(let i=0; i<member.length; i++){
    console.log(member[i]);
}

member.push('박강인');
member.unshift('king');
member = member.concat(['strong','man']); //member.concat(['strong','man']); 만 입력하면 안됨.
member.splice(3,1,'park');
member.shift();
member.pop();
member.sort(); //member.reverse();
console.log(member);

//toUpperCase node.js에 없음 
//<br />도 줄바꿈이 아님

//homework
let A=['Jazz', 'Blues'];
A.push('Rock-n-Roll');
A.splice(1,1,'Classics');
A.shift();
A.unshift('Rap', 'Reggae');
console.log(A);

let arr = ['a','b'];

arr.push(function(){
    console.log(this); //this가 무엇?
})
arr[2]();


