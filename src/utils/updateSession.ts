export default async function updateSession() {
  let res = await fetch("/api/auth/session?update=true");
  console.log(await res.json());
  setTimeout(async () => {
    let res = await fetch("/api/auth/session?update=true");
    console.log(await res.json());
  }, 1000);
}
