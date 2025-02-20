import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>hello</h1>
      <Link href='/users'>Go to users page</Link>
    </>
  );
}
