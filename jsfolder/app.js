const retroData = async () => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/retro-forum/posts`
  );
  const data = await res.json();
  retroDisplayData(data.posts);
};

const retroDisplayData = (retro) => {
  const displayRetroData = document.getElementById("display-retro");
  //   console.log(retro);
  retro.forEach((retroALLApiData) => {
    const createDiv = document.createElement("div");
    createDiv.classList =
      "card hover:bg-[#797DFC1A]  bg-[#F3F3F5] w-[400px] md:w-[772px] h-[300px] md:h-[270px]  text-primary-content mt-10   ";
    createDiv.innerHTML = `
    <div class="p-10 flex ">
            <div class="w-[72px] h-[72px]"> <img src="${retroALLApiData.image}" alt="">
            <p>${retroALLApiData.isActive}</p>
            </div>
            <div class="ml-6 w-[300px]  md:w-[596px]">
                <div class="flex gap-2">
                    <p>${retroALLApiData.category}</p>
                    <p>${retroALLApiData.author.name}</p>
                </div>
                <div class=" border-dashed border-gray-500 border-b-2 pt-4">
                    <p class="">${retroALLApiData.title}</p>
                    <p class="my-4">${retroALLApiData.description}</p>
                </div>

                <div class="flex justify-between mt-4">
                    <div class="flex gap-3">
                        <img src="images/Group 13.png" alt="" srcset="">
                        <p>560</p>
                        <img src="images/Group 16.png" alt="" srcset="">
                        <p>1,568</p>
                        <img src="images/Group 18.png" alt="" srcset="">
                        <p>5 min</p>
                    </div>
                    <div> <img onclick="newContant(${retroALLApiData.id})" src="images/Group 40106.png" alt=""></div>
                </div>
            </div>
        </div>
    
    
    `;

    displayRetroData.appendChild(createDiv);
  });
};

const newContant = (data) => {
  const newContantIndisplay = document.getElementById("newContant");
  console.log("click me", data);
};
retroData();
