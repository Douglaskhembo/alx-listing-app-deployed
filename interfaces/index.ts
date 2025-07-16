export interface CardProps {
  title: string;
  image: string;
  description: string;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export interface PropertyProps {
  id: string;
  name: string;
  description: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}


export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "prop-001",
    name: "Villa Ocean Breeze",
    description: "A serene villa with ocean views, perfect for a luxurious getaway.",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://example.com/image1.jpg",
    discount: ""
  },
  {
    id: "prop-002",
    name: "Mountain Escape Chalet",
    description: "A cozy mountain chalet nestled in the Aspen wilderness.",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://example.com/image2.jpg",
    discount: "30"
  },
  {
    id: "prop-003",
    name: "Cozy Desert Retreat",
    description: "Experience tranquility in the heart of the desert.",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://example.com/image3.jpg",
    discount: ""
  },
];
