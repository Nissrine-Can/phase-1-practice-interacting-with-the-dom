document.addEventListener("DOMContentLoaded", function() {

    const counter = document.querySelector("#counter");
     intervalId = setInterval(function() {
        count += 1;
        counter.textContent = count;
    }, 1000); 
});
const counter = document.querySelector("#counter");
const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
let count = 0;

btnPlus.addEventListener("click", function() {
    count += 1;
    counter.textContent = count;
})

btnMinus.addEventListener("click", function() {
    count -= 1;
    counter.textContent = count;
})


const btnLikes = document.getElementById("heart");
let numOfLikes = 1;
let likedNum;

btnLikes.addEventListener("click", function() {
   //console.log(numOfLikes)
   //console.log(e.target.value)
  
  if (likedNum===counter) {
    numOfLikes += 1;
    const li = document.createElement('li');
   li.textContent = `The number ${count} is liked ${numOfLikes} times.`
   document.querySelector('.likes').appendChild(li);
  } 
    
    
  
  // what happens after I liked a different number than the current one.
  //  How to check what number Im liking?

   
   
})



let intervalId;
let intervalId2;
const btnPause = document.getElementById("pause");

btnPause.addEventListener("click", function(e) {

    if (btnPause.innerText === "pause") {
        clearInterval(intervalId);
        clearInterval(intervalId2);
        btnPause.innerText = "resume";
        btnPlus.setAttribute('disabled', 'disabled');
        btnMinus.setAttribute('disabled', 'disabled');
        btnLikes.setAttribute('disabled', 'disabled');

    } else {

        btnPause.innerText = "pause";
        btnPlus.removeAttribute('disabled');
        btnMinus.removeAttribute('disabled');
        btnLikes.removeAttribute('disabled');
        
        intervalId2 = setInterval(function() {
            count += 1;
            counter.textContent = count;
        }, 1000); 
    }
});

const commentForm = document.querySelector("#comment-form");
commentForm.addEventListener("submit", function(e) {
   e.preventDefault();
   handleComment(e.target[0].value);
   commentForm.reset();
});

function handleComment(comment) {
    let p = document.createElement('p');
    p.textContent = comment
    document.querySelector(".comments").appendChild(p);
}
