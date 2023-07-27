// Sample tour guide data (replace with real data from backend if available)
// Sample tour guide data (replace with real data from backend if available)
const tourGuides = [
    {
      name: "John Doe",
      location: "New York",
      image: "https://via.placeholder.com/150",
      languages: ["English", "Spanish"],
      hourlyRate: 25
    },
    {
      name: "Jane Smith",
      location: "Paris",
      image: "https://via.placeholder.com/150",
      languages: ["French", "English"],
      hourlyRate: 30
    },
    {
      name: "Michael Johnson",
      location: "Tokyo",
      image: "https://via.placeholder.com/150",
      languages: ["Japanese", "English"],
      hourlyRate: 28
    },
    {
      name: "Sophia Lee",
      location: "Seoul",
      image: "https://via.placeholder.com/150",
      languages: ["Korean", "English"],
      hourlyRate: 26
    },
    {
      name: "Alex Ramirez",
      location: "Barcelona",
      image: "https://via.placeholder.com/150",
      languages: ["Spanish", "English"],
      hourlyRate: 27
    },
    {
      name: "Emma Anderson",
      location: "London",
      image: "https://via.placeholder.com/150",
      languages: ["English", "French"],
      hourlyRate: 29
    },
    {
      name: "Hiroshi Tanaka",
      location: "Osaka",
      image: "https://via.placeholder.com/150",
      languages: ["Japanese", "English"],
      hourlyRate: 31
    },
    {
      name: "Isabella Rossi",
      location: "Rome",
      image: "https://via.placeholder.com/150",
      languages: ["Italian", "English"],
      hourlyRate: 32
    },
    {
      name: "Carlos Fernandez",
      location: "Madrid",
      image: "https://via.placeholder.com/150",
      languages: ["Spanish", "English"],
      hourlyRate: 28
    },
    {
      name: "Olivia Müller",
      location: "Berlin",
      image: "https://via.placeholder.com/150",
      languages: ["German", "English"],
      hourlyRate: 27
    },
  // Add more previous tour guides (retain the previous 17)
  // Additional tour guides (10 new ones)
  {
    name: "Elena Gomez",
    location: "Barcelona",
    image: "https://via.placeholder.com/150",
    languages: ["Spanish", "English"],
    hourlyRate: 27
  },
  {
    name: "Sven Bjornsson",
    location: "Reykjavik",
    image: "https://via.placeholder.com/150",
    languages: ["Icelandic", "English"],
    hourlyRate: 32
  },
  {
    name: "Alessia Rossi",
    location: "Florence",
    image: "https://via.placeholder.com/150",
    languages: ["Italian", "English", "French"],
    hourlyRate: 33
  },
  {
    name: "Vladimir Petrov",
    location: "St. Petersburg",
    image: "https://via.placeholder.com/150",
    languages: ["Russian", "English"],
    hourlyRate: 29
  },
  {
    name: "Ji-hoon Kim",
    location: "Seoul",
    image: "https://via.placeholder.com/150",
    languages: ["Korean", "English"],
    hourlyRate: 28
  },
  {
    name: "Mariana Gonzalez",
    location: "Buenos Aires",
    image: "https://via.placeholder.com/150",
    languages: ["Spanish", "English"],
    hourlyRate: 27
  },
  {
    name: "Muhammad Ali",
    location: "Cairo",
    image: "https://via.placeholder.com/150",
    languages: ["Arabic", "English"],
    hourlyRate: 30
  },
  {
    name: "Helena Müller",
    location: "Vienna",
    image: "https://via.placeholder.com/150",
    languages: ["German", "English"],
    hourlyRate: 29
  },
  {
    name: "Rahul Gupta",
    location: "Delhi",
    image: "https://via.placeholder.com/150",
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
  