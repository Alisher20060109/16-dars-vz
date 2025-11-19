let feedCart = document.getElementById("feed-cart");
let request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/users");

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
                ${el.name[0]}
            </div>
            <div class="flex flex-col">
                <h1 class="font-semibold">${el.name}</h1>
                <h1 class="text-gray-600">@${el.username}</h1>
            </div>
        </div>
        <div>...</div>
    </div>

    <img class="w-full"
        src="https://images.unsplash.com/photo-1623113758911-db913c487b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        alt="">

    <div class="p-4 space-y-2">

        <div class="flex items-center gap-3">
            <img class="w-4" src="./assets/image/envelope.svg" alt="">
            <span class="text-gray-700">${el.email}</span>
        </div>

        <div class="flex items-center gap-3">
            <img class="w-4" src="./assets/image/phone-call.svg" alt="">
            <span class="text-gray-700">${el.phone}</span>
        </div>

        <div class="flex items-center gap-3">
            <img class="w-4" src="./assets/image/globe.svg" alt="">
            <span class="text-gray-700">${el.website}</span>
        </div>

        <div class="flex items-center gap-3">
            <img class="w-4" src="./assets/image/marker.svg" alt="">
            <span class="text-gray-700">${el.address.city}</span>
        </div>

        <div class="flex items-center gap-3">
            <img class="w-4" src="./assets/image/building.svg" alt="">
            <span class="text-gray-700">${el.company.name}</span>
        </div>

        <div class="bg-indigo-100 text-indigo-500 p-3 rounded-md">
            “${el.company.catchPhrase}”
        </div>

        <div class="flex justify-between items-center">
            <button class="bg-black text-white w-full h-[45px] py-3 rounded-lg">
                View Profile
            </button>

            <button class="ml-2 w-10 h-10 rounded-lg border cursor-pointer border-gray-300 flex justify-center items-center">
                <img class="w-3" src="./assets/image/beacon.svg" alt="">
            </button>
        </div>

    </div>

</div>

        `;
    });
  }
};

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
