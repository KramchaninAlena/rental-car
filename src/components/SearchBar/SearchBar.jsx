import { Select, Label, Form, Option, Button } from './SearchBar.styled'
import makes from './makes'
import prices from './prices'
export const SearchBar = ({onChange}) => {
  
  return (
    <Form action="">
      <Label htmlFor="">
      Car brand
      <Select name="" id="" onChange={(evt) => onChange(evt.target.value, 'mark')}>
        <option value="all">all</option>
      {makes.map((items, idx) => <Option key={idx} value={items}>{items}</Option>)}
            
    </Select>
      </Label>

      <Label htmlFor="">
      Price/ 1 hour
      <Select name="" id="" onChange={(evt) => onChange(evt.target.value, 'price')}>
        <Option value="To">To $</Option>
      {prices.map((price, idx) => <Option key={idx} value={price}>{price}</Option>)}
            
    </Select>
      </Label>
      <Button>Search</Button>
    </Form>
  )
}
