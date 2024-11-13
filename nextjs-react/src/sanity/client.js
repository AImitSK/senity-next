import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "tx4ex3kn",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});