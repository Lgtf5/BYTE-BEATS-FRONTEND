export const postRecording = async (recordingData) => {
    try {
      const response = await fetch("https://853d-2a0c-5a87-9106-e00-4d6c-e43c-cc43-36ee.ngrok-free.app/recordings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(recordingData),
        
      });
      if (!response.ok) {
        throw new Error("Error al enviar la grabación");
      }
      return await response.json();
    } catch (error) {
      console.error("Error en postRecording:", error);
      throw error;
    }
  };
  

  export const getRecordings = async () => {
    try {
      const response = await fetch("https://tu-backend.com/api/recordings", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error("Error al obtener las grabaciones");
      }
      return await response.json();
    } catch (error) {
      console.error("Error en getRecordings:", error);
      throw error;
    }
  };
  