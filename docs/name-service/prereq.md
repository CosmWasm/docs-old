---
id: prereq
title: Prerequisites
sidebar_label: Prerequisites
---

Before you get started on the tutorial there are a few things that you must download in order to have your environment setup.

## Rust

If you have rust installed then you can skip this step. If you do not please follow the instructions stated [here](https://www.rust-lang.org/tools/install).

We will be using the most recent stable rust version.

## Cargo Generate

Cargo generate is a developer tool which uses existing repos as a template. Below is the command to install the binary:

`cargo install cargo-generate --features vendored-openssl`

Cosmwasm provides a [template repo](https://github.com/confio/cosmwasm-template). We will be using this to scaffold all the needed files for writing a smart contract. Below is the command that you will use in order to generate your repository to start building your smart contract. You can place anything you'd like for `YOUR_NAME_HERE`. For use in this tutorial we will use name_service.

`cargo generate --git https://github.com/confio/cosmwasm-template.git --name YOUR_CONTRACT_NAME_HERE`

Next we will breakdown all the files that are created.
