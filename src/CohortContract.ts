import { ponder } from "@/generated";

ponder.on("CohortContract:AddBuilder", async ({ event, context }) => {
  const { db, contracts } = context;

  await db.CohortBuilder.create({
    id: event.args.to,
    data: {
      amount: event.args.amount,
      cohortContractAddress: contracts.CohortContract.address,
      // ToDo. ens.
    }
  });
});
