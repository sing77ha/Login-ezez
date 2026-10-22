import { getSession } from "@/lib/session";

export const dynamic = "force-dynamic";

const ERRORS = {
  state: "เซสชันหมดอายุหรือไม่ตรงกัน ลองกดเข้าสู่ระบบอีกครั้ง",
  token: "Discord ไม่ยอมรับการเข้าสู่ระบบ ตรวจสอบ Client ID, Secret และ Redirect URI",
  user: "ดึงข้อมูลบัญชี Discord ไม่สำเร็จ ลองอีกครั้ง",
};

export default async function Home({ searchParams }) {
  const session = await getSession();
  const { error } = await searchParams;

  if (session) {
    const avatar = session.avatar
      ? `https://cdn.discordapp.com/avatars/${session.id}/${session.avatar}.png?size=128`
      : null;
    return (
      <main>
        {avatar ? (
          <img className="avatar" src={avatar} alt="" width="64" height="64" />
        ) : (
          <div className="avatar fallback">{session.name[0]}</div>
        )}
        <h1>สวัสดี {session.name}</h1>
        <p>คุณเข้าสู่ระบบด้วย Discord แล้ว</p>
        <form action="/api/auth/logout" method="post">
          <button className="ghost" type="submit">ออกจากระบบ</button>
        </form>
      </main>
    );
  }

  return (
    <main>
      <h1>เข้าสู่ระบบ</h1>
      <p>ใช้บัญชี Discord ของคุณ ไม่ต้องสมัครสมาชิกใหม่</p>
      {error && <p className="error" role="alert">{ERRORS[error] ?? "เข้าสู่ระบบไม่สำเร็จ ลองอีกครั้ง"}</p>}
      <a className="discord" href="/api/auth/discord">เข้าสู่ระบบด้วย Discord</a>
    </main>
  );
}
