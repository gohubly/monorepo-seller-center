import { ROUTES } from "@gohubly/shared"
import { useRouter } from "next/dist/client/router"
import TemplateLayout from "../../components/TemplateLayout"

const HomeTemplate: React.FC = () => {
  const router = useRouter()
  const push = () => router.push(ROUTES.LOGIN)

  return (
    <TemplateLayout type='PUBLIC'>
      <h1>Home templatee!</h1>
      {/* <Button onClick={push}>Login</Button> */}
    </TemplateLayout>
  )
}

export default HomeTemplate