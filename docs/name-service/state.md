---
id: state
title: State
sidebar_label: State
---

At this point you have generated a template for building smart contracts. We will begin editing some files and adding some for our tutorial.

You will see in the current `state.rs` that there are a few things defined, lets talk about them first.

```rust
pub struct State {
    pub count: i32,
    pub owner: CanonicalAddr,
}

pub fn config<S: Storage>(storage: &mut S) -> Singleton<S, State> {
    singleton(storage, CONFIG_KEY)
}

pub fn config_read<S: Storage>(storage: &S) -> ReadonlySingleton<S, State> {
    singleton_read(storage, CONFIG_KEY)
}
```

Here we are defining global variables. These are similar to parameters in the cosmos-sdk. These values are simple key-value with only ever one instance. You may see the storage and `CONFIG_KEY`wrapped in something called a singleton. This is coming from the default storage library, [cw-storage](https://github.com/confio/cw-storage). When using cosmwasm you have the option of not using this library, you are free to fork it or use something entirely different.

Two function are defined above, and most of the contracts state types will also define two functions, one for read/write and another only for reading. When you are defining a read only function you can use a readonly call to cw-storage.

For our smart contract we would like to define two parameters when a contract is created. We would like to have a purchase price for the names and a transfer price, both of which will be of the type `Coin`. Cosmwasm comes with many types predefined for usage, you can find them [here](https://github.com/confio/cosmwasm/blob/v0.7.0/src/types.rs).

Next we also need to define a record to a name. We will only define a owner of the name, this is a predefined type as well. We also want this to be storage to more than a singleton, so we will decide to go with a [Bucket](https://github.com/confio/cw-storage#bucket). Like above we also need to define two functions: a read only and a read/write function.

<!-- Canonical and human address  -->

Before going to the next page take a few minutes to implement what is stated above. On the next page you will see the answers.
