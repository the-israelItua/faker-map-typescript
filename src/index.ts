import { User } from "./User";
import { Company } from "./company";
import { Map } from "./Map";

const user = new User();

const company = new Company();

const map = new Map("maps");

map.addMarker(user);

map.addMarker(company);
