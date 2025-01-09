// lib/helpers.js
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(amount);
};

export const getErrorMessage = (error) => {
  return error?.message || "Ocurrió un error";
};

export const parseDate = (date) => {
  return new Date(date).toLocaleDateString("es-AR");
};
