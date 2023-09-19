import { getServerSession } from "next-auth/next";
import { authOptions } from "@auth";

export default async function GET(request: Request, response: Response) {
  const session = await getServerSession(request, response, authOptions);
  if (session) {
    // Signed in
    console.log("Session", JSON.stringify(session, null, 2));
  } else {
    // Not Signed in
    response.status(401);
  }
  response.end();
}
