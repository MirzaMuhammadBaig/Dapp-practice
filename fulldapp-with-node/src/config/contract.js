const addRecord = {
  contractAddress: "0x84909B60D048ad45BDC78ad230aB87419fa8081A",
  contractABI: [
    {
      anonymous: false,
      inputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "email",
          type: "string",
        },
        {
          internalType: "string",
          name: "cnic",
          type: "string",
        },
        {
          internalType: "string",
          name: "city",
          type: "string",
        },
      ],
      name: "AddPersonRecord",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_personID",
          type: "uint256",
        },
      ],
      name: "GetPersonRecord",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "Name",
              type: "string",
            },
            {
              internalType: "string",
              name: "Email",
              type: "string",
            },
            {
              internalType: "string",
              name: "CNIC",
              type: "string",
            },
            {
              internalType: "string",
              name: "City",
              type: "string",
            },
          ],
          internalType: "struct PersonRecord.Record",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "person",
      outputs: [
        {
          internalType: "string",
          name: "Name",
          type: "string",
        },
        {
          internalType: "string",
          name: "Email",
          type: "string",
        },
        {
          internalType: "string",
          name: "CNIC",
          type: "string",
        },
        {
          internalType: "string",
          name: "City",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "personCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
};

module.exports = addRecord;
