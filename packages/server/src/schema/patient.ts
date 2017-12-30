import * as uuidv1 from "uuid/v1";

import * as patient from "../database/patient";

export const typeDefs = `
  type Patient {
    id: ID!
    name: String!
    address: String!
    age: Int!
  }

  type Query {
    allPatients: [Patient!]!
  }

  type Mutation {
    createPatient(name: String!, address: String!, age: Int!): Patient
    deletePatient(id: String!): String
  }
`;

export const resolvers = {
  Query: {
    allPatients: () => patient.getAllPatients()
  },
  Mutation: {
    createPatient: (_, data) => {
      const newPatient = Object.assign({ id: uuidv1() }, data);
      patient.createPatient(newPatient);
      return newPatient;
    },
    deletePatient: (_, data) => {
      patient.deletePatient(data.id);
      return "SUCCESS";
    }
  }
};
