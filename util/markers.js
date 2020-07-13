import people from "./people";

export const status = {
  COMPLETE: 2,
  IN_PROGRESS: 1,
  UPCOMING: 0,
};

export default {
  "Champions Gate, Florida": {
    dates: "Aug 1-29 2020",
    label: "August 2020",
    location: "Champions Gate, Florida",
    coordinates: [-81.6179, 28.2619],
    people: [
      people.Anubhav,
      people.Daysi,
      people.Eliza,
      people.Matt,
      people.Nikhil,
      people.Rianna,
      people.Sravya,
      people.Vargas,
    ],
    status: status.COMPLETE,
  },
  "Oak Park, Michigan": {
    dates: "Aug 29 - Sep 26 2020",
    label: "September 2020",
    location: "Oak Park, Michigan",
    coordinates: [-83.1827, 42.4595],
    people: [
      people.Ben,
      people.Danny,
      people.Nikhil,
      people.Parth,
      people.Vargas,
    ],
    status: status.IN_PROGRESS,
  },
  "Nashville, Tennessee": {
    dates: "Sep 26 - Nov 7 2020",
    label: "October 2020",
    location: "Nashville, Tennessee",
    coordinates: [-86.7816, 36.1627],
    people: [
      people.Daysi,
      people.Eliza,
      people.Kenny,
      people.Matt,
      people.Nikhil,
      people.Sowmya,
      people.Sravya,
      people.Vargas,
    ],
    status: status.UPCOMING,
  },
  "Savannah, Georgia": {
    dates: "Oct 24 - Nov 21 2020",
    label: "November 2020",
    location: "Savannah, Georgia",
    coordinates: [-81.0912, 32.0808],
    people: [
      people.Daysi,
      people.Eliza,
      people.Kenny,
      people.Matt,
      people.Nikhil,
      people.Sowmya,
      people.Sravya,
      people.Vargas,
    ],
    completed: false,
  },
};
