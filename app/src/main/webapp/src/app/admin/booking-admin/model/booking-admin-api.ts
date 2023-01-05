import {defaultVisitorGroup, VisitorGroup} from "../../../visitor-group/model/visitor-group-api";

export interface Booking {
  id: number,
  offerId: number,
  visitorGroupId: number,
  status: string,
}

export const defaultBooking: Booking = {
  id: -1,
  offerId: -1,
  visitorGroupId: -1,
  status: ""
}


export interface BookingDetails {
  booking: Booking,
  visitorGroup: VisitorGroup
}

export const defaultBookingDetails: BookingDetails = {
  booking: defaultBooking,
  visitorGroup: defaultVisitorGroup
}

export class BookingChangeRequest {
  constructor(
    offerId: number,
    visitorGroupId: number,
  ) {
  }
}
