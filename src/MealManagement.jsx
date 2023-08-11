import { useState } from "react";

const data = [
  {
    id: 1,
    name: "珍珠奶茶",
    description: "香濃奶茶搭配QQ珍珠",
    price: 50,
    stock: 20,
  },
  {
    id: 2,
    name: "冬瓜檸檬",
    description: "清新冬瓜配上新鮮檸檬",
    price: 45,
    stock: 18,
  },
  {
    id: 3,
    name: "翡翠檸檬",
    description: "綠茶與檸檬的完美結合",
    price: 55,
    stock: 34,
  },
  {
    id: 4,
    name: "四季春茶",
    description: "香醇四季春茶，回甘無比",
    price: 45,
    stock: 10,
  },
  {
    id: 5,
    name: "阿薩姆奶茶",
    description: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
    stock: 25,
  },
  {
    id: 6,
    name: "檸檬冰茶",
    description: "檸檬與冰茶的清新組合",
    price: 45,
    stock: 20,
  },
  {
    id: 7,
    name: "芒果綠茶",
    description: "芒果與綠茶的獨特風味",
    price: 55,
    stock: 18,
  },
  {
    id: 8,
    name: "抹茶拿鐵",
    description: "抹茶與鮮奶的絕配",
    price: 60,
    stock: 20,
  },
];

function mealManagement() {
  const [stockList, setStockList] = useState(data);
  function handleOnClick(id, calculate) {
    const newStockList = stockList.map((item) => {
      const calc = calculate === "add" ? item.stock + 1 : item.stock - 1;
      return item.id === id
        ? {
            ...item,
            stock: calc,
          }
        : item;
    });
    setStockList(newStockList);
  }

  const [editItem, setEditItem] = useState(null);
  const edit = (item) => {
    setEditItem(item);
    setNewName(item.name);
  };
  const cancelEdit = () => {
    setEditItem(null);
    setNewName("");
  };
  const editDone = () => {
    const newStockList = stockList.map((item) => {
      return item.id === editItem.id ? { ...item, name: newName } : item;
    });
    setStockList(newStockList);
    setEditItem(null);
    setNewName("");
  };

  const [newName, setNewName] = useState("");
  const editName = (e) => {
    setNewName(e.target.value);
  };

  const stockItemArr = stockList.map((item) => {
    return (
      <tr key={item.id}>
        <td>
          <button
            className="btn btn-outline-danger me-2"
            style={{ display: editItem === item ? "inline" : "none" }}
            onClick={cancelEdit}
          >
            取消
          </button>
          <button
            onClick={() => {
              edit(item);
            }}
            style={{ display: editItem === item ? "none" : "inline" }}
            className="btn btn-primary"
          >
            編輯 品項名稱
          </button>
          <button
            style={{ display: editItem === item ? "inline" : "none" }}
            className="btn btn-primary"
            onClick={editDone}
          >
            完成
          </button>
        </td>
        <td>
          <span style={{ display: editItem === item ? "none" : "block" }}>
            {item.name}
          </span>
          <input
            type="text"
            value={newName}
            onChange={editName}
            style={{ display: editItem === item ? "block" : "none" }}
          />
        </td>
        <td>
          <small>{item.description}</small>
        </td>
        <td>{item.price}</td>
        <td>
          <button
            onClick={() => {
              handleOnClick(item.id, "reduce");
            }}
            className="btn btn-primary me-3"
          >
            -
          </button>
          <span className="me-3">{item.stock}</span>
          <button
            onClick={() => {
              handleOnClick(item.id, "add");
            }}
            className="btn btn-primary"
          >
            +
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <table className="table align-middle">
        <thead>
          <tr>
            <th scope="col" className="col-2">編輯</th>
            <th scope="col" className="col-2">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
          </tr>
        </thead>
        <tbody>{stockItemArr}</tbody>
      </table>
    </div>
  );
}

export default mealManagement;
