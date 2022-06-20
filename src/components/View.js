import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({books,deleteBook}) => {
    
    return books.map(book=>(
        <tr key={book.date}>
            <td>{book.date}</td>
            <td>{book.totd}</td>
            <td>{book.ifft}</td>
            <td className='delete-btn' onClick={()=>deleteBook(book.ifft)}>
                <Icon icon={trash}/>
            </td>           
        </tr>


             
    
))
}
