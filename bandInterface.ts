export interface Band {
    id: string;
    name: string;
    description: string;
    age: number;
    isActive: boolean;
    formationDate: string;
    imageUrl: string;
    genre: string;
    members: string[];
    recordLabel: {
      id: string;
      name: string;
      labelLogoUrl: string;
      foundedYear: number;
      founder: string;
      headquarters: string;
    };
  }
  
  const exampleBand: Band = {
    id: "BND-001",
    name: "Midnight Riders",
    description: "Midnight Riders are a legendary rock band known for their high-energy performances and timeless hits that have defined rock music for decades.",
    age: 45,
    isActive: true,
    formationDate: "1979-05-12",
    imageUrl: "https://example.com/images/bands/midnight-riders.jpg",
    genre: "Rock",
    members: ["Johnny Blaze", "Samantha Steel", "Tommy Thunder", "Billy Bolt"],
    recordLabel: {
      id: "LABEL-201",
      name: "Rebel Records",
      labelLogoUrl: "https://example.com/images/labels/rebel-records-logo.jpg",
      foundedYear: 1965,
      founder: "Jack Maverick",
      headquarters: "Nashville, Tennessee"
    }
  };
  