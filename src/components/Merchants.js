import { useState } from "react";
import { getAllItems } from "../api/api";
import { useEffect } from "react";
import ConfirmItemModal from "./ConfirmItemModal";
import { buyItem } from "../api/api";

const Merchants = () => {
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const handleBuyItem = () => {
    console.log("selectedItem", selectedItem);
    buyItem(selectedItem)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log("error", e));
  };

  useEffect(() => {
    let canceled = false;
    getAllItems().then((data) => {
      if (canceled || !data) {
        return;
      }
      setItems(data);
    });
    return () => {
      canceled = true;
    };
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <ConfirmItemModal
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        handleBuyItem={handleBuyItem}
      />
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Weapons</h1>
          <p className="mt-2 text-sm text-gray-700">Best prices</p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Damage
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                {items &&
                  items.map((item) => (
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr key={item.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {item.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.type}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.min_damage}-{item.max_damage}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.price} gold
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a
                            onClick={() => {
                              setModalOpen(true);
                              setSelectedItem(item);
                            }}
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Buy
                            <span className="sr-only">,</span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Merchants;
