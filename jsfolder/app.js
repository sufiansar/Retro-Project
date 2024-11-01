const retroData = async () => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/retro-forum/posts`
  );
  const data = await res.json();
  retroDisplayData(data.posts);
};

const retroDisplayData = (retro) => {
  const displayRetroData = document.getElementById("display-retro");

  retro.forEach((retroALLApiData) => {
    const createDiv = document.createElement("div");
    createDiv.classList =
      "card hover:bg-[#797DFC1A] bg-[#F3F3F5] w-[400px] md:w-[772px] h-[300px] md:h-[270px] text-primary-content mt-10";

    createDiv.innerHTML = `
        <div class="p-10 flex ">
          <div class="w-[72px] h-[72px]"> 
            <img src="${retroALLApiData.image}" alt="">
            <p>${retroALLApiData.isActive}</p>
          </div>
          <div class="ml-6 w-[300px] md:w-[596px]">
            <div class="flex gap-2">
              <p>${retroALLApiData.category}</p>
              <p>${retroALLApiData.author.name}</p>
            </div>
            <div class="border-dashed border-gray-500 border-b-2 pt-4">
              <p class="">${retroALLApiData.title}</p>
              <p class="my-4">${retroALLApiData.description}</p>
            </div>
            <div class="flex justify-between mt-4">
              <div class="flex gap-3">
                <img src="images/Group 13.png" alt="">
                <p>560</p>
                <img src="images/Group 16.png" alt="">
                <p>1,568</p>
                <img src="images/Group 18.png" alt="">
                <p>5 min</p>
              </div>
              <div>
                <img id="action-${retroALLApiData.id}" src="images/Group 40106.png" alt="">
              </div>
            </div>
          </div>
        </div>
      `;

    // Append the created element
    displayRetroData.appendChild(createDiv);

    // Attach onclick handler directly in JavaScript
    const actionButton = document.getElementById(
      `action-${retroALLApiData.id}`
    );
    actionButton.onclick = () => newContant(retroALLApiData);
  });
};
// const newContant = (data) => {
//   const neew = document.getElementById("newContant");

//   // Get a list of IDs of all children of "newContant"
//   const childIds = Array.from(neew.children).map((child) => child.id); // '',101,

//   const isExist = childIds?.find((fd) => Number(fd == data?.id));
//   if (isExist) return alert("Already exist");

//   // Create the new div element with the provided data
//   const newDiv = document.createElement("div");
//   newDiv.setAttribute("id", `${data.id}`);
//   newDiv.classList =
//     "flex justify-between text-black bg-white mx-8 p-4 rounded-3xl mt-5";
//   newDiv.innerHTML = `
//       <h1>${data.title}</h1>
//       <div class="flex gap-3">
//         <img class="w-7 h-7" src="images/Group 16.png" alt="">
//         <p>1500</p>
//       </div>
//     `;

//   // Append the new div to the "newContant" container
//   neew.append(newDiv);
// };

// const selectedData = [];

// // The function to handle the object
// function newContant(data) {
//   const newContant = document.getElementById("newContant");
//   newContant.textContent = "";
//   const isExist = selectedData.find((retro) => retro.id == data.id);
//   if (!isExist) selectedData.push(data);
//   else alert("The item already selected");
//   selectedData.forEach((dt) => {
//     const newDiv = document.createElement("div");
//     newDiv.innerHTML = `
//         <div class="mx-8 p-4 flex justify-between text-black font-bold text-lg">

//                 </div>
//                 <div class="flex justify-between  text-black bg-white mx-8 p-4 rounded-3xl">
//                     <h1>${dt.title}</h1>
//                     <div class="flex gap-3 ">
//                         <img class="w-7 h-7" src="images/Group 16.png" alt="">
//                         <p>${dt?.view_count}</p>

//                     </div>
//                 </div>
//     `;
//     newContant.appendChild(newDiv);
//   });
// }

const newContant = (data) => {
  // console.log(data);
  const selectedData = document.getElementById("newContant");
  const selectedIds = Array.from(selectedData.children).map((mp) => mp.id);
  console.log(selectedIds);

  const isExist = selectedIds?.find((fd) => Number(fd == data?.id));
  console.log(isExist);

  if (isExist) return;

  const newdiv = document.createElement("div");
  newdiv.setAttribute("id", `${data.id}`);
  newdiv.innerHTML = `<div class="flex justify-between  text-black bg-white mx-8 p-4 rounded-3xl mt-6">
                    <h1>${data.title}</h1>
                    <div class="flex gap-3 ">
                        <img class="w-7 h-7" src="images/Group 16.png" alt="">
                        <p>1500</p>
                    </div>
                </div>`;

  selectedData.append(newdiv);
  countClick();
};

const countClick = () => {
  const countclickId = document.getElementById("countClick");
  const innerData = countclickId.innerText;
  const intValue = parseInt(innerData);
  const newValue = intValue + 1;
  countclickId.innerText = newValue;
};

retroData();
