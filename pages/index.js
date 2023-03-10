import HeadMeta from "./src/HeadMeta";
import { Layout } from "./src/Layout";
import { List } from "./src/List";


export default function Home() {
  return (
    <>
      <Layout>
        <HeadMeta title={"/index"}/>
        <List/>
      </Layout>
    </>
  )
}
