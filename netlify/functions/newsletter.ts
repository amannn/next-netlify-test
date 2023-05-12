import { Handler, HandlerEvent } from "@netlify/functions";
import { jsonResponse } from "../shared/utils";
import { HTTP_METHODS } from "../shared/variables";

async function post(event: HandlerEvent) {
  const data = event.body ? JSON.parse(event.body) : undefined;

  if (!data?.email) {
    return jsonResponse({
      status: 404,
      body: {
        message: "email is a mandatory field",
      },
    });
  }

  try {
    return jsonResponse({
      status: 200,
      body: { message: "Members succesfully subscribed to newsletter" },
    });
  } catch (error: unknown) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Unexpected error while adding member to newsletter",
      },
    });
  }
}

const handler: Handler = async (event) => {
  if (event.httpMethod !== HTTP_METHODS.POST) {
    return jsonResponse({
      status: 405,
      body: { message: "Method not allowed" },
    });
  }

  return post(event);
};

export { handler };
