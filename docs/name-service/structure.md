---
id: structure
title: Folder Structure
sidebar_label: Folder Structure
---

The files structure that you generated using the previous command will look like:

```
.
├── .cargo
│   └── config
├── .circleci
│   └── config.yml
├── Cargo.lock
├── Cargo.toml
├── Developing.md
├── Importing.md
├── LICENSE
├── NOTICE
├── Publishing.md
├── README.md
├── examples
│   └── schema.rs
├── rustfmt.toml
├── schema
│   ├── count_response.json
│   ├── handle_msg.json
│   ├── init_msg.json
│   ├── query_msg.json
│   └── state.json
├── src
│   ├── contract.rs
│   ├── lib.rs
│   ├── msg.rs
│   └── state.rs
└── tests
    └── integration.rs
```

We will breakdown the `examples`, `schema` and `src` folders.

- `Examples`: This directory holds your `schema.rs` file. In this file the smart contracts handle, query, init and responses will be imported for generation of json files. These json files are not currently used outside of visualizing the data of the smart contract, but in the future this will be used for clients and abi specs.

- `Schema`: This will is auto generated json files from the `schema.rs` folder

- `Src`: The source folder is where the smart contract lives. This is broken down into 5 files, but you have the option to add more, based on your needs.

  - `contract.rs`: Within this file, the business logic is defined. Your handle and query functions will also be defined here.
  - `lib.rs`: This is the main file that will import all of your other files. In most cases there will only be a need to add `pub mod <crate>` to the top of the file.
  - `msg.rs`: This is where the smart contracts defines its `msg` and `response` types.

    - `InitMsg`: This is the initialization message that will instantiate a contract for use.
    - `HandleMsg`: This type is defined as a enum of messages that will handle all your state transition needs.
    - `QueryMsg`: This type is also an enum of possible queries that can be used within the contract.

    > Note: These will be your main types that every contract will have. Depending on the needs of the contract you may define responses to queries in this file as well.

  - `state.rs`: This is where you defined your state and how to interact with it. We will cover more details in a later section.

We will cover all of these files more in depth in the next sections.
