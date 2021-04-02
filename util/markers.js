import articles from "./articles";
import haikus from "./haikus";
import people from "./people";
import podcasts from "./podcasts";
import videos from "./videos";
import { dateOf } from "./helpers";

export default [
  {
    start_date: "08/01/2020",
    end_date: "08/28/2020",
    label: "Aug '20",
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
    articles: articles.filter((a) =>
      dateOf(a.date).isBefore(dateOf("08/30/2020"))
    ),
    haikus: haikus.filter((a) => dateOf(a.date).isBefore(dateOf("08/30/2020"))),
    videos: videos.filter((a) => dateOf(a.date).isBefore(dateOf("08/30/2020"))),
    podcasts: podcasts.filter((a) =>
      dateOf(a.date).isBefore(dateOf("08/30/2020"))
    ),
  },
  {
    start_date: "08/28/2020",
    end_date: "09/26/2020",
    label: "Sep '20",
    location: "Oak Park, Michigan",
    coordinates: [-83.1827, 42.4595],
    people: [
      people.Ben,
      people.Danny,
      people.Nikhil,
      people.Parth,
      people.Vargas,
    ],
    articles: articles.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("08/30/2020")) &&
        dateOf(a.date).isBefore(dateOf("09/27/2020"))
    ),
    haikus: haikus.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("08/30/2020")) &&
        dateOf(a.date).isBefore(dateOf("09/27/2020"))
    ),
    videos: videos.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("08/30/2020")) &&
        dateOf(a.date).isBefore(dateOf("09/27/2020"))
    ),
    podcasts: podcasts.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("08/30/2020")) &&
        dateOf(a.date).isBefore(dateOf("09/27/2020"))
    ),
  },
  {
    start_date: "09/26/2020",
    end_date: "11/07/2020",
    label: "Oct '20",
    location: "Gatlinburg, Tennessee",
    coordinates: [-83.5102, 35.7143],
    people: [
      people.Abbey,
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
    articles: articles.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("09/27/2020")) &&
        dateOf(a.date).isBefore(dateOf("11/08/2020"))
    ),
    haikus: haikus.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("09/27/2020")) &&
        dateOf(a.date).isBefore(dateOf("11/08/2020"))
    ),
    videos: videos.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("09/27/2020")) &&
        dateOf(a.date).isBefore(dateOf("11/08/2020"))
    ),
    podcasts: podcasts.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("09/27/2020")) &&
        dateOf(a.date).isBefore(dateOf("11/08/2020"))
    ),
  },
  {
    start_date: "11/07/2020",
    end_date: "11/23/2020",
    label: "Nov '20",
    location: "Raleigh, North Carolina",
    coordinates: [-78.7851, 35.8436],
    people: [people.Colin, people.Kenny, people.Nikhil, people.Vargas],
    articles: articles.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("11/08/2020")) &&
        dateOf(a.date).isBefore(dateOf("11/24/2020"))
    ),
    haikus: haikus.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("11/08/2020")) &&
        dateOf(a.date).isBefore(dateOf("11/24/2020"))
    ),
    videos: videos.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("11/08/2020")) &&
        dateOf(a.date).isBefore(dateOf("11/24/2020"))
    ),
    podcasts: podcasts.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("11/08/2020")) &&
        dateOf(a.date).isBefore(dateOf("11/24/2020"))
    ),
  },
  {
    start_date: "11/29/2020",
    end_date: "12/20/2020",
    label: "Dec '20",
    location: "San Diego, California",
    coordinates: [-117.13378, 32.715832],
    people: [
      people.Ameet,
      people.Christina,
      people.DannyV,
      people.Daysi,
      people.Jeff,
      people.Nikhil,
      people.Phil,
      people.Sravya,
      people.Vargas,
      people.Vinny
    ],
    articles: articles.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("11/24/2020")) &&
        dateOf(a.date).isBefore(dateOf("12/21/2020"))
    ),
    haikus: haikus.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("11/24/2020")) &&
        dateOf(a.date).isBefore(dateOf("12/21/2020"))
    ),
    videos: videos.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("11/24/2020")) &&
        dateOf(a.date).isBefore(dateOf("12/21/2020"))
    ),
    podcasts: podcasts.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("11/24/2020")) &&
        dateOf(a.date).isBefore(dateOf("12/21/2020"))
    ),
  },
  {
    start_date: "01/09/2021",
    end_date: "02/06/2021",
    label: "Jan '21",
    location: "Stanleytown, Virginia",
    coordinates: [-79.946667, 36.734722],
    people: [
      people.Amir,
      people.Anna,
      people.Anubhav,
      people.Chandler,
      people.Daysi,
      people.Diann,
      people.Eliza,
      people.Joel,
      people.Kenny,
      people.Matt,
      people.Nikhil,
      people.Rianna,
      people.Sravya,
      people.Tayherr,
      people.Ubez,
      people.Vargas,
    ],
    articles: articles.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("01/10/2021")) &&
        dateOf(a.date).isBefore(dateOf("02/07/2021"))
    ),
    haikus: haikus.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("01/10/2021")) &&
        dateOf(a.date).isBefore(dateOf("02/07/2021"))
    ),
    videos: videos.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("01/10/2021")) &&
        dateOf(a.date).isBefore(dateOf("02/07/2021"))
    ),
    podcasts: podcasts.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("01/10/2021")) &&
        dateOf(a.date).isBefore(dateOf("02/07/2021"))
    ),
  },
  {
    start_date: "02/07/2021",
    end_date: "03/07/2021",
    label: "Feb '21",
    location: "Austin, Texas",
    coordinates: [-97.7219696, 30.2798459],
    people: [
      people.Abbey,
      people.Ameet,
      people.Daysi,
      people.Diann,
      people.Eliza,
      people.Jacob,
      people.LeAnn,
      people.Kenny,
      people.Matt,
      people.Nikhil,
      people.Sravya,
      people.Tayherr,
      people.Ubez,
      people.Vargas,
      people.Vinny
    ],
    articles: articles.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("02/08/2021")) &&
        dateOf(a.date).isBefore(dateOf("03/08/2021"))
    ),
    haikus: haikus.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("02/08/2021")) &&
        dateOf(a.date).isBefore(dateOf("03/08/2021"))
    ),
    videos: videos.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("02/08/2021")) &&
        dateOf(a.date).isBefore(dateOf("03/08/2021"))
    ),
    podcasts: podcasts.filter(
      (a) =>
        !dateOf(a.date).isBefore(dateOf("02/08/2021")) &&
        dateOf(a.date).isBefore(dateOf("03/08/2021"))
    ),
  },
  {
    start_date: "03/07/2021",
    end_date: "04/03/2021",
    label: "Mar '21",
    location: "New Orleans, Louisiana",
    coordinates: [-90.0738179, 29.9758633],
    people: [
      people.Anthony,
      people.Anubhav,
      people.Daysi,
      people.Diann,
      people.Eliza,
      people.Kenny,
      people.KennyD,
      people.Matt,
      people.Nikhil,
      people.Rajeev,
      people.Rianna,
      people.Sravya,
      people.Tayherr,
      people.Ubez,
      people.Vargas,
      people.Vihar,
      people.Vinny
    ],
    articles: articles.filter(a => !dateOf(a.date).isBefore(dateOf('03/08/2021')) && dateOf(a.date).isBefore(dateOf('04/04/2021'))),
    haikus: haikus.filter(a => !dateOf(a.date).isBefore(dateOf('03/08/2021')) && dateOf(a.date).isBefore(dateOf('04/04/2021'))),
    videos: videos.filter(a => !dateOf(a.date).isBefore(dateOf('03/08/2021')) && dateOf(a.date).isBefore(dateOf('04/04/2021'))),
    podcasts: podcasts.filter(a => !dateOf(a.date).isBefore(dateOf('03/08/2021')) && dateOf(a.date).isBefore(dateOf('04/04/2021')))
  },
  {
    start_date: "04/04/2021",
    end_date: "04/10/2021",
    label: "Apr '21",
    location: "Breckenridge, Colorado",
    coordinates: [-106.0417115, 39.5213447],
    people: [
      people.Akhil,
      people.Aldair,
      people.Claman,
      people.Diann,
      people.Eliza,
      people.Justin,
      people.Matt,
      people.Nikhil,
      people.Sravya,
      people.Tayherr,
      people.Ubez,
      people.Vargas
    ],
    articles: articles.filter(a => !dateOf(a.date).isBefore(dateOf('04/05/2021')) && dateOf(a.date).isBefore(dateOf('04/11/2021'))),
    haikus: haikus.filter(a => !dateOf(a.date).isBefore(dateOf('04/05/2021')) && dateOf(a.date).isBefore(dateOf('04/11/2021'))),
    videos: videos.filter(a => !dateOf(a.date).isBefore(dateOf('04/05/2021')) && dateOf(a.date).isBefore(dateOf('04/11/2021'))),
    podcasts: podcasts.filter(a => !dateOf(a.date).isBefore(dateOf('04/05/2021')) && dateOf(a.date).isBefore(dateOf('04/11/2021')))
  },
  {
    start_date: "04/10/2021",
    end_date: "05/09/2021",
    label: "Apr '21",
    location: "Denver, Colorado",
    coordinates: [-105.0440352, 39.7373205],
    people: [
      people.Akhil,
      people.Alisha,
      people.Daysi,
      people.Diann,
      people.Eliza,
      people.Matt,
      people.Nikhil,
      people.Sravya,
      people.Tayherr,
      people.Ubez,
      people.Vargas
    ],
    articles: articles.filter(a => !dateOf(a.date).isBefore(dateOf('04/11/2021')) && dateOf(a.date).isBefore(dateOf('05/10/2021'))),
    haikus: haikus.filter(a => !dateOf(a.date).isBefore(dateOf('04/11/2021')) && dateOf(a.date).isBefore(dateOf('05/10/2021'))),
    videos: videos.filter(a => !dateOf(a.date).isBefore(dateOf('04/11/2021')) && dateOf(a.date).isBefore(dateOf('05/10/2021'))),
    podcasts: podcasts.filter(a => !dateOf(a.date).isBefore(dateOf('04/11/2021')) && dateOf(a.date).isBefore(dateOf('05/10/2021')))
  },
  {
    start_date: "05/09/2021",
    end_date: "06/06/2021",
    label: "May '21",
    location: "Salt Lake City, Utah",
    coordinates: [-111.794130, 40.600850],
    people: [
      people.Daysi,
      people.Diann,
      people.Kenny,
      people.Matt,
      people.Nikhil,
      people.Sravya,
      people.Tayherr,
      people.Ubez,
      people.Vargas
    ],
    articles: articles.filter(a => !dateOf(a.date).isBefore(dateOf('05/10/2021')) && dateOf(a.date).isBefore(dateOf('06/07/2021'))),
    haikus: haikus.filter(a => !dateOf(a.date).isBefore(dateOf('05/10/2021')) && dateOf(a.date).isBefore(dateOf('06/07/2021'))),
    videos: videos.filter(a => !dateOf(a.date).isBefore(dateOf('05/10/2021')) && dateOf(a.date).isBefore(dateOf('06/07/2021'))),
    podcasts: podcasts.filter(a => !dateOf(a.date).isBefore(dateOf('05/10/2021')) && dateOf(a.date).isBefore(dateOf('06/07/2021')))
  }
]
