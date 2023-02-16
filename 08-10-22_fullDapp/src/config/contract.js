const addRecord = {
  contractAddress: "0xf43488C44545418DE1d2Ad1941Fed5fd0F790e9D",
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
