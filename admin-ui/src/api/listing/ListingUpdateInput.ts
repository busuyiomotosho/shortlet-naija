import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TripUpdateManyWithoutListingsInput } from "./TripUpdateManyWithoutListingsInput";
import { WishlistUpdateManyWithoutListingsInput } from "./WishlistUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  description?: string;
  images?: InputJsonValue;
  listingCreatedBy?: UserWhereUniqueInput;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  placeAmenities?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string;
  price?: number;
  title?: string;
  trips?: TripUpdateManyWithoutListingsInput;
  wishlists?: WishlistUpdateManyWithoutListingsInput;
};
