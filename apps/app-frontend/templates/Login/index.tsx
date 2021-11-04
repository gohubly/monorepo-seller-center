import TemplateLayout from "../../components/TemplateLayout"
import useLoginTemplateLogic from "./logic"

const LoginTemplate: React.FC = () => {
  const logic = useLoginTemplateLogic()

  return (
    <TemplateLayout type='PUBLIC'>
      <h1>Login templatee!</h1>
    </TemplateLayout>
  )
}

export default LoginTemplate