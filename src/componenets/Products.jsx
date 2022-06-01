import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            axios.get("http://localhost:8080/products").then((res) => {
                setProducts(res.data)
            })
        }
        fetchProducts();
    }, [])
    return (
        // <div>Products:{" "}
        //     <div>
        //         {products.map((pro) => {
        //             return <div key={pro.id}>
        //                 <Link to={`/products/${pro.id}`}>{pro.name}</Link>
        //             </div>
        //         })}
        //     </div>

        // </div>

        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Product details</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Product Name</Th>
                        <Th>Price</Th>
                        <Th>More details</Th>
                    </Tr>
                </Thead>
                <Tbody>
                   {products.map((pro)=>{
                       return <Tr>
                           <Td>{pro.name}</Td>
                           <Td>{pro.price}</Td>
                           <Td><Link to={`/products/${pro.id}`}>More details</Link></Td>
                       </Tr>
                   })}
                    {/* <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr> */}
                </Tbody>
               
            </Table>
        </TableContainer>
    )
}

export default Products