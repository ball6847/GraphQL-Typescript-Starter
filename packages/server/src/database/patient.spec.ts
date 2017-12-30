import * as patient from "./patient";

describe("Patient Data", () => {
  it("saves the content", async () => {
    const patientList = await patient.getAllPatients();
    console.log("patient", patientList);
  });
});
