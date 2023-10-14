import { BASE_URL } from "../../../../config";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch(`${BASE_URL}/api/user/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();
      return new NextResponse(JSON.stringify(data), {
        status: 201,
        statusText: "Success",
      });
    } else {
      const errorData = await response.json(); 
      if (errorData && Object.keys(errorData).length > 0) {
        throw new Error(errorData[Object.keys(errorData)[0]]);
      } else {
        throw new Error("Failed to register");
      }
    }
  } catch (error: any) {
    console.log(error)
    return new NextResponse(error.message, {
      status: 500,
      statusText: 'Failed',
    });
  }
}
