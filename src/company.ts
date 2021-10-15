import faker from "faker";

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent: string;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.markerContent = `
                        <div>
                          <h1>Company Name: ${this.name}</h1>
                          <h3>Catch Phrase: ${this.catchPhrase}</h3>
                        </div>
                        `;
  }
}