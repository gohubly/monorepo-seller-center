import TemplateLayout from "../../components/TemplateLayout"
import useLoginTemplateLogic from "./logic"

const LoginTemplate: React.FC = () => {
  const logic = useLoginTemplateLogic()

  return (
    <TemplateLayout type='PUBLIC'>
      Login templatee!
    </TemplateLayout>
  )
}

export default LoginTemplate