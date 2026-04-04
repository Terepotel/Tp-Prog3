//Punto 1.c
export async function getPersonajeById(id) {

  try {
    const respuesta = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`);

    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }

   return await respuesta.json();

  } catch (error) {
    console.error("Error al obtener el personaje:", error);
  }

}
