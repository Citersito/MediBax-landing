// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
	server: {
		host: "0.0.0.0", // Escucha en todas las interfaces de red
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					quietDeps: true,
					logger: { warn: () => {}, debug: () => {} },
				},
			},
		},
		logLevel: "error",
	},
});
