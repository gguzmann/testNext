import { useRouter } from 'next/router'

const VentaPage = () => {
    const router = useRouter()
   const {id} = router.query
  return (
    <div>
        {id}
    </div>
  )
}

export default VentaPage