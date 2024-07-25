import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/src/models/user.model";

connect();

export const POST = async (request: NextRequest) => {
  try {
    const requestBody = await request.json();
    const { token } = requestBody;
    console.warn({ token });

    const user = User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    // @ts-ignore
    user.isVerified = true;
    // @ts-ignore
    user.verifyToken = undefined;
    // @ts-ignore
    user.verifyTokenExpiry = undefined;
    // @ts-ignore
    await user.save();

    return NextResponse.json({ message: "Email verified", success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
