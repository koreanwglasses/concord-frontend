import * as React from "react";
import styles from "./app.module.css";
import { fetch2 } from "./utils";

export function App() {
  const [data, setData] = React.useState<{ message: string }>();

  React.useEffect(() => {
    (async () => {
      const result = await fetch2("/api/test");
      setData(await result.json());
    })();
  }, []);

  return <div className={styles.container}>{data?.message}</div>;
}
