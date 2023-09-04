
const button=document.querySelector("button");
// const input=document.getElementById("input");
const input=document.querySelector("input");
const form=document.querySelector("form");
const container=document.getElementById("container");


// button.addEventListener("click", (eo) => {
// eo.preventDefault();
// const task=` <div class="task">
//         <span class="icon-star-full icon"></span>
//         <p>${input.value}</p>

//         <div>
//           <span class="icon-bin icon"></span>
//           <span class="icon-angry2 icon"></span>
//         </div>`;
//     container.innerHTML+=task;
//     input.value="";

// })

form.addEventListener("submit", (eo) => {
eo.preventDefault();
const task=` <div class="task">
        <span class="icon-star-full icon"></span>
        <p>${input.value}</p>

        <div>
          <span class="icon-bin icon"></span>
          <span class="icon-angry2 icon"></span>
        </div>`;
    container.innerHTML+=task;
    // input.value="";

})

container.addEventListener('click',(eo)  => {

    // لعنصر الذي يتم  عليه الحدث الكلاس نيم بتاعه كذا
    if(eo.target.className == "icon-bin icon"){
      eo.target.parentElement.parentElement.remove();
    }
    else if(eo.target.className =="icon-angry2 icon"){
        eo.target.classList.add("dn");
        const heart=`<span class="icon-heart"></span>`;
        // getElementsByClassName  ->document , html
        eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("finish");
      // في الاخرinnerHTML بحط جزءeo.target  لما يكون في كذا 
        eo.target.parentElement.innerHTML+=heart;
    }
    else if(eo.target.className == "icon-heart"){

         eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("finish");
         eo.target.classList.add("dn");
         const task=`<span class="icon-angry2 icon"></span>`;
         eo.target.parentElement.innerHTML+=task;
    }
    else if(eo.target.className == "icon-star-full icon"){
        eo.target.classList.add("orange");
        container.prepend(eo.target.parentElement)


    }
    else if(eo.target.className == "icon-star-full icon orange"){
         eo.target.classList.remove("orange");

    }
})