export const dbURL: string = 'mongodb://localhost/retail';

const defaultPort: number = 5000;
export const PORT: number | string = process.env.PORT || defaultPort;
