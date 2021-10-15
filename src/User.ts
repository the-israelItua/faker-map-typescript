import faker from "faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent: string;

  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.markerContent = `${this.name}`;
  }
}
