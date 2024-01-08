import { ponder } from "@/generated";
import { formatEther } from "viem";

ponder.on("CohortContract:AddBuilder", async ({ event, context }) => {
  const { db } = context;

  await db.CohortBuilder.create({
    // Builders can be in multiple cohorts, so we need to use a composite key.
    // Adding block number since "addBuilder" can be called multiple times with the same builder.
    id: `${event.args.to}-${event.log.address}-${event.block.number}`,
    data: {
      amount: parseFloat(formatEther(event.args.amount)),
      cohortContractAddress: event.log.address,
      // ToDo. ens.
    }
  });
});

ponder.on("CohortContract:Withdraw", async ({ event, context }) => {
  const { db } = context;

  await db.CohortWithdrawal.create({
    id: `${event.args.to}-${event.log.address}-${event.block.number}`,
    data: {
      builder: event.args.to,
      amount: parseFloat(formatEther(event.args.amount)),
      cohortContractAddress: event.log.address,
      reason: event.args.reason,
      timestamp: event.block.timestamp,
    }
  });
});
