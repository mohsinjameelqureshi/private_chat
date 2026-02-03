import { treaty } from "@elysiajs/eden";
import type { App } from "../app/api/[[...slugs]]/route";

const apiUrl = process.env.NEXT_PUBLIC_API_URL!; // "!" ensures TS knows it's defined

export const client = treaty<App>(apiUrl).api;
