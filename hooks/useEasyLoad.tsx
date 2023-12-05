import { create } from "easyload";

const s3Config = {
	accessKeyId: "ct89304",
	secretAccessKey: "9614a246c3112624487e430cece76025",
	endpoint: "https://s3.timeweb.com",
	s3ForcePathStyle: true,
	region: "ru-1",
	apiVersion: "latest",
};

export const useEasyLoad = create(s3Config);
