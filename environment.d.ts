export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			REPORT_GAS?: string;
		}
	}
}
