import { useAuthToken } from "../../hooks/useAuthToken";
import useFetchFormData from "../../hooks/useFetchFormData";
import InfinityListItem from "./infinityListItem";

export default function InfinityPage() {
    const token = useAuthToken();
    const {listData, error, isLoading} = useFetchFormData(token); 

    return (
        <section>
        <h1>Infinity Page</h1>
        <p>This is the Infinity Page.</p>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <ul>
            {listData && listData.map((item) => (
                <InfinityListItem key={item.name} data={item} />
            ))}
        </ul>
        </section>
    );
}