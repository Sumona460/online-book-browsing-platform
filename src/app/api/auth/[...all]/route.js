// import { auth } from "@/lib/auth";
// import { toNextJsHandler } from "better-auth/next-js";

import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// export const { GET, POST } = toNextJsHandler(auth);

// import { auth } from "@/lib/auth";
// import { toNextJsHandler } from "better-auth/next-js";



export const { GET, POST } = toNextJsHandler(auth);