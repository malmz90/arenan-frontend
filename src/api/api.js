export const getAllItems = () =>
  fetch("http://localhost:4000/item/items", {
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((error) => console.log("error", error));

export const buyItem = (item) =>
  fetch("http://localhost:4000/market/buy-item", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",

    body: JSON.stringify(item),
  });

// Combat API functions
export const getAllCharacters = () =>
  fetch("http://localhost:4000/character/all", {
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((error) => console.log("error", error));

export const startFight = (opponentCharacterId) =>
  fetch("http://localhost:4000/combat/fight", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ opponentCharacterId }),
  })
    .then((res) => res.json())
    .catch((error) => console.log("error", error));

// Fetch current character stats (includes rounds)
export const getMyStats = () =>
  fetch("http://localhost:4000/character/stats", {
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((error) => console.log("error", error));

export const allocateStats = ({ strength, vitality, dexterity }) =>
  fetch("http://localhost:4000/character/allocate-stats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ strength, vitality, dexterity }),
  })
    .then((res) => res.json())
    .catch((error) => console.log("error", error));
