import { ContactDataProps } from "@/libs/contactData";

interface DataCellProps {
  contact: ContactDataProps;
}

const DataCell: React.FC<DataCellProps> = ({ contact }) => {
  return (
    <div className="col-span-2 row-start-2 rounded bg-black p-4">
      <h2 className="mb-2 text-3xl font-bold text-white">{contact.name}</h2>
      <p className="mb-4 text-white">{contact.role}</p>

      <div className="mb-2 text-white">
        <span className="mr-1 font-bold">Email:</span>
        <span>{contact.email}</span>
      </div>

      <div className="text-white">
        <span className="mr-1 font-bold">Phone:</span>
        <span>{contact.phone}</span>
      </div>
    </div>
  );
};

export default DataCell;
