"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/styled components/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="landing-page">
      <div className="landing-page__buttons">
        <Button
          color="#fff"
          variant="primary"
          onClick={() => router.push("/auth/sign-in")}
        >
          Sign in
        </Button>
        <Button
          color="#fff"
          variant="standard"
          onClick={() => router.push("/auth/register")}
        >
          Register
        </Button>
      </div>
    </div>
  );
}
