// Sample tour guide data (replace with real data from backend if available)
// Sample tour guide data (replace with real data from backend if available)
function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("hidden");
}
const tourGuides = [
    {
      name: "John Doe",
      location: "New York",
      image: "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
      languages: ["English", "Spanish"],
      hourlyRate: 25
    },
    {
      name: "Jane Smith",
      location: "Paris",
      image: "https://indianwomennetwork.com/wp-content/uploads/2022/02/slider-women-final-1.png",
      languages: ["French", "English"],
      hourlyRate: 30
    },
    {
      name: "Michael Johnson",
      location: "Tokyo",
      image: "https://m.media-amazon.com/images/M/MV5BMjYyZmI4NGYtYzUyZS00MTVjLThmZjEtNGM2MGVjY2QwYTkwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
      languages: ["Japanese", "English"],
      hourlyRate: 28
    },
    {
      name: "Sophia Lee",
      location: "Seoul",
      image: "https://hips.hearstapps.com/rover/profile_photos/67055711-c808-4a4d-811a-e7155a2bce10_1667409691.file",
      languages: ["Korean", "English"],
      hourlyRate: 26
    },
    {
      name: "Alex Ramirez",
      location: "Barcelona",
      image: "https://media.gettyimages.com/id/1314489757/fr/photo/smiling-hispanic-man-against-white-background.jpg?s=612x612&w=gi&k=20&c=bH6LQ1NqBgBkrPJUaiRNSVheODv7cwSWrYb6UvyZbfk=",
      languages: ["Spanish", "English"],
      hourlyRate: 27
    },
    {
      name: "Emma Anderson",
      location: "London",
      image: "https://wbecanada.ca/wp-content/uploads/2023/02/Pathfinder-Diverse-Women-Business-Owner.jpg",
      languages: ["English", "French"],
      hourlyRate: 29
    },
    {
      name: "Hiroshi Tanaka",
      location: "Osaka",
      image: "https://thefashionfrill.com/wp-content/uploads/2022/11/Korean-Male-Fashion-Influencers-you-need-to-follow-right-now.jpg",
      languages: ["Japanese", "English"],
      hourlyRate: 31
    },
    {
      name: "Isabella Rossi",
      location: "Rome",
      image: "https://i.insider.com/642bbdfed335200018dd7ffd?width=1136&format=jpeg",
      languages: ["Italian", "English"],
      hourlyRate: 32
    },
    {
      name: "Carlos Fernandez",
      location: "Madrid",
      image: "https://www.apetogentleman.com/wp-content/uploads/2020/06/best-shirts-men.jpg",
      languages: ["Spanish", "English"],
      hourlyRate: 28
    },
    {
      name: "Olivia Müller",
      location: "Berlin",
      image: "https://m.media-amazon.com/images/M/MV5BMDNjMDY0OTctZDBjYi00OGI3LThhYjMtZWI5ZDU2OTJkYTNiXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
      languages: ["German", "English"],
      hourlyRate: 27
    },
  // Add more previous tour guides (retain the previous 17)
  // Additional tour guides (10 new ones)
  {
    name: "Elena Gomez",
    location: "Barcelona",
    image: "https://www.jockey.in/athleisure/images/t-shirts-women.jpg",
    languages: ["Spanish", "English"],
    hourlyRate: 27
  },
  {
    name: "Sven Bjornsson",
    location: "Reykjavik",
    image: "https://kao-h.assetsadobe3.com/is/image/content/dam/sites/kaousa/www-goldwell-com/content/master/image/initiatives_men/image-men-service-techniques-02.jpg?fmt=jpeg&qlt=85&wid=1024",
    languages: ["Icelandic", "English"],
    hourlyRate: 32
  },
  {
    name: "Alessia Rossi",
    location: "Florence",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhcn29goZhFH3hHwhTESU_DUuaj0zR8senw&usqp=CAU",
    languages: ["Italian", "English", "French"],
    hourlyRate: 33
  },
  {
    name: "Vladimir Petrov",
    location: "St. Petersburg",
    image: "https://menshaircuts.com/wp-content/uploads/2023/05/tp-long-hairstyles-for-men.jpg",
    languages: ["Russian", "English"],
    hourlyRate: 29
  },
  {
    name: "Ji-hoon Kim",
    location: "Seoul",
    image: "https://menshairstyletips.com/wp-content/uploads/2020/11/Korean-Men-Haircut.jpg",
    languages: ["Korean", "English"],
    hourlyRate: 28
  },
  {
    name: "Mariana Gonzalez",
    location: "Buenos Aires",
    image: "https://mendeserve.com/cdn/shop/files/Men_Deserve.png?v=1652614725",
    languages: ["Spanish", "English"],
    hourlyRate: 27
  },
  {
    name: "Muhammad Ali",
    location: "Cairo",
    image: "https://as1.ftcdn.net/v2/jpg/04/53/92/46/1000_F_453924603_r1oPrn7LUqQlOLpXSdRH8zwKUYb2O74B.jpg",
    languages: ["Arabic", "English"],
    hourlyRate: 30
  },
  {
    name: "Helena Müller",
    location: "Vienna",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo73y5s_NP0oSujr7FqIGeW6YQ1O4Yt4KZA&usqp=CAU",
    languages: ["German", "English"],
    hourlyRate: 29
  },
  {
    name: "Rahul Gupta",
    location: "Delhi",
    image: "https://netstorage-tuko.akamaized.net/images/90bf895b4d4588b6.png",
    languages: ["Hindi", "English"],
    hourlyRate: 26
  }
  ];
  
  // Rest of the code remains the same
  
  
  function createTourGuideCard(tourGuide) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const img = document.createElement("img");
    img.src = tourGuide.image;
    img.alt = tourGuide.name;
    card.appendChild(img);
  
    const name = document.createElement("h2");
    name.textContent = tourGuide.name;
    card.appendChild(name);
  
    const location = document.createElement("p");
    location.textContent = `Location: ${tourGuide.location}`;
    card.appendChild(location);
  
    const languages = document.createElement("p");
    languages.textContent = `Languages: ${tourGuide.languages.join(", ")}`;
    card.appendChild(languages);
  
    const hourlyRate = document.createElement("p");
    hourlyRate.textContent = `Hourly Rate: $${tourGuide.hourlyRate}`;
    card.appendChild(hourlyRate);
  
    const hireButton = document.createElement("button");
    hireButton.textContent = "Hire";
    hireButton.addEventListener("click", () => {
      // Implement the functionality to hire the tour guide
      // For now, let's display an alert as a placeholder
      alert(`You have hired ${tourGuide.name} as your tour guide!`);
    });
    card.appendChild(hireButton);
  
    return card;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const tourGuidesSection = document.getElementById("tourGuidesSection");
  
    tourGuides.forEach((tourGuide) => {
      const tourGuideCard = createTourGuideCard(tourGuide);
      tourGuidesSection.appendChild(tourGuideCard);
    });
  });
  function logout(){
    window.location.href = "../home/home2.html";
    alert('you are logging out')
  }