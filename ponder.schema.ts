import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  CohortBuilder: p.createTable({
    id: p.string(),
    amount: p.bigint(),
    cohortContractAddress: p.string(),
    ens: p.string().optional(),
  }),
}));
