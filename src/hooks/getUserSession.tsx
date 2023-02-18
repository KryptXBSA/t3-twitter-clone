import { UserData } from "@types";
import { useSession } from "next-auth/react";

export function getUserSession(): UserData {
    let { data } = useSession();
    return data?.userData!;
}
