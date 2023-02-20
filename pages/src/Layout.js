import { useRouter } from "next/router"
import MyHeader from "../component/MyHeader"

export const Layout = ({children}) => {
  const router = useRouter();
  return (
      <div className="outBox">
        <MyHeader/>
        {children}
      </div>
  )
}
