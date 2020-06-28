import PageLayout from "../components/PageLayout";
// import Typography from "@material-ui/core/Typography";
import MapChart from "../components/MapChart"

export default function Home() {
  return (
    <PageLayout>
      {/* <Typography variant="body1">
        We are a community of nomads traveling month-to-month to different
        cities around the world
      </Typography> */}
      <MapChart />
    </PageLayout>
  );
}
