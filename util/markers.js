import articles from "./articles";
import videos from "./videos";
import people from "./people";
import { dateOf } from "./helpers";

export default {
  "Davenport, Florida": {
    start_date: "08/01/2020",
    end_date: "08/28/2020",
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
    articles: articles.filter(a => dateOf(a.date).isBefore(dateOf('08/30/2020'))),
    videos: videos.filter(a => dateOf(a.date).isBefore(dateOf('08/30/2020')))
  },
  "Oak Park, Michigan": {
    start_date: "08/28/2020",
    end_date: "09/26/2020",
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
    videos: []
  },
  "Gatlinburg, Tennessee": {
    start_date: "09/26/2020",
    end_date: "11/07/2020",
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
    videos: []
  }
};
