import { BigInt } from "@graphprotocol/graph-ts";
import {
  PunkBought as PunkBoughtEvent,
} from "../generated/punks/punks"

import {Account, Punk} from '../generated/schema';

export function handlePunkBought(event: PunkBoughtEvent): void {
  let account = Account.load(event.params.toAddress.toHexString());

  if (account == null) {
    account = new Account(event.params.toAddress.toHexString());
    account.id = event.params.toAddress.toHexString();
    account.numberOfPunkBought = BigInt.fromI32(1);
  } else {
    account.numberOfPunkBought = account.numberOfPunkBought.plus(
      BigInt.fromI32(1),
    );
  }

  account.save();

  let punk = Punk.load(event.params.punkIndex.toHexString());

  if (punk == null) {
    punk = new Punk(event.params.punkIndex.toHexString());
    punk.id = event.params.punkIndex.toHexString();
    punk.index = event.params.punkIndex;
  }

  punk.owner = event.params.toAddress.toHexString();
  punk.value = event.params.value;
  punk.date = event.block.timestamp;

  punk.save();
}
