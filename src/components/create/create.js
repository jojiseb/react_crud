import React , {useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Create() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const postData = () => {
    axios.post('https://61dd37a3f60e8f0017668644.mockapi.io/crudData',{
      firstName,
      lastName
    }).then(() => {
      navigate('/read')
    })
  }
  return (
    <div>
  <Form className='create-form'>
    <Form.Field>
      <label>First Name</label>
      <input name='fname'
      value={firstName} 
      placeholder='First Name' 
      onChange={(e) => setFirstName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input name='lname'
      value={lastName}  
      placeholder='Last Name'
      onChange={(e) => setLastName(e.target.value)}/>
    </Form.Field>
    <Button onClick={postData} type='submit'>Submit</Button>
  </Form>
  </div>
)
}
