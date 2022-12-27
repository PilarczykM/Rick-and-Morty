import styles from "./styles.module.css"
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className={styles.container}>
          <h1>Rick and Morty</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
