import Image from "next/image";
import styles from "./page.module.css";
import { Constant as C } from "./exhibition/constant";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Body images={<ImageLoader />}></Body>
    </div>
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>app/page.tsx</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <div>what up</div>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore starter templates for Next.js.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}

function Header() {
  return (
    <div
      style={{
        width: "100vw",
        height: C.header_height,
        background: C.color_sonic_blue,
        justifyContent: "space-between",
        display: "flex",
      }}
    >
      <div
        style={{
          padding: 35,
          fontFamily: "MonoFont, monospace",
          fontSize: 20,
          // letterSpacing: "0.01em",
        }}
      >
        Face Of Christ Follower
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            marginTop: 38,
            marginRight: 38,
            fontFamily: "MonoFont, monospace",
          }}
        >
          Gallery{" "}
        </div>
        <div
          style={{
            marginTop: 38,
            marginRight: 38,
            fontFamily: "MonoFont, monospace",
          }}
        >
          Documentary{" "}
        </div>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            paddingTop: 38,
            marginRight: 20,
          }}
        >
          <FaInstagram size={25} />
        </div>
        <div
          style={{
            paddingTop: 38,
            marginRight: 20,
          }}
        >
          <FaYoutube size={25} />
        </div>
      </div>
    </div>
  );
}

function Body({ images }: { images: JSX.Element }) {
  return (
    <div
      style={{
        width: "100vw",
        // height: `calc(100vh - ${C.header_height}px)`,
        display: "flex",
        background: C.color_blue,
      }}
    >
      {images}
    </div>
  );
}

function ImageLoader() {
  return (
    <>
      <div
        style={{
          display: "grid",
        }}
      >
        <img src={"/testPhoto/6.jpeg"} width={"100%"} />
        <img src={"/testPhoto/5.jpeg"} width={"100%"} />
        <img src={"/testPhoto/3.jpeg"} width={"100%"} />
        <img src={"/testPhoto/2.jpeg"} width={"100%"} />
        <img src={"/testPhoto/0.jpeg"} width={"100%"} />
        <img src={"/testPhoto/8.jpeg"} width={"100%"} />
        <img src={"/testPhoto/12.jpeg"} width={"100%"} />
        <img src={"/testPhoto/7.jpeg"} width={"100%"} />
        <img src={"/testPhoto/17.jpeg"} width={"100%"} />
        <img src={"/testPhoto/4.jpeg"} width={"100%"} />
        <img src={"/testPhoto/13.jpeg"} width={"100%"} />
        <img src={"/testPhoto/1.jpeg"} width={"100%"} />
        <img src={"/testPhoto/14.jpeg"} width={"100%"} />
        <img src={"/testPhoto/11.jpeg"} width={"100%"} />
        <img src={"/testPhoto/9.jpeg"} width={"100%"} />
        <img src={"/testPhoto/20.jpeg"} width={"100%"} />
        <img src={"/testPhoto/16.jpeg"} width={"100%"} />
        <img src={"/testPhoto/10.jpeg"} width={"100%"} />
        <img src={"/testPhoto/19.jpeg"} width={"100%"} />
        <img src={"/testPhoto/15.jpeg"} width={"100%"} />
        <img src={"/testPhoto/18.jpeg"} width={"100%"} />
      </div>
      <div
        style={{
          display: "grid",
        }}
      >
        <img src={"/testPhoto/4.jpeg"} width={"100%"} />
        <img src={"/testPhoto/0.jpeg"} width={"100%"} />
        <img src={"/testPhoto/15.jpeg"} width={"100%"} />
        <img src={"/testPhoto/2.jpeg"} width={"100%"} />
        <img src={"/testPhoto/1.jpeg"} width={"100%"} />
        <img src={"/testPhoto/9.jpeg"} width={"100%"} />
        <img src={"/testPhoto/6.jpeg"} width={"100%"} />
        <img src={"/testPhoto/3.jpeg"} width={"100%"} />
        <img src={"/testPhoto/16.jpeg"} width={"100%"} />
        <img src={"/testPhoto/17.jpeg"} width={"100%"} />
        <img src={"/testPhoto/11.jpeg"} width={"100%"} />
        <img src={"/testPhoto/8.jpeg"} width={"100%"} />
        <img src={"/testPhoto/5.jpeg"} width={"100%"} />
        <img src={"/testPhoto/13.jpeg"} width={"100%"} />
        <img src={"/testPhoto/7.jpeg"} width={"100%"} />
        <img src={"/testPhoto/18.jpeg"} width={"100%"} />
        <img src={"/testPhoto/19.jpeg"} width={"100%"} />
        <img src={"/testPhoto/12.jpeg"} width={"100%"} />
        <img src={"/testPhoto/14.jpeg"} width={"100%"} />
        <img src={"/testPhoto/20.jpeg"} width={"100%"} />
        <img src={"/testPhoto/10.jpeg"} width={"100%"} />
      </div>
      <div
        style={{
          display: "grid",
        }}
      >
        <img src={"/testPhoto/5.jpeg"} width={"100%"} />
        <img src={"/testPhoto/8.jpeg"} width={"100%"} />
        <img src={"/testPhoto/7.jpeg"} width={"100%"} />
        <img src={"/testPhoto/13.jpeg"} width={"100%"} />
        <img src={"/testPhoto/6.jpeg"} width={"100%"} />
        <img src={"/testPhoto/16.jpeg"} width={"100%"} />
        <img src={"/testPhoto/1.jpeg"} width={"100%"} />
        <img src={"/testPhoto/4.jpeg"} width={"100%"} />
        <img src={"/testPhoto/18.jpeg"} width={"100%"} />
        <img src={"/testPhoto/2.jpeg"} width={"100%"} />
        <img src={"/testPhoto/0.jpeg"} width={"100%"} />
        <img src={"/testPhoto/9.jpeg"} width={"100%"} />
        <img src={"/testPhoto/10.jpeg"} width={"100%"} />
        <img src={"/testPhoto/15.jpeg"} width={"100%"} />
        <img src={"/testPhoto/14.jpeg"} width={"100%"} />
        <img src={"/testPhoto/19.jpeg"} width={"100%"} />
        <img src={"/testPhoto/20.jpeg"} width={"100%"} />
        <img src={"/testPhoto/3.jpeg"} width={"100%"} />
        <img src={"/testPhoto/11.jpeg"} width={"100%"} />
        <img src={"/testPhoto/17.jpeg"} width={"100%"} />
        <img src={"/testPhoto/12.jpeg"} width={"100%"} />
      </div>
    </>
  );
}
