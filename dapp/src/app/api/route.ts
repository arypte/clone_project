import { prisma } from '@/app/lib/server';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);

    return NextResponse.json({
      ok: true,
      data: 'xx',
      id: searchParams.get('id'),
    });
  } catch (error) {
    console.error(error);
  }
};

export const POST = async (req: Request) => {
  try {
    const { account, email, signedToken } = await req.json();

    const user = await prisma.user.upsert({
      where: { account },
      update: {
        signedToken,
      },
      create: {
        account,
        email,
        signedToken,
      },
      select: {
        account: true,
        email: true,
        nickname: true,
        signedToken: true,
      },
    });

    // console.log()는 npm run dev 했던 터미널에서 확인 가능

    return NextResponse.json({
      ok: true,
      user,
    });
  } catch (error) {
    console.error(error);
  }
};
