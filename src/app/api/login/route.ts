import { BASE_URL } from "../../../../config";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch(`${BASE_URL}/api/login/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data)
      
      return new NextResponse(JSON.stringify(data), {
        status: 201,
        statusText: "Success",
      });
    } else {
      const errorData = await response.json(); 
      console.log(errorData)
      if (errorData) {
        throw new Error(errorData);
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
