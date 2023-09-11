import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { Decimal } from "decimal.js";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  images: JsonValue;
  listingCreatedBy?: User;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: Decimal;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  wishlists?: Array<Wishlist>;
};
