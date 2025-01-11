const API_URL = "/api";
import { loadAbort } from "@/lib/utils.js";
import axios from "axios";

// export const getServices = (id) => {
//   const controller = loadAbort();

//   return {
//     call: axios.get(`${API_URL}/services/${id}`, {
//       signal: controller.signal,
//     }),
//     controller,
//   };
// };

// export const newCharacter = (character) => {
//   const controller = loadAbort();

//   return {
//     call: axios.post(`${BASE_URL}/characters`, character, {
//       signal: controller.signal,
//     }),
//     controller,
//   };
// };

// Providers
export const getProviders = () => {
  const controller = loadAbort();

  return {
    call: axios.get(`${API_URL}/providers`, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const getProvider = (id) => {
  const controller = loadAbort();

  return {
    call: axios.get(`${API_URL}/providers/${id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};

// Bookings
export const getBooking = (booking_id) => {
  const controller = loadAbort();

  return {
    call: axios.get(`${API_URL}/bookings/${booking_id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const getBookings = () => {
  const controller = loadAbort();

  return {
    call: axios.get(`${API_URL}/bookings`, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const newBooking = (booking) => {
  const controller = loadAbort();

  return {
    call: axios.post(`${API_URL}/bookings`, booking, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const reescheduleBooking = (booking) => {
  const controller = loadAbort();

  return {
    call: axios.put(`${API_URL}/bookings/${booking.id}`, booking, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const cancelBooking = (booking_id) => {
  const controller = loadAbort();

  return {
    call: axios.delete(`${API_URL}/bookings/${booking_id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};
