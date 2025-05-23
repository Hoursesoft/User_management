// este archivo contiene la configuración de la API
const VITE_API_URL = import.meta.env.VITE_API_URL;
// VITE_API_URL es una variable de entorno que contiene la URL base de la API
// import.meta.env es un objeto que contiene las variables de entorno definidas en el archivo .env
export const API_BASE_URL = `${VITE_API_URL}/users`;