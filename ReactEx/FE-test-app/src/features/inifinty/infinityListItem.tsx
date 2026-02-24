import type { formDataT } from "../../types/global";

type InfinityListProps = {
    data: formDataT; // Replace 'any' with the actual type of your data items
};

export default function InfinityListItem({data}: InfinityListProps) {
    return (
        <li style={{height: "22rem", textAlign: "center"}} className="infinity-list">
            <h3>{data.name}</h3>
        </li>
    );
}