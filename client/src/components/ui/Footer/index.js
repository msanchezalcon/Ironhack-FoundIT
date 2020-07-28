import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const CardFooter = () => {
    const lostFound = 'https://www.google.com/search?safe=strict&sxsrf=ALeKk02siRSTZWnqrzTKGA8Wb3Y_ms_NNg%3A1595711569861&source=hp&ei=UaAcX5LwMcOZkwWWlJHwCA&q=lost+and+found+near+me&oq=lost+and+found+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BAgjECc6BAguECc6BQgAEJECOggILhDHARCjAjoCCC46CgguEMcBEK8BECc6CAguEMcBEK8BOg0ILhDHARCvARAnEJMCOgsILhDHARCvARCTAjoFCC4QkwJQmQdY3B5gjiBoAHAAeAKAAaYDiAG7JJIBCjAuMTEuOC4xLjGYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjS3KHqqOnqAhXDzKQKHRZKBI4Q4dUDCAc&uact=5'
    return (

        <footer className="page-footer font-small mdb-color darken-3 pt-4 footInfo">
            <hr></hr>
            <div class="footer-copyright text-center py-3">
                <p>Can't find what you are looking for?</p>
                <a href={lostFound} className="btn btn-light  btn-ml details footButton" variant="light"> Browse the web</a>
            </div>
        </footer>
    )
}

export default CardFooter

