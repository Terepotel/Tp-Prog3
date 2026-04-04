export const charactersAdapter = (characters) => {
  return characters.map((character) => ({
    id: character.id,
    name: character.fullName,
  }));
};
