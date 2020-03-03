---
id: msg
title: Messages
sidebar_label: Messages
---

Now we will define the msgs that are needed for our contract. If you open the `msg.rs` file, you will find 4 types that we talked about earlier: `InitMsg`, `HandleMsg`, `QueryResponse`.

### InitMsg

This are the Config parameters that we defined in the state file. These are our parameter's for the contract. This message will only be used once per contract, when its created.

We need to alter the `InitMsg` in order to match the config.

### HandleMsg

This will be an enum, if you are unclear on enums read more on them [here](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html), we will define the actions that our contract needs to execute its logic.

Currently there are two defined msgs `Increment` and `Reset`. For our contract we need to change these two msgs

- `Register`: which takes a name (String) as a parameter
- `Transfer`: which take a name (String) and recipient (HumanAddr) as parameters

### QueryMsg

This will also be a enum, it will take the queries that must defined for this contract. We want to query the `Config`, which will not take a parameter and a `ResolveRecord` which takes a name.

On top of `ResolveRecord` we need to add a response type. Create a `ResolveRecordResponse` struct which will have one value, an address which is a HumanAddr, a type defined in cosmwasm.

Before going to the next page take a few minutes to implement what is stated above. On the next page you will see the answers.
