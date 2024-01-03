import { createConfig } from "@ponder/core";
import { http } from "viem";

import { CohortContractAbi } from "./abis/CohortContractAbi";

export default createConfig({
  networks: {
    mainnet: { chainId: 1, transport: http(process.env.PONDER_RPC_URL_1) },
  },
  contracts: {
    CohortContract: {
      abi: CohortContractAbi,
      // This can be multiple addresses []
      address: "0x2Be18e07C7be0a2CC408C9E02C90203B2052D7DE",
      network: "mainnet",
      startBlock: 16992407,
    },
  },
});
