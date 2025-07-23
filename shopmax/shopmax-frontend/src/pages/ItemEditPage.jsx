import { Container } from '@mui/material'
import ItemEditForm from '../components/item/ItemEditForm'

function ItemEditPage() {
   return (
      <Container maxWidth="md" sx={{ marginTop: 10, marginBottom: 13 }}>
         <h1>상품 수정</h1>
         <ItemEditForm />
      </Container>
   )
}

export default ItemEditPage
