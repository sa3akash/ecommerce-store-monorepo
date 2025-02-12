import { headers } from "next/headers";
import "server-only";

interface ApiProps {
  body?: BodyInit | null;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
  integrity?: string;
  keepalive?: boolean;
  method?: string;
  mode?: RequestMode;
  priority?: RequestPriority;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  signal?: AbortSignal | null;
  window?: null;
  // next?: NextFetchRequestConfig;
}


export const api = async (url: string, options: ApiProps) => {
  try {
    const headersList = await headers(); // Retrieves headers
    const headersObject = Object.fromEntries(headersList);
    delete headersObject["content-length"];

    const response = await fetch(`${process.env.BASE_URL}/api/v1${url}`, {
      credentials: "include",
      ...options,
      headers: {
        ...headersObject,
        "content-type": "application/json",
        // 'accept': 'application/json', // Uncomment if needed
        ...options.headers,
      },
    });

    return await response.json();
  } catch (err) {
    console.log(JSON.stringify(err, null, 2));
  }
};