import { useQuery } from "@tanstack/react-query";
import { fetchUsersHttp } from "../http/userHttp";

export default function useFetchFormData(token: string){
    const {data, error, isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: () => fetchUsersHttp(token)
    });

    return {listData: data, error, isLoading};
};
