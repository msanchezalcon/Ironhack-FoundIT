import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const CardFooter = () => {
    const lostFound = 'https://www.google.com/search?safe=strict&sxsrf=ALeKk02siRSTZWnqrzTKGA8Wb3Y_ms_NNg%3A1595711569861&source=hp&ei=UaAcX5LwMcOZkwWWlJHwCA&q=lost+and+found+near+me&oq=lost+and+found+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BAgjECc6BAguECc6BQgAEJECOggILhDHARCjAjoCCC46CgguEMcBEK8BECc6CAguEMcBEK8BOg0ILhDHARCvARAnEJMCOgsILhDHARCvARCTAjoFCC4QkwJQmQdY3B5gjiBoAHAAeAKAAaYDiAG7JJIBCjAuMTEuOC4xLjGYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjS3KHqqOnqAhXDzKQKHRZKBI4Q4dUDCAc&uact=5'
    return (

        <Card className="footInfo" border-top="info" style={{ position: 'fixed', right: '0px', bottom: '0px', width: '100%', color: 'lightseagreen' }}>
            <Card.Body>
                <Card.Text>
                    Can't find what you are looking for?
                </Card.Text>
                <Link to={lostFound} className="btn btn-light  btn-sm details auth footButton" variant="light">Browse the web</Link>
            </Card.Body>
        </Card>
    )
}

export default CardFooter

