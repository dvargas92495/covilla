import articles from "./articles";
import haikus from "./haikus";
import people from "./people";
import podcasts from "./podcasts";
import videos from "./videos";
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
    haikus: haikus.filter(a => dateOf(a.date).isBefore(dateOf('08/30/2020'))),
    videos: videos.filter(a => dateOf(a.date).isBefore(dateOf('08/30/2020'))),
    podcasts: podcasts.filter(a => dateOf(a.date).isBefore(dateOf('08/30/2020')))
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
    articles: articles.filter(a => !dateOf(a.date).isBefore(dateOf('08/30/2020')) && dateOf(a.date).isBefore(dateOf('09/27/2020'))),
    haikus: haikus.filter(a => !dateOf(a.date).isBefore(dateOf('08/30/2020')) && dateOf(a.date).isBefore(dateOf('09/27/2020'))),
    videos: videos.filter(a => !dateOf(a.date).isBefore(dateOf('08/30/2020')) && dateOf(a.date).isBefore(dateOf('09/27/2020'))),
    podcasts: podcasts.filter(a => !dateOf(a.date).isBefore(dateOf('08/30/2020')) && dateOf(a.date).isBefore(dateOf('09/27/2020')))
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
      people.Colin,
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
      people.Trinh,
      people.Vargas,
    ],
    articles: articles.filter(a => !dateOf(a.date).isBefore(dateOf('09/27/2020')) && dateOf(a.date).isBefore(dateOf('11/08/2020'))),
    haikus: haikus.filter(a => !dateOf(a.date).isBefore(dateOf('09/27/2020')) && dateOf(a.date).isBefore(dateOf('11/08/2020'))),
    videos: videos.filter(a => !dateOf(a.date).isBefore(dateOf('09/27/2020')) && dateOf(a.date).isBefore(dateOf('11/08/2020'))),
    podcasts: podcasts.filter(a => !dateOf(a.date).isBefore(dateOf('09/27/2020')) && dateOf(a.date).isBefore(dateOf('11/08/2020')))
  },
  "Raleigh, North Carolina": {
    start_date: "11/07/2020",
    end_date: "11/23/2020",
    label: "November 2020",
    location: "Raleigh, North Carolina",
    coordinates: [-78.7851, 35.8436],
    people: [
      people.Colin,
      people.Kenny,
      people.Nikhil,
      people.Vargas,
    ],
    articles: articles.filter(a => !dateOf(a.date).isBefore(dateOf('11/08/2020')) && dateOf(a.date).isBefore(dateOf('11/24/2020'))),
    haikus: haikus.filter(a => !dateOf(a.date).isBefore(dateOf('11/08/2020')) && dateOf(a.date).isBefore(dateOf('11/24/2020'))),
    videos: videos.filter(a => !dateOf(a.date).isBefore(dateOf('11/08/2020')) && dateOf(a.date).isBefore(dateOf('11/24/2020'))),
    podcasts: podcasts.filter(a => !dateOf(a.date).isBefore(dateOf('11/08/2020')) && dateOf(a.date).isBefore(dateOf('11/24/2020')))
  },
  "San Diego, California": {
    start_date: "11/29/2020",
    end_date: "12/20/2020",
    label: "December 2020",
    location: "San Diego, California",
    coordinates: [-117.13378, 32.715832 ],
    people: [
      people.Alisha,
      people.Ameet,
      people.DannyV,
      people.Daysi,
      people.Nikhil,
      people.Sravya,
      people.Vargas,
    ],
    articles: articles.filter(a => !dateOf(a.date).isBefore(dateOf('11/24/2020')) && dateOf(a.date).isBefore(dateOf('12/21/2020'))),
    haikus: haikus.filter(a => !dateOf(a.date).isBefore(dateOf('11/24/2020')) && dateOf(a.date).isBefore(dateOf('12/21/2020'))),
    videos: videos.filter(a => !dateOf(a.date).isBefore(dateOf('11/24/2020')) && dateOf(a.date).isBefore(dateOf('12/21/2020'))),
    podcasts: podcasts.filter(a => !dateOf(a.date).isBefore(dateOf('11/24/2020')) && dateOf(a.date).isBefore(dateOf('12/21/2020')))
  }
};
