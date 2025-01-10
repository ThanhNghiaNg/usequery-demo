import { z } from 'zod';

export const request = async <ResponseDataType>(url: string, options: RequestInit = {}, schema: z.Schema<ResponseDataType>) => {
    try {
        const response = await fetch(url, options); // replace with axios later
        const data = await response.json();

        // Schema parsing
        const parsed = schema.safeParse(data);

        if (parsed.success) {
            return parsed.data; // Returns type ResponseDataType if successful
        }

        // If parsing fails, return a custom error
        console.error("Could not parse response", parsed.error);
        
        // return {
        //     code: 500,
        //     error: "Could not parse response",
        // };

        // mock data
        return {
            id: `RandomId-${Math.trunc(Math.random()*100000)}`,
            username: "ThanhNghia"
        }
    } catch (error: unknown) {
        console.error("Response not ok", error);
        // Return a fallback error object on network or other failures
        return {
            code: 500,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
};
