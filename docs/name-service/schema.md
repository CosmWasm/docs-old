---
id: schema
title: Schema
sidebar_label: Schema
---

Now we are on the final step before we can build the contract.These generated json files are currently only used for visualizing what the types are for the contract. In the future these will be used for clients. The `schema.rs` file will import the msg types you defined earlier.

Go to the `schema.rs` file and there you will see a few things defined.

A main function, that uses some message types. We need to make some changes in order to make it work with our contract.

First remove the `state.json` mention as we will not define json for out state. Then we must generate json for the `ResolveRecordResponse` type. To do this we must first import the correct type then exchange it for the `CountResponse`.


The body of your main function should look like so:

```rust

let schema = schema_for!(InitMsg);
export_schema(&schema, &pwd, "init_msg.json");

let schema = schema_for!(HandleMsg);
export_schema(&schema, &pwd, "handle_msg.json");

let schema = schema_for!(QueryMsg);
export_schema(&schema, &pwd, "query_msg.json");

let schema = schema_for!(ResolveRecordResponse);
export_schema(&schema, &pwd, "resolve_record_response.json")
```

Now you are able to build out the smart contracts. Do this by typing `cargo build` in your terminal.

Coming soon is the interaction with smart contract using (cosmwams-js)[https://github.com/confio/cosmwasm-js].
