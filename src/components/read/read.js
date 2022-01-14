import React , {useEffect , useState} from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read()
{
    const [apiData,setApiData] = useState([]);
    useEffect(() => {
        axios.get('https://61dd37a3f60e8f0017668644.mockapi.io/crudData')
        .then((getData) => {
            setApiData(getData.data)
        })
    },[])


    const getData = () => {
        axios.get('https://61dd37a3f60e8f0017668644.mockapi.io/crudData')
        .then((getData) => {
            setApiData(getData.data)
        })
    }

    const setID = (data) => {
        let {id,firstName,lastName} = data;
        console.log(id);
        localStorage.setItem('ID',id);
        localStorage.setItem('First Name',firstName);
        localStorage.setItem('Last Name',lastName);
    }

    const onDelete = (id) => {
        axios.delete(`https://61dd37a3f60e8f0017668644.mockapi.io/crudData/${id}`)
        .then(() => {
            getData();
        })
    }


    return(
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>FirstName</Table.HeaderCell>
                        <Table.HeaderCell>LastName</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data,id) => {
                        return (
                            <Table.Row key={id}>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button color='green' onClick={() => setID(data)}>Update</Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                        <Button color='red' onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </div>
    );
}