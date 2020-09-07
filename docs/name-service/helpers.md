---
id: helpers
title: Helpers
sidebar_label: Helpers
---

Before we begin writing our contract lets define some helper functions that will make a few things easier while writing the smart contract. You will need to create this file. You can name it `coin_helpers.rs`. To use this file within other files in the src directory you will have to define it at the top of the `lib.rs` file.

```rust
// Within lib.rs
pub mod coin_helpers;
```

Now we are able to define the needed helpers. For out first helper we will define a function that will take a string and parse it into a `u128`. It will return it as a `Result`. A result in rust is an enum which returns `Ok` or `Err`. To read more about results they can be found [here](https://doc.rust-lang.org/std/result/enum.Result.html).

```rust
fn parse_u128(source: &str) -> Result<u128> {
    match source.parse::<u128>() {
        Ok(value) => Ok(value),
        Err(_) => contract_err("Error while parsing string to u128"),
    }
}
```

Next, we will make a helper function that the user enough coins to pay the needed fees and that the coin is the correct denomination.

```rust
pub fn assert_sent_sufficient_coin(sent: &Option<Vec<Coin>>, required: Option<Coin>) -> Result<()> {
    if let Some(required_coin) = required {
        let required_amount = parse_u128(&required_coin.amount)?;
        if required_amount > 0 {
            if let Some(coins) = sent {
                if coins.iter().any(|coin| {
                    // check if a given sent coin matches denom
                    // and has sufficient amount
                    let amount = parse_u128(&coin.amount).unwrap_or(0);
                    coin.denom == required_coin.denom && amount >= required_amount
                }) {
                    return Ok(());
                }
            }
            return contract_err("Insufficient funds sent");
        }
    }
    Ok(())
}
```

Lets breakdown the above function. We receive the used coins and the required coins (contract parameter) and return a result.
Next we

Finally we will define a function to return us a Coin.

```rust
pub fn coin(amount: &str, denom: &str) -> Coin {
    Coin {
        amount: amount.to_string(),
        denom: denom.to_string(),
    }
}
```

Next we will be going to
