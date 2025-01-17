export const SelectBudget = [
  {
    id: 1,
    title: "Low",
    description: "A less to invest get more",
    icon: "/cheap.svg",
    people:'1'
  },
  {
    id: 2,
    title: "Moderate",
    description: "A medium to invest get more",
    icon: "/moderate.svg",
    people:'2'
  },
  {
    id: 3,
    title: "High",
    description: "A high to invest get more",
    icon: "/high.svg",
    people:'3 to 5'
  }
];

export const SelectTravelList = [
  {
    id: 1,
    title: "Just Me",
    description: "A sole traveles in exploration",
    icon: "/solo.svg",
    
  },
  {
    id:2,
    title: "Friends",
    description: "A group of friends in exploration",
    icon: "/friends.svg",
  },
  {
    id:3,
    title: "Family",
    description: "A family in exploration",
    icon: "/family.svg",
  },
  {
    id:4,
    title: "Group",
    description: "A group of people in exploration",
    icon: "/group.svg",

  },
  {
    id: 5,
    title: "Couple",
    description: "A couple in exploration",
    icon: "/couple.svg",
    
  }
];

export const AI_PROMPT = `Generate Travel Plan for Location: {location}, for {noOfDays} Days for {travel} with a Cheap {budget}, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for {noOfDays} days with each day plan with best time to visit in JSON format.`;