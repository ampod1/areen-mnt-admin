import { useState } from "react";
import {
  FilterListItem,
  FilterList,
  useLocale,
  useTranslate,
} from "react-admin";
import { RiBuilding2Fill } from "react-icons/ri";
import {
  Card as MuiCard,
  CardContent,
  withStyles,
  Collapse,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
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
const RequestsFilters = ({
  cities,
  units,
  customers,
  requestsStatus,
}: {
  cities: any[];
  units: any[];
  customers: any[];
  requestsStatus: any[];
}) => {
  const lang = useLocale();
  const translate = useTranslate();

  const [isReqStatOpen, setIsReqStatOpen] = useState<boolean>(false);
  const [isCityOpen, setIsCityOpen] = useState<boolean>(false);
  const [isUnitNumberOpen, setIsUnitNumberOpen] = useState<boolean>(false);
  const [isCustomerNameOpen, setIsCustomerNameOpen] = useState<boolean>(false);

  return (
    <Card>
      <CardContent>
        {cities?.length > 0 && (
          <>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginBlock: "5px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              onClick={() => setIsCityOpen((prev) => !prev)}
            >
              <GiModernCity
                style={{ fontSize: "1.5em", marginInline: "5px" }}
              />
              <span
                style={{
                  marginInline: "5px",
                  fontSize: "1.1em",
                  fontWeight: 600,
                }}
              >
                {translate("custom_root.main.city")}
              </span>
              {isCityOpen ? (
                <ExpandLess style={{ marginInline: "5px" }} />
              ) : (
                <ExpandMore style={{ marginInline: "5px" }} />
              )}
            </button>
            <Collapse in={isCityOpen} timeout="auto" unmountOnExit>
              <FilterList label="" icon="">
                {cities.map((city: any) => (
                  <FilterListItem
                    key={city?.id}
                    label={city?.label[lang]}
                    value={{ city_id: city?.id }}
                  />
                ))}
              </FilterList>
            </Collapse>
          </>
        )}

        {requestsStatus?.length > 0 && (
          <>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginBlock: "5px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              onClick={() => setIsReqStatOpen((prev) => !prev)}
            >
              <RiBuilding2Fill
                style={{ fontSize: "1.5em", marginInline: "5px" }}
              />
              <span
                style={{
                  marginInline: "5px",
                  fontSize: "1.1em",
                  fontWeight: 600,
                }}
              >
                {translate("custom_root.main.request_status")}
              </span>
              {isReqStatOpen ? (
                <ExpandLess style={{ marginInline: "5px" }} />
              ) : (
                <ExpandMore style={{ marginInline: "5px" }} />
              )}
            </button>
            <Collapse in={isReqStatOpen} timeout="auto" unmountOnExit>
              <FilterList label="" icon="">
                {requestsStatus.map((requestsStat) => (
                  <FilterListItem
                    key={requestsStat?.id}
                    label={requestsStat?.label[lang]}
                    value={{ request_status_id: requestsStat?.id }}
                  />
                ))}
              </FilterList>
            </Collapse>
          </>
        )}

        {units?.length > 0 && (
          <>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginBlock: "5px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              onClick={() => setIsUnitNumberOpen((prev) => !prev)}
            >
              <RiBuilding2Fill
                style={{ fontSize: "1.5em", marginInline: "5px" }}
              />
              <span
                style={{
                  marginInline: "5px",
                  fontSize: "1.1em",
                  fontWeight: 600,
                }}
              >
                {translate("custom_root.main.unit_number")}
              </span>
              {isUnitNumberOpen ? (
                <ExpandLess style={{ marginInline: "5px" }} />
              ) : (
                <ExpandMore style={{ marginInline: "5px" }} />
              )}
            </button>
            <Collapse in={isUnitNumberOpen} timeout="auto" unmountOnExit>
              <FilterList label="" icon="">
                {units.map((unit) => (
                  <FilterListItem
                    key={unit?.id}
                    label={unit?.unit_number}
                    value={{ unit_id: unit?.id }}
                  />
                ))}
              </FilterList>
            </Collapse>
          </>
        )}
        {customers?.length > 0 && (
          <>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginBlock: "5px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              onClick={() => setIsCustomerNameOpen((prev) => !prev)}
            >
              <RiBuilding2Fill
                style={{ fontSize: "1.5em", marginInline: "5px" }}
              />
              <span
                style={{
                  marginInline: "5px",
                  fontSize: "1.1em",
                  fontWeight: 600,
                }}
              >
                {translate("custom_root.main.customer")}
              </span>
              {isCustomerNameOpen ? (
                <ExpandLess style={{ marginInline: "5px" }} />
              ) : (
                <ExpandMore style={{ marginInline: "5px" }} />
              )}
            </button>
            <Collapse in={isCustomerNameOpen} timeout="auto" unmountOnExit>
              <FilterList label="" icon="">
                {customers.map((customer) => (
                  <FilterListItem
                    key={customer?.id}
                    label={customer?.name?.full}
                    value={{ customer_id: customer?.id }}
                  />
                ))}
              </FilterList>
            </Collapse>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default RequestsFilters;
