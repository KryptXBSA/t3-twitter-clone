export default async function updateSession() {
   await fetch("/api/auth/session?update=true");
    setTimeout(async() => {
    await fetch("/api/auth/session?update=true");
    }, 1000);
}
