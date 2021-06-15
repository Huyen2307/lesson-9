let userKicks = 0;
let ex = document.querySelectorAll('.ex');
let btn = document.querySelectorAll('.btn');
let listsColor = ['red','blue','black','green','pink']
// bai 1
btn[0].onclick = function() {
    ex[0].classList.toggle('click__remove');
};
// bai2
btn[1].addEventListener('click', function() {
    ex[1].style.backgroundColor = listsColor[userKicks];
    if(userKicks > listsColor.length) userKicks = 0;
    userKicks++;
});
// bai3
btn[2].addEventListener('click',function() {
    const ex2_sub = ex[2].innerHTML;
    const ex3_sub = ex[3].innerHTML;
    ex[2].innerHTML = userKicks%2===0 ? ex3_sub : ex2_sub;
    ex[3].innerHTML = userKicks%2===0 ? ex2_sub : ex3_sub;
    userKicks++;
});
// bai4
btn[3].onclick = function() {
    ex[4].style.fontSize = `${14 + userKicks}px`;
    userKicks++;
};