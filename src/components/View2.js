import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'


export const View2 = ({books2,deleteBook2}) => {

    return books2.map(book2=>(
    <tr key={book2.date2}>
    <td>{book2.date2}</td>
    <td>{book2.task}</td>
    <td>{book2.ifft2}</td>
    
    <td className='delete-btn' onClick={()=>deleteBook2(book2.ifft2)}>
            <Icon icon={trash}/>
    </td>           
</tr>

))
}