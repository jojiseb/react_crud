import React , {useState,useEffect} from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Update() {
  let navigate = useNavigate();
  const [id,setID] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  console.log(firstName)
  console.log(lastName)

  const updateData = () => {
    axios.put(`https://61dd37a3f60e8f0017668644.mockapi.io/crudData/${id}`,{
      firstName,
      lastName
    }).then(() => {
      navigate('/read')
    })
  }

  useEffect(() => {
      setID(localStorage.getItem('ID'));
      setFirstName(localStorage.getItem('First Name'));
      setLastName(localStorage.getItem('Last Name'));
  }, [])

  return (
    <div>
  <Form className='create-form'>
    <Form.Field>
      <label>First Name</label>
      <input name='fname'
      value={firstName || ''} 
      placeholder='First Name' 
      onChange={(e) => setFirstName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input name='lname'
      value={lastName || ''}  
      placeholder='Last Name'
      onChange={(e) => setLastName(e.target.value)}/>
    </Form.Field>
    <Button onClick={updateData} type='submit'>Update</Button>
  </Form>
  </div>
)
}