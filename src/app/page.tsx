"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/styled components/button";

export default function Home() {
  return (
    <div className="landing-page">
      <div className="landing-page__buttons">
        <Button>Sign in</Button>
        <Button>Register</Button>
      </div>
    </div>
  );
}
