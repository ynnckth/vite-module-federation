import { Customer } from "../types/Customer.ts";
import { faker } from "@faker-js/faker";

export const fetchCustomers = (): Promise<Customer[]> => {
  return Promise.resolve(
    faker.helpers.multiple(createRandomUser, { count: 5 })
  );
};

export const createRandomUser = (): Customer => ({
  id: faker.string.uuid(),
  fullName: faker.person.fullName(),
  address: faker.location.streetAddress(),
  email: faker.internet.email(),
  registeredAt: faker.date.past(),
});
