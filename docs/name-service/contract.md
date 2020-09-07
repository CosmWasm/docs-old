---
id: contract
title: Contract
sidebar_label: Contract
---

Now we have made it to the point at which we will be working on the core logic of the contract. If you navigate to the contract file there will be a basic contract already defined.

We will walk through the file one by one.

## Init

Init defines what is needed for initialization of the contract. This means that every contract is deployed once and created multiples time.

Earlier we defined a `InitMsg` this is what will be used within `Init`. 

## Handle

Handle uses the `HandleMsg` we defined in `msg.rs`. In rust there is [pattern matching](https://doc.rust-lang.org/1.6.0/book/patterns.html) which will help with writing elegant code. The types that need to be defined are as follows:

- `Register`: this will call `try_register` and pass in `deps`, `env`, and the `name` received from the msg.
  - `deps` is a combination of storage and api.
  - `env` is the environment, if the function needs to get the message signer then this is where they would get it.
- `Transfer`: this will call `try_transfer` and pass in `deps`, `env`, `name` and the `recipient`.

### try_register

This function is how the contract will register the new name. It will take three parameters and return a `Result`. Our Result will return a Response, a defined type in cosmwasm.

```rust
pub fn try_register<S: Storage, A: Api>(
    deps: &mut Extern<S, A>,
    env: Env,
    name: String,
) -> Result<Response>
```

The next couple steps need to be:

1. Get the config_state, our parameters
2. Make sure enough tokens are being used with the messages

   - We created a helper function for this: `assert_sent_sufficient_coin`

3. Make our key, the name, into bytes
4. Create a NameRecord with the owner
5. Check if the name exists

   - If not then write the name and the owner to the KV store
   - If it exists then throw an error because it has an owner.

6. Finally return Ok(Response::default())

### try_transfer

`try_transfer` will define how a name is transferred from one owner to the next. The function take `deps`, `env` and `name` like the `try_register` function and adds a recipient of the name.

The steps needed to complete this function are as follows:

1. Get the config_state, our parameters
2. Make sure enough tokens are being used with the messages

   - There is a helper function for this: `assert_sent_sufficient_coin`

3. Make the key and name into bytes
4. Get the new_owner as a canonical_address, this is defined by Cosmwasm
   - `deps.api.canonical_address(&to)?;`
5. Next using the resolver we update the key's NameRecord
   - only if the signer is the person who created the message
6. Have a check to make sure the name exists.
7. Finally return Ok(Response::default())

## Query

Before you turn to the next page, where the answers will be lets cover queries. This function uses the pattern matching the same way the `Handle` function does.

We have two queries that we would like to create for use with this contract. We defined these in the `msg.rs` file.

- `ResolveRecord` which takes a name and will call `query_resolver`. This function takes `deps` and a `name`. This will return a name and its record.
- `Config` which does not take any parameters, it directly calls the read function `config_read`.

### query_resolver

This function is what will give us the information that is associated with the name, at this time it is the owner of the name. Below you will find the function signature and steps that must be accomplished in order to complete the function.

```rust
fn query_resolver<S: Storage, A: Api>(deps: &Extern<S, A>, name: String) -> Result<Vec<u8>>
```

1. Make our key, the name, into bytes
2. Use the `read_resolver` to get the info from the bucket
3. Make the `ResolveRecordResponse` type with the info received
4. return the serialized response

On the next page you will see the answers to all the steps that were defined here.
