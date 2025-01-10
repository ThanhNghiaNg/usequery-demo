
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { query, QueryKey } from "../../apis/query"
import { Link } from "react-router-dom"

const Section = () => {
    // this is shared not refetch again unless refetch is called
    const { data, isLoading, refetch } = useQuery(query.user())
    const refetchUserData = () => {
        refetch()
    }
    
    const queryClient = useQueryClient()
    const refetchAllData = () => {
        queryClient.invalidateQueries({
            queryKey: [QueryKey.all]
        })
    }
    console.log("data from other section", { data, isLoading })
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h1>Other Section</h1>
            <div style={{ whiteSpace: "pre-line", "textAlign": "left" }}>
                {JSON.stringify(data, undefined, 2)}
            </div>
            <button onClick={refetchUserData}>Refetch User data</button>
            <button onClick={refetchAllData}>Refetch All data</button>
            <Link to='/user'>Go to user page</Link>
        </div>
    )
}

export default Section