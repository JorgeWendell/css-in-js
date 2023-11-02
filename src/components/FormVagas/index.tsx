/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useState } from 'react'

import { Campo, Search, Pesquisar } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Search>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Pesquisar>Pesquisar</Pesquisar>
    </Search>
  )
}
export default FormVagas
