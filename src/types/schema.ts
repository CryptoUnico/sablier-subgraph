import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class RawStream extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RawStream entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RawStream entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RawStream", id.toString(), this);
  }

  static load(id: string): RawStream | null {
    return store.get("RawStream", id) as RawStream | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get interval(): BigInt {
    let value = this.get("interval");
    return value.toBigInt();
  }

  set interval(value: BigInt) {
    this.set("interval", Value.fromBigInt(value));
  }

  get payment(): BigInt {
    let value = this.get("payment");
    return value.toBigInt();
  }

  set payment(value: BigInt) {
    this.set("payment", Value.fromBigInt(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get redemption(): string | null {
    let value = this.get("redemption");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set redemption(value: string | null) {
    if (value === null) {
      this.unset("redemption");
    } else {
      this.set("redemption", Value.fromString(value as string));
    }
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get startBlock(): BigInt {
    let value = this.get("startBlock");
    return value.toBigInt();
  }

  set startBlock(value: BigInt) {
    this.set("startBlock", Value.fromBigInt(value));
  }

  get stopBlock(): BigInt {
    let value = this.get("stopBlock");
    return value.toBigInt();
  }

  set stopBlock(value: BigInt) {
    this.set("stopBlock", Value.fromBigInt(value));
  }

  get streams(): Array<string> {
    let value = this.get("streams");
    return value.toStringArray();
  }

  set streams(value: Array<string>) {
    this.set("streams", Value.fromStringArray(value));
  }

  get token(): string | null {
    let value = this.get("token");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set token(value: string | null) {
    if (value === null) {
      this.unset("token");
    } else {
      this.set("token", Value.fromString(value as string));
    }
  }

  get txs(): Array<string> {
    let value = this.get("txs");
    return value.toStringArray();
  }

  set txs(value: Array<string>) {
    this.set("txs", Value.fromStringArray(value));
  }

  get withdrawals(): Array<string> {
    let value = this.get("withdrawals");
    return value.toStringArray();
  }

  set withdrawals(value: Array<string>) {
    this.set("withdrawals", Value.fromStringArray(value));
  }
}

export class Stream extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Stream entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Stream entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Stream", id.toString(), this);
  }

  static load(id: string): Stream | null {
    return store.get("Stream", id) as Stream | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get flow(): string {
    let value = this.get("flow");
    return value.toString();
  }

  set flow(value: string) {
    this.set("flow", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get rawStream(): string {
    let value = this.get("rawStream");
    return value.toString();
  }

  set rawStream(value: string) {
    this.set("rawStream", Value.fromString(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }
}

export class Redemption extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Redemption entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Redemption entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Redemption", id.toString(), this);
  }

  static load(id: string): Redemption | null {
    return store.get("Redemption", id) as Redemption | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get recipientAmount(): BigInt {
    let value = this.get("recipientAmount");
    return value.toBigInt();
  }

  set recipientAmount(value: BigInt) {
    this.set("recipientAmount", Value.fromBigInt(value));
  }

  get senderAmount(): BigInt {
    let value = this.get("senderAmount");
    return value.toBigInt();
  }

  set senderAmount(value: BigInt) {
    this.set("senderAmount", Value.fromBigInt(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block(): i32 {
    let value = this.get("block");
    return value.toI32();
  }

  set block(value: i32) {
    this.set("block", Value.fromI32(value));
  }

  get event(): string {
    let value = this.get("event");
    return value.toString();
  }

  set event(value: string) {
    this.set("event", Value.fromString(value));
  }

  get rawStream(): string {
    let value = this.get("rawStream");
    return value.toString();
  }

  set rawStream(value: string) {
    this.set("rawStream", Value.fromString(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }
}

export class Withdrawal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Withdrawal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Withdrawal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Withdrawal", id.toString(), this);
  }

  static load(id: string): Withdrawal | null {
    return store.get("Withdrawal", id) as Withdrawal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get rawStream(): string {
    let value = this.get("rawStream");
    return value.toString();
  }

  set rawStream(value: string) {
    this.set("rawStream", Value.fromString(value));
  }
}