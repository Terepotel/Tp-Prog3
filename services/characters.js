// Ejercicio 1.a.
export async function getAllCharacters(path) {
  try {
    const response = await fetch(`${path}/Characters`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const personajes = await response.json();
    console.log(personajes);
    return personajes;
  } catch (error) {
    console.error("Algo salió mal:", error);
    throw error;
  }
}

//Punto 1.c
export async function getPersonajeById(id) {
  try {
    const respuesta = await fetch(
      `https://thronesapi.com/api/v2/Characters/${id}`,
    );

    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }

    return await respuesta.json();
  } catch (error) {
    console.error("Error al obtener el personaje:", error);
  }
}
