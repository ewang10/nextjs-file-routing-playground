import Link from "next/link";

const CLIENTS = [
    {
        id: 'spal',
        name: 'Spalony'
    },
    {
        id: 'sag',
        name: 'Sagases'
    }
];
const ClientsPage = () => (
    <div>
        <h1>The Clients Page</h1>
        <ul>
            {
                CLIENTS.map(({id, name}) => (
                    <li key={id}>
                        <Link href={{ pathname: '/clients/[id]', query: { id } }}>
                            {name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default ClientsPage;
