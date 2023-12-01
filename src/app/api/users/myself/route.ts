import { getDataFromToken } from "@/src/helpers/getDataFromToken";
import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/src/models/user.model";

connect();

export const GET = async (request: NextRequest) => {
  try {
    const userId = await getDataFromToken(request).id;
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      message: "User found",
      user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
