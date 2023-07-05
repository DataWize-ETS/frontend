import './InfoRequester.css'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export default () => {
    return (
        <div className="info-main">
            <div className="list-info">
                <ul>
                    <li>Hello requester, here is some information about this application</li>
                    <li>Use this tool to add a new improvement</li>
                    <li>If it has the correct information it will be approved by the administrator and you will be able to view it in Jira</li>
                </ul>
                <Button w={240} p="6" type="submit" bg="green.400" color="white" fontWeight="bold" fontSize="xl"  _hover={{ bg: "green.500" }}>
                    <Link to="/improvement/new">Add new Improve</Link></Button>
            </div>
        </div>
    )
}