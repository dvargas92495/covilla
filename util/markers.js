import articles from "./articles";
import videos from "./videos";
import moment from "moment";
import people from "./people";

export const status = {
  COMPLETE: 2,
  IN_PROGRESS: 1,
  UPCOMING: 0,
};

export default {
  "Davenport, Florida": {
    dates: "Aug 1-29 2020",
    label: "August 2020",
    location: "Davenport, Florida",
    coordinates: [-81.6179, 28.2619],
    people: [
      people.Daysi,
      people.Eliza,
      people.Matt,
      people.Nikhil,
      people.Sravya,
      people.Vargas,
    ],
    articles: articles.filter(a => moment(a.date).isBefore(moment('08/30/2020', 'MM/DD/YYYY'))),
    videos: videos.filter(a => moment(a.date).isBefore(moment('08/30/2020', 'MM/DD/YYYY'))),
    isCurrent: true,
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
    articles: [],
    videos: [],
    isCurrent: false,
  },
  "Gatlinburg, Tennessee": {
    dates: "Sep 26 - Nov 7 2020",
    label: "October 2020",
    location: "Gatlinburg, Tennessee",
    coordinates: [-83.5102, 35.7143],
    people: [
      people.Abigail,
      people.Anna,
      people.Daysi,
      people.Diann,
      people.Eliza,
      people.Erica,
      people.Kenny,
      people.Matt,
      people.Nikhil,
      people.Sowmya,
      people.Sravya,
      people.Summer,
      people.Tayherr,
      people.Vargas,
    ],
    articles: [],
    videos: [],
    status: status.UPCOMING,
  },
  /*
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
    content: [],
    completed: false,
  },
  */
};
