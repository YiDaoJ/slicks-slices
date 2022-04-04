const sizes = {
  S: 0.75,
  M: 1,
  L: 1.25,
};

export function calculatePizzaPrice(cents: number, size: "S" | "M" | "L") {
  return cents * sizes[size];
}
