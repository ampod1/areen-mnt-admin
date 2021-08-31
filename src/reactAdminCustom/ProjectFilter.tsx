import { FilterListItem, FilterList, useLocale } from "react-admin";
import { RiBuilding2Fill } from "react-icons/ri";
import { Card as MuiCard, CardContent, withStyles } from "@material-ui/core";
import { GiModernCity } from "react-icons/gi";

const Card = withStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      order: -1, // display on the left rather than on the right of the list
      width: "16em",
      marginRight: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}))(MuiCard);
const ProjectFilterList = ({
  projects,
  cities,
}: {
  projects: any[];
  cities: any[];
}) => {
  console.log(cities);
  const lang = useLocale();
  return (
    <Card>
      <CardContent>
        {projects?.length > 0 && (
          <FilterList
            label="Filter By Project Name"
            icon={<RiBuilding2Fill style={{ fontSize: "1.5em" }} />}
          >
            {projects.map((project) => (
              <FilterListItem
                key={project.id}
                label={project.label[lang]}
                value={{ project_id: project.id }}
              />
            ))}
          </FilterList>
        )}

        {cities?.length > 0 && (
          <FilterList
            label="Filter By City Name"
            icon={<GiModernCity style={{ fontSize: "1.5em" }} />}
          >
            {cities.map((city) => (
              <FilterListItem
                key={city.id}
                label={city.label[lang]}
                value={{ city_id: city.id }}
              />
            ))}
          </FilterList>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectFilterList;
