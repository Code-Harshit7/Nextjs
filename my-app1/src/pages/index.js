import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <h1>HERBAL TEA</h1>
    <img src = "https://imgs.search.brave.com/YN5yAVhaKs5A9kj1ZjTcL8ufcU3GvqRbB68C8msk_Y0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oZW1wLXByb2R1/Y3RzLWNvbmNlcHQt/Y2FubmFiaXMtc2Vl/ZC1vaWwtc2tlaW4t/Z3JlZW4tcGxhbnQt/d2hpdGUtYmFja2dy/b3VuZF8zMjM2MzQt/NjQ1LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA" alt ="img"></img>
    </>
  );
}
