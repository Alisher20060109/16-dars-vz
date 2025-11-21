//bekent kart yoyilgan
let feedCart = document.getElementById("feed-cart");
let request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/posts");

request.send();
request.onreadystatechange = function () {
  if (
    request.readyState === 4 &&
    request.status >= 200 &&
    request.status < 300
  ) {
    let data = JSON.parse(request.response);

    data.map((el) => {
      feedCart.innerHTML += `
       <div class="max-w-[385px] cursor-pointer border border-gray-300 hover:border-gray-400 rounded-lg mb-6">

    <div class="w-full flex justify-between items-center p-3">
        <div class="flex gap-2 items-center">
            <div class="bg-blue-400 w-[35px] h-[35px] flex justify-center items-center text-[18px] text-white rounded-full">
               L
            </div>
            <div class="flex flex-col">
                <h1 class="font-semibold">
Leanne Graham</h1>
                <h1 class="text-gray-600">@Bret</h1>
            </div>
        </div>
        <div>

        </div>
    </div>

    <img class="w-full"
        src="https://images.unsplash.com/photo-1623113758911-db913c487b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        alt="">
         <div class="flex justify-between w-full items-center pt-[20px] px-[15px]">
                <div class="flex gap-3 items-center">
                    <img class="w-6" src="./assets/image/heart.svg" alt="">
                    <img class="w-6" src="./assets/image/beacon.svg" alt="">
                    <img class="w-6" src="./assets/image/share.svg" alt="">
                </div>
                <img class="w-6" src="./assets/image/bookmark.svg" alt="">
            </div>

    <div class="p-4 space-y-2">
     <div class="flex items-center gap-3">
            
            <span class="text-gray-900 text-[22px]">
400 likes </span>
        </div>

            <div class="flex items-center gap-3">
                <span class="text-gray-900 text-[18px]">
                Bret </span>
            </div>
        <div class="flex items-center gap-3">
            
            <span class="text-gray-1000 text-[22px] line-clamp-1">${el.title}</span>
        </div>

        <div class="flex items-center gap-3">
            
            <span class="text-gray-700 line-clamp-2">${el.body}</span>
        </div>

         <div class="flex items-center gap-3">
            
            <span class="text-gray-700 ">View all 36 comments</span>
        </div>
        <div class="flex items-center gap-3">
            
            <span class="text-gray-700 ">
2 days ago</span>
        </div>


    </div>

</div>

        `;
    });
  }
};

//tugl
let sidebar = document.getElementById("default-sidebar");
let toggleBtn = document.getElementById("toggle-btn");
let toggleIcon = document.getElementById("toggle-icon");

let isOpen = false;

toggleBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    sidebar.classList.remove("-translate-x-full");
    sidebar.classList.add("translate-x-0");
  } else {
    sidebar.classList.add("-translate-x-full");
    sidebar.classList.remove("translate-x-0");
    toggleIcon.src = "./assets/image/tougle.svg";
  }
});
