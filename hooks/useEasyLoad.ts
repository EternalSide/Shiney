import { create } from "easyload";

// Конфигурация вашего хранилища
const s3Config = {
      accessKeyId: "ct89304",
      secretAccessKey: "9614a246c3112624487e430cece76025",
      endpoint: "https://s3.timeweb.com",
      s3ForcePathStyle: true,
      region: "ru-1",
      apiVersion: "latest",
};

// Теперь этот хук можно использовать в любом месте приложения
export const useEasyLoad = create(s3Config);
