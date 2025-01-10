import { useQuery } from "@tanstack/react-query"
import { query } from "../../apis/query"
import { Link } from "react-router-dom"

const UserPage = () => {
    const { data, isLoading } = useQuery(query.user())
    console.log("data from search page", { data, isLoading })
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <p>User Page</p>
            <div style={{ whiteSpace: "pre-line", "textAlign": "left" }}>
                {JSON.stringify(data, null, 2)}
            </div>
            <Link to='/other'>Go to user Other page</Link>
            <BottomUserPage />
        </div>
    )
}

const BottomUserPage = () => {
    // this is shared not refetch again
    const { data } = useQuery(query.user())
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Bottom User Page</p>
            <div style={{ whiteSpace: "pre-line", "textAlign": "left" }}>
                {JSON.stringify(data, null, 2)}
            </div>
        </div>
    )
}

export default UserPage
